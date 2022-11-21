<template>
  <div style="">
      <div class="menu-name">收入统计</div>
      <hr style="background:#2F3CF4;height:2px;margin-left: 160px;"/>
  </div>

    <div class="card1" style="margin-left:250px;height: max-content;">
      <div class="card-title"></div>
      <DrawChart></DrawChart>
    </div>

    <div class="card2" style="margin-left:150px;height: max-content;width: max-content;">
      <div class="card-title"></div>
      <DrawPieChart></DrawPieChart>
    </div>

    <div class="card3" style="margin-left:250px;height: max-content;width: max-content;">
      <div class="card-title"></div>
      <MonthChart></MonthChart>
    </div>

    <div class="card4" style="margin-left:250px">
      <div class="card-title">本年收入</div>
    </div>

    <div class="card5" style="margin-left:250px">
      <div class="card-title">本日饮品排行</div>
    </div> 

</template>

<script>
import DrawChart from './DrawChart.vue';
import DrawPieChart from './DrawPieChart.vue';
import MonthChart from './MonthChart.vue';
export default{
  components:{
    DrawChart,DrawPieChart,MonthChart
},
data() {
  return {
  }
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

    left: 500px;
    width:440px;
    height: 480px;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

.card3 {

    width: 440px;
    height: 230px;
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

    left:500px;
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