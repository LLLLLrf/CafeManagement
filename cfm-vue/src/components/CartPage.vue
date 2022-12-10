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
                        <!-- <el-button>X</el-button> -->

                        <button class="noselect delbtn"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                        </button>

                    </template>
                </el-popconfirm>
            </el-descriptions-item>
            
        </div>
        <el-descriptions-item label="Total Price">
            {{totalprice}}
        </el-descriptions-item>
    </el-descriptions>
    <el-button @click="test">test</el-button>
    
    <!-- <div v-if="!payUrl"> -->
    <el-radio-group v-model="paymodel" style="width:max-content;margin:auto">
        <el-radio label="Alipay" style="margin-top:40px;margin-bottom:20px">
            <img src="../assets/payment/alipay.png" style="width:40px;height:40px;align-items: center;justify-items: center;margin-right: 10px;">
            <div style="float: right;height: 12px;margin-top: 12px;font-weight: 600;font-size: 1.2em;">
                Alipay
            </div>
        </el-radio>
        <!-- <el-radio label="Apple" style="margin-top:40px;margin-bottom:20px">
            <img src="../assets/payment/apple.png" style="width:80px;height:60px;align-items: center;justify-items: center;">
            <div style="float: right;height: 12px;margin-top: 20px;font-weight: 600;font-size: 1.2em;">
                Apple Pay
            </div>
        </el-radio> -->
    </el-radio-group>
    <div>
        <!-- <el-button v-if="payUrl"><a :href="payUrl">to pay</a></el-button> -->
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
    <!-- <div v-if="payUrl">
        <el-row><iframe :src="payUrl" class="iframe"/></el-row>
        <el-row><el-button @click="close()" style="margin:auto;">Close</el-button></el-row>
    </div> -->
    
    </div>
</template>

<script>
import OrdersService from '@/services/OrdersService';
import { ElMessage } from 'element-plus';

export default{
props:['orderList'],
inject:['reload'],
data() {
    return {
        totalprice:0,
        paymodel: '',
        payUrl:undefined,
        publicid:0
    }
},
methods: {
    test(){
        console.log(this.totalprice)
    },
    onsubmit(){
        if(!this.orderList.length){
            ElMessage.error("Empty Cart")
            this.$emit('status', { status: 'empty', data: {} })
            return
        }
        var date = new Date()
        var DD = String(date.getDate()).padStart(2, '0');
        var MM = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        var hh = String(date.getHours()).padStart(2, '0');
        var mm = String(date.getMinutes()).padStart(2, '0');
        var ss = String(date.getSeconds()).padStart(2, '0');
        this.publicid = yyyy + MM + DD + hh + mm + ss;
        console.log(this.publicid)
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
                setTimeout(() => {
                    window.open(this.payUrl)
                    // const BrowserWindow = remote.BrowserWindow;

                    // var win = new BrowserWindow({ width: 800, height: 600, show: false });
                    // win.on('closed', function () {
                    //     win = null;
                    // });

                    // win.loadURL(this.payUrl);
                    // win.show();
                }, 500);
                this.$emit('status', { status: 'success' ,data:{}})
                // this.reload()
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
        var orderlist=this.orderList
        orderlist.splice(id, 1)
        console.log(orderlist)
        this.$emit('status', { status: 'change', data: orderlist })
    },
    close(){
        // setTimeout(() => {
        //     location.reload()
        // }, 1000);
        // OrdersService.checkpay({ outTradeNo :this.publicid})
        // .then(res=>{
        //     ElMessage({
        //         message:res.data
        //     })
        //     setTimeout(() => {
        //             location.reload()
        //         }, 1000);
            
        // })
    }
},
mounted(){
    if(this.orderList.length){
        this.orderList.forEach((item)=>{
            console.log(item.price)
            this.totalprice+=item.price*item.amount
        })
    }
    else{
        this.totalprice=0
    }
    
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


.iframe{
    width: 80%;
    height: 400px;
    margin: auto;
}


.delbtn {
 margin-left: 20px;
 width: 88px;
 height: 28px;
 cursor: pointer;
 display: flex;
 align-items: center;
 background: red;
 border: none;
 border-radius: 5px;
 box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
 background: #e62222;
}

/* .delbtn, .delbtn span {
 transition: 200ms;
} */

.delbtn .text {
 transform: translateX(8px);
 color: white;
 font-weight: bold;
}

.delbtn .icon {
 position: absolute;
 border-left: 1px solid #c41b1b;
 transform: translateX(48px);
 height: 20px;
 width: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
}

.delbtn svg {
 width: 15px;
 fill: #eee;
}

.delbtn:hover {
 background: #ff3636;
}

/* .delbtn:hover .text {
 color: transparent;
}

.delbtn:hover .icon {
 width: 140px;
 border-left: none;
 transform: translateX(0);
}

.delbtn:focus {
 outline: none;
}

.delbtn:active .icon svg {
 transform: scale(0.8);
} */
</style>