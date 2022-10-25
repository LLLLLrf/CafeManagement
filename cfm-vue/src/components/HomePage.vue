<template>
  <div>
    <div class="nav">
      <el-row class="tac">
        <el-col>
          <div>
            <el-icon><Coffee /></el-icon>
            <h5 class="head-title">ABD cafe</h5>
          </div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="1" @click="setName('cafe')" class="menu-item"  style="margin-top:10px">
              <template #title>
                <el-icon><CoffeeCup /></el-icon>
                <icon></icon>
                <span class="title">咖啡系列</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2" @click="setName('fruit')" class="menu-item">
              <el-icon><IceTea /></el-icon>
              <span class="title">果茶系列</span>
            </el-menu-item>
            <el-menu-item index="3" @click="setName('milk')" class="menu-item">
              <el-icon><IceDrink /></el-icon> 
              <span class="title">奶茶系列</span>
            </el-menu-item>
            <el-menu-item index="4" @click="api('api')">api</el-menu-item>
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
      api(){
        this.$router.push({name:"api"})
      },
      setName(compname){
        this.$router.push({ name: "drink", query:{page:compname}})
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
        this.setName('cafe')
    },

}
</script>


<style scoped>
    .head-title{
        font-size: larger;
        margin-left: 8px;
        display: inline;
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
    }

    .menu-item{
      height: 60px;
    }

    .content{
      /* width: 100vh; */
      margin-top: -40px;
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