<template>
    <div class="layout">
        <!-- <div class="menu-name">购物车详情</div> -->
        <hr style="background:#2F3CF4;height:2px;"/>
        <el-row>
            <el-col :span="4" style="font-size:4em;color:#2F3CF4;font-weight:900;margin-bottom: 20px;">ORDER</el-col>
        </el-row>
    <!-- <div v-for="(item) in this.orderList" :key="item.id">{{item}}</div> -->
    <el-descriptions title="Order Info" column="6" border>
        <div v-for="(item) in this.orderList" :key="item.id">
            <el-descriptions-item label="Product id">
                <el-tag size="small">{{item.id}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Product Name">
                {{item.name}}
            </el-descriptions-item>
            <el-descriptions-item label="Product amount">
                {{item.amount}}
            </el-descriptions-item>
            <el-descriptions-item label="Product temp">
                {{item.temp}}
            </el-descriptions-item>
            <el-descriptions-item label="Product sugar">
                {{item.sugar}}
            </el-descriptions-item>
            <el-descriptions-item label="delete">
                <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled"
                    title="Are you sure to delete this?" @confirm="delitem(item.id)">
                    <template #reference>
                        <el-button>X</el-button>
                    </template>
                </el-popconfirm>
            </el-descriptions-item>
            
        </div>
        <el-descriptions-item label="Total Price">
            {{totalprice}}
        </el-descriptions-item>
    </el-descriptions>

    
    <el-radio-group v-model="paymodel" style="width:max-content;margin:auto">
        <el-radio label="WeChat" style="margin-top:40px;margin-bottom:20px">
            <img src="../assets/payment/wechat.png" style="width:40px;height:30px;align-items: center;justify-items: center;">
            <div style="float: right;height: 10px;margin-top: 6px;">
                WeChat Pay
            </div>
        </el-radio>
        <el-radio label="Apple" style="margin-top:40px;margin-bottom:20px">
            <img src="../assets/payment/apple.png" style="width:80px;height:60px;align-items: center;justify-items: center;">
            <div style="float: right;height: 10px;margin-top: 20px;">
                Apple Pay
            </div>
        </el-radio>
    </el-radio-group>
    <div>
        
        <el-button @click="onsubmit()">submit</el-button>
    </div>
    </div>
</template>

<script>
import OrdersService from '@/services/OrdersService';
import { ElMessage } from 'element-plus';

export default{
props:['orderList'],
data() {
    return {
        totalprice:0,
        paymodel: '',
    }
},
methods: {
    onsubmit(){
        var time = new Date().toLocaleString().split(/[ ,/,:]/).join('')
        var orders = {
            publicid:time,
            paytime: 0,
            finish: 0,
            orderlist: this.orderList,
            category: 'now',
            totalprice:this.totalprice
        };
        OrdersService.create(orders)
            .then(response => {
                console.log(response.data);
                ElMessage({
                    message: "order success!",
                    type: "success",
                });
                this.$emit('status', { status: 'success' ,data:{}})
            })
            .catch(err => {
                console.log(err)
                ElMessage.error(err.toString())
            })
    },
    delitem(id) {
        var data=[]
        this.orderList.forEach(item=>{
            if(item.id<id){
                data.push(item)
            }
            if(item.id>id){
                item.id--
                data.push(item)
            }
        })
        this.$emit('status', { status: 'change', data: data })

    }
},
mounted(){
    this.orderList.forEach((item)=>{
        this.totalprice+=item.price*item.amount
    })
}
}
</script>

<style>
.menu-name{
text-align: left;
font-weight: bolder;
}

.layout{
    margin-top: -20px;
    margin-left: 0px;
}
</style>