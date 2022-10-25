<template>
  <div>
    <div class="nav">
      <el-row class="tac">
        <el-col>
          <div>
            <el-icon><Coffee color="#2F3CF4"/></el-icon>
            <h1 class="head-title">ABD cafe</h1>
          </div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="1" @click="setPath('OrderDetail')" class="menu-item"  style="margin-top:10px">
              <template #title>
                <el-icon><CoffeeCup color="#2F3CF4"/></el-icon>
                <icon></icon>
                <span class="title">订单详情</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2" @click="setPath('ProductDetail')" class="menu-item">
              <el-icon><IceTea color="#2F3CF4"/></el-icon>
              <span class="title">商品详情</span>
            </el-menu-item>
            <el-menu-item index="3" @click="setPath('TotalProfit')" class="menu-item">
              <el-icon><IceDrink color="#2F3CF4"/></el-icon> 
              <span class="title">收入统计</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="cart" @click="goCart('CartPage')">
      <!-- <el-icon style="cart-icon" :size="22" color="#fff"><ShoppingCart /></el-icon> -->
      <div class="cart-num">{{num}}</div>
      <div class="cart-name">购物车</div>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>


<script>
export default {
    // props:['num'],
    data(){
        return{
          num:0
        }
    },
    methods: {
      changepage(comppath){
        this.setPath(comppath)
      },
      setPath(comppath){
        this.$router.push('/'+comppath)
        console.log(this.$router)
      },
      addCart(){
        this.num+=1
      },
      goCart(comppath){
        this.$router.push('/'+comppath)
      }
      
    },
    mounted() {
        this.setPath('OrderDetail')
    },

}
</script>


<style scoped>
    .head-title{
        font-size: larger;
        margin-left: 8px;
        display: inline;
        color: #2F3CF4;
    }
    .nav{
        /* margin-top: -30px; */
        width: 160px;
        position: fixed;
        height: 100vh;
        z-index: 1000;
    }
    .title{
      font-size: larger;
      color: #2F3CF4;
      font-weight: bolder;
    }

    .menu-item{
      height: 60px;
    }

    .content{
      /* width: 100vh; */
      margin-top: -40px;
      margin-left: 160px;
    }
    .cart{
      position: fixed;
      bottom: 50px;
      right: 50px;
      line-height: 60px;
      width: 160px;
      border-radius: 30px;
      color: #fff;
      background: #2F3CF4;
      z-index: 10;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    .cart-num{
      display: inline;
      border-radius: 26px;
      color: #2F3CF4;
      font-size: larger;
      padding: 14px 18px;
      background: #fff;
    }
    .cart-name{
      display: inline;
      margin-left: 30px;
      margin-right: 20px;
    }



    .icon {
      width: 50px;
      height: 50px;
      /* vertical-align: -0.15em; */
      fill: currentColor;
      overflow: hidden;
    }
</style>