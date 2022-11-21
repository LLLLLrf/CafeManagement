<template>
  <div>
    <div style="">
      <div class="menu-name">收入统计</div>
      <hr style="background:#2F3CF4;height:2px;margin-left: 160px;" />
    </div>
    
    <div class="card1" style="margin-left:200px">
      <div class="card-title"></div>
      <DrawChart></DrawChart>
      <el-row>{{this.income.week}}</el-row>
    </div>
    
    <div class="card2" style="margin-left:100px;height: max-content;width: max-content;">
      <div class="card-title"></div>
      <el-row>{{this.income.day}}</el-row>
      <DrawPieChart></DrawPieChart>
    </div>
    
    <div class="card3" style="margin-left:200px;height: max-content;width: max-content;">
      <div class="card-title"></div>
      <MonthChart></MonthChart>
      <el-row>{{this.income.month}}</el-row>
    </div>
    
    <div class="card4" style="margin-left:250px">
      <div class="card-title">本年收入</div>
      <el-row>{{this.income.year}}</el-row>
    </div>
    
    <div class="card5" style="margin-left:250px">
      <div class="card-title">本日饮品排行</div>
    </div>

  </div>
</template>

<script>

import { ElMessage } from 'element-plus'
import OrdersService from '../services/OrdersService'
import DrawChart from './DrawChart.vue';
import DrawPieChart from './DrawPieChart.vue';
import MonthChart from './MonthChart.vue';
export default{
  components:{
      DrawChart,DrawPieChart,MonthChart
},
  data() {
    return {
      income:{
        day:undefined,
        week:undefined,
        month:undefined,
        year:undefined
      },
      mid:undefined
    }
  },
  methods:{
    getincome() {
      var data = { day: 1 }
      OrdersService.getincomebyday(data)
      .then(response => {
        this.income.day = response.data.income
      })
      .catch(err => {
        ElMessage.error(err.toString())
      })
      data = { day: 7 }
      OrdersService.getincomebyday(data)
        .then(response => {
          this.income.week = response.data.income
        })
        .catch(err => {
          ElMessage.error(err.toString())
        })
      data = { day: 30 }
      OrdersService.getincomebyday(data)
        .then(response => {
          this.income.month = response.data.income
        })
        .catch(err => {
          ElMessage.error(err.toString())
        })
      data = { day: 365 }
      OrdersService.getincomebyday(data)
        .then(response => {
          this.income.year = response.data.income
        })
        .catch(err => {
          ElMessage.error(err.toString())
        })
    }
  },
  mounted() {
    this.getincome();
  },
}
</script>

<style scoped>
.menu-name{
text-align: left;
width: 100%;
margin-left: 200px;
font-weight: bolder;
}


.card1 {
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

/* 右边较长的那个 */
.card2 {    

    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

.card3 {

    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

.card4 {

    width: 440px;
    height: 230px;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

.card5 {

    width: 440px;
    height: 230px;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

</style>