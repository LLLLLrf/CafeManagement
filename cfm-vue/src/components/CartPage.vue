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

    
    <div v-if="!payUrl">
    <el-radio-group v-model="paymodel" style="width:max-content;margin:auto">
        <el-radio label="Alipay" style="margin-top:40px;margin-bottom:20px">
            <img src="../assets/payment/alipay.png" style="width:40px;height:40px;align-items: center;justify-items: center;">
            <div style="float: right;height: 10px;margin-top: 12px;">
                Alipay
            </div>
        </el-radio>
        <!-- <el-radio label="Apple" style="margin-top:40px;margin-bottom:20px">
            <img src="../assets/payment/apple.png" style="width:80px;height:60px;align-items: center;justify-items: center;">
            <div style="float: right;height: 10px;margin-top: 20px;">
                Apple Pay
            </div>
        </el-radio> -->
    </el-radio-group>
    <el-row><el-button @click="onsubmit()" style="margin:auto;">submit</el-button></el-row>
    </div>
    <div v-if="payUrl">
        <el-row><iframe :src="payUrl" class="iframe"/></el-row>
        <el-row><el-button @click="close()" style="margin:auto;">Close</el-button></el-row>
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
        payUrl:undefined,
        publicid:0
    }
},
methods: {
    onsubmit(){
        if(!this.orderList.length){
            ElMessage.error("Empty Cart")
            this.$emit('status', { status: 'empty', data: {} })
            return
        }
        this.publicid = new Date().toLocaleString().split(/[ ,/,:]/).join('')
        var orders = {
            publicid:this.publicid,
            paytime: 0,
            finish: 0,
            orderlist: {data:this.orderList},
            category: this.paymodel,
            totalprice:this.totalprice
        };
        OrdersService.create(orders)
            .then(response => {
                this.payUrl=response.data
                console.log(this.payUrl);
                ElMessage({
                    message: "order success!",
                    type: "success",
                });
                // setTimeout(() => {
                //     window.location.href = this.payUrl
                // }, 500);
                // this.$emit('status', { status: 'success' ,data:{}})
            })
            .catch(err => {
                console.log(err)
                ElMessage.error(err.toString())
            })
            // setTimeout(() => {
            //         location.reload()
            //     }, 200);
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
    },
    close(){
        OrdersService.checkpay({ outTradeNo :this.publicid})
        .then(res=>{
            ElMessage({
                message:res.data
            })
            setTimeout(() => {
                    location.reload()
                }, 1000);
            
        })
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
.iframe{
    width: 80%;
    height: 400px;
    margin: auto;
}
</style>