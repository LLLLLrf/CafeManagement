<template>
    <div>
        /api/orders
        {{ orders }}
        <br/><br/><br/>
        {{income}}
        <el-button @click="getincome(3)">3-income</el-button>
    </div>
</template>
<script>
import { ElMessage } from 'element-plus'
import OrdersService from '../services/OrdersService'
export default {
    data() {
        return {
            orders: undefined,
            income:undefined
        }
    },
    methods: {
        getincome(day){
            var data={day:day}
            OrdersService.getincomebyday(data)
            .then(response=>{
                this.income=response.data
            })
            .catch(err=>{
                ElMessage.error(err.toString())
            })
        }
    },
    mounted() {
        OrdersService.getAll()
            .then(response => {
                this.orders = response.data
            })
    },
}
</script>