<template>
    <div>
        /api/orders
        {{ orders }}
        <br/><br/><br/>
        /api/goods
        {{ goods }}
        <br /><br /><br />
        {{income}}
        <el-button @click="getincome(3)">3-income</el-button>
        <br /><br /><br />
        /api/files
        {{files}}
        <br /><br /><br />
        <UploadComp></UploadComp>
    </div>
</template>
<script>
import UploadComp from './UploadComp.vue'
import { ElMessage } from 'element-plus'
import OrdersService from '../services/OrdersService'
import GoodsService from '../services/GoodsService'
import UploadService from '../services/UploadFilesService'
export default {
    components: { UploadComp },
    data() {
        return {
            orders: undefined,
            income:undefined,
            fileList:undefined,
            files:undefined,
            goods:undefined
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
        GoodsService.getAll()
            .then(response => {
                this.goods = response.data
            })
        UploadService.getFiles()
            .then(response => {
                this.files = response.data
            })
    },
}
</script>