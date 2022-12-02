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
            <div style="float: right;height: 12px;margin-top: 6px;font-weight: 600;font-size: 1.2em;">
                WeChat Pay
            </div>
        </el-radio>
        <el-radio label="Apple" style="margin-top:40px;margin-bottom:20px">
            <img src="../assets/payment/apple.png" style="width:80px;height:60px;align-items: center;justify-items: center;">
            <div style="float: right;height: 12px;margin-top: 20px;font-weight: 600;font-size: 1.2em;">
                Apple Pay
            </div>
        </el-radio>
    </el-radio-group>
    <div>
        <el-button v-if="payUrl"><a :href="payUrl">to pay</a></el-button>
        <!-- <el-button v-else @click="onsubmit()">submit</el-button> -->
        <button @click="onsubmit()" class="btn">
            <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
                </div>
            </div>
            <span>Submit</span>
        </button>

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
        payUrl:undefined
    }
},
methods: {
    onsubmit(){
        var time = new Date().toLocaleString().split(/[ ,/,:]/).join('')
        var orders = {
            publicid:time,
            paytime: 0,
            finish: 0,
            orderlist: {data:this.orderList},
            category: 'now',
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
                // this.$emit('status', { status: 'success' ,data:{}})
            })
            .catch(err => {
                console.log(err)
                ElMessage.error(err.toString())
            })
            setTimeout(() => {
                    location.reload()
                }, 200);
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

.btn {
  font-family: inherit;
  margin-right: 10px;
  float: right;
  font-size: 20px;
  background: #2F3CF4;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
}

.btn span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

.btn svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

.btn:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

.btn:hover svg {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

.btn:hover span {
  transform: translateX(5em);
}

.btn:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}


</style>