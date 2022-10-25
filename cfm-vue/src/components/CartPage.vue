<template>
    <div class="layout" style="position:absolute;left:160px">
        <div class="menu-name">购物车详情</div>
        <hr style="background:#2F3CF4;height:2px;margin-left: 160px;"/>
        <el-row>
            <el-col :span="10" style="font-size:4em;color:#2F3CF4;font-weight:900;margin-left: 40px;">ORDER</el-col>
        </el-row>
    <div v-for="(item) in this.orderList" :key="item.id">{{item}}</div>
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
    }
},
methods: {
    onsubmit(){
        var orders = {
            paytime: 0,
            finish: 0,
            orderlist: this.orderList,
            category: 'now'
        };
        OrdersService.create(orders)
            .then(response => {
                console.log(response.data);
                ElMessage({
                    message: "order success!",
                    type: "success",
                });
                this.$emit('status',1)
            })
            .catch(err => {
                console.log(err)
                ElMessage.error(err.toString())
            })
    },
    test(){
        console.log(this.orderList)
    }
    
},
}
</script>

<style>
.menu-name{
text-align: left;
font-weight: bolder;
}

.layout{
    margin-left: 0px;
}
</style>