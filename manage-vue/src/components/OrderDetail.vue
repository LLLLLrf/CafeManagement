<template>
  <div style="">
    <div class="menu-name">订单详情</div>
    <hr style="background:#2F3CF4;height:2px;margin-left: 0px;"/>
    <div class="card">
      <el-icon class="card-icon" :size="26"><List /></el-icon>
      <div class="card-title">订单详情</div>
      <div v-for="item in order" :key="item.id">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>{{id}}</span>
              <el-button class="button" text>Finish</el-button>
            </div>
          </template>
          <div v-for="(subitem) in this.order.orderlist" :key="subitem.id">
            <el-descriptions-item label="Product id">
              <el-tag size="small">{{ subitem.id}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Product Name">
              {{ subitem.name}}
            </el-descriptions-item>
            <el-descriptions-item label="Product amount">
              {{ subitem.amount}}
            </el-descriptions-item>
            <el-descriptions-item label="Product temp">
              {{ subitem.temp}}
            </el-descriptions-item>
            <el-descriptions-item label="Product sugar">
              {{ subitem.sugar}}
            </el-descriptions-item>
          </div>
        </el-card>
      </div>
    </div>
    <div class="card" style="margin-left:200px">
      <el-icon class="card-icon" :size="26"><Tickets /></el-icon>
      <div class="card-title">账单</div>
      <div></div>
    </div>
  </div>
</template>

<script>
import OrdersService from '@/services/OrdersService';
export default{
    components:{
  },
  data() {
    return {
      order:undefined
    }
  },
  methods:{

  },
  mounted(){
    OrdersService.getAll()
      .then(response => {
        this.order = response.data
      })
  }
}
</script>

<style>

.menu-name{
  text-align: left;
  width: 100%;
  margin-left: 40px;
  font-weight: bolder;
}

.card {
    width: 440px;
    height: 800px;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

.card-title{
  font-weight: bold;
  font-size: 1.8em;
  font-family: "黑体";
  text-align: left;
  margin-top: 30px;
  margin-left: 20px;
  /* display: inline; */
  float: left;
}

.card-icon{
  /* display: inline; */
  margin-left: 40px;
  margin-top: 34px;
  float: left;
}
</style>