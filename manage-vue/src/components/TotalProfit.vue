<template>
  <div style="">
      <div class="menu-name">收入统计</div>
      <hr style="background:#2F3CF4;height:2px;margin-left: 160px;"/>
  </div>

    <div class="card1" style="margin-left:250px">
      <div class="card-title">七日收入</div>
    </div>

    <div class="card2" style="margin-left:250px">
      <div class="card-title">本日收入</div>
    </div>

    <div class="card3" style="margin-left:250px">
      <div class="card-title">本月收入</div>
    </div>

    <div class="card4" style="margin-left:250px">
      <div class="card-title">本年收入</div>
    </div>

    <div class="card5" style="margin-left:250px">
      <div class="card-title">本日饮品排行</div>
    </div> 

</template>

<script>
export default{
  components:{
},
data() {
  return {
  }
},
}
</script>

<style>
.menu-name{
text-align: left;
width: 100%;
margin-left: 200px;
font-weight: bolder;
}


.card1 {
    position:absolute;
    top:70px;
    width: 440px;
    height: 230px;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    margin-left: 80px;
    margin-top: 40px;
    float: left;
}

/* 右边较长的那个 */
.card2 {    
    position:absolute;
    top:70px;
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
    position:absolute;
    top:320px;
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
    position:absolute;
    top:570px;
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
    position:absolute;
    top:570px;
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