<template>
  <div>
    <div style="">
      <div class="menu-name">Revenue Statistics</div>
      <hr style="background:#2F3CF4;height:2px;" />
    </div>
    
    <div class="sevenday" style="margin-left:40px;margin-bottom: 20px;width:max-content">
      <div class="card-title"></div>
      <DrawChart></DrawChart>
      <el-row>{{this.income.week}}</el-row>
    </div>
    
    <div class="today" style="float: right;margin-right:6vw;height: max-content;width: max-content;margin-bottom: 20px;">
      <div class="card-title"></div>
      <el-row>{{this.income.day}}</el-row>
      <DrawPieChart></DrawPieChart>
    </div>
    
    <div class="month" style="float: right;margin-right:6vw;margin-bottom: 20px;height: max-content;width: max-content;">
      <div class="card-title"></div>
      <MonthChart></MonthChart>
      <el-row>{{this.income.month}}</el-row>
    </div>
    
    <div class="ranking" style="margin-left:40px">
        <div class="card-title"></div>
        <RankingChart></RankingChart>
      </div>

    <div class="year" style="float:left; margin-left:40px;">
      <div class="card-title"></div>
      <YearChart></YearChart>
      <el-row>{{this.income.year}}</el-row>
    </div>
    

  </div>
</template>

<script>

import { ElMessage } from 'element-plus'
import OrdersService from '../services/OrdersService'
import DrawChart from './DrawChart.vue';
import DrawPieChart from './DrawPieChart.vue';
import MonthChart from './MonthChart.vue';
import YearChart from './YearChart.vue';
import RankingChart from './RankingChart.vue'
export default{
  components:{
      DrawChart,DrawPieChart,MonthChart,YearChart,RankingChart
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
    // this.getincome();
  },
}
</script>

<style scoped>
.menu-name{
text-align: left;
margin-left: 40px;
font-weight: bolder;
}


.sevenday {
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    margin-top: 20px;
    float: left;
}

/* 右边较长的那个 */
.today {    

    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    margin-top: 20px;
    float: left;
}

.month {

    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    margin-top: 20px;
    float: left;
}

.year {

    width: max-content;
    height: max-content;
    margin-bottom: 60px;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    margin-top: 20px;
    float: left;
}

.ranking {
    margin-bottom: 20px;
    width: max-content;
    height: max-content;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    margin-top: 20px;
    float: left;
}

</style>