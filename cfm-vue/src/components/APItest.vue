<template>
    <div style="position:absolute;left:160px">
        <!-- {{orders}} -->
        <!-- <el-table :data="orders" stripe style="width: 100%">
            <el-table-column prop="publicid" label="Id" width="180" />
            <el-table-column width="360" label="Order List">
                <template #default="scope" v-if="scope">
                    <el-table :data="scope.row.orderlist.data" :show-header="false">
                        <el-table-column prop="name" width="180" />
                        <el-table-column prop="amount" width="180" />
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column width="180" label="Pay">
                <template #default="scope" v-if="scope">
                    <el-button><a :href="scope.row.payUrl">Pay</a></el-button>
                </template>
            </el-table-column>
        </el-table> -->
        <div>
            {{status}}
        </div>
        <el-button @click="close">Close</el-button>
    </div>
</template>
<script>
// import { ElMessage } from 'element-plus'
// import GoodsService from '../services/GoodsService'
import OrdersService from '../services/OrdersService'
// import http from "../api-http";
export default {
    data(){
        return{
            orders: undefined,
            status:''
        }
    },
    methods:{
        close(){
            this.$router.push("/drink?page=coffee")
        }
    },
    mounted() {
        OrdersService.getunpay({})
            .then(res => {
                this.orders = [res.data[0]]
                console.log(this.orders)
                if(res.data[0]){
                    OrdersService.checkpay({ outTradeNo :this.orders[0].publicid})
                    .then(res=>{
                        this.status=res.data
                    })
                }
                
            })
    },
}
</script>