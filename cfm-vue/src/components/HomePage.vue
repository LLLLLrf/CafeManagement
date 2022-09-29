<template>
  <div>
    <div class="nav">
      <el-row class="tac">
        <el-col>
          <el-icon><Coffee /></el-icon>
          <h5 class="head-title">ABD cafe</h5>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="1" @click="setPath('CoffeePage')" class="menu-item"  style="margin-top:10px">
              <template #title>
                <el-icon><CoffeeCup /></el-icon>
                <span class="title">咖啡系列</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2" @click="setPath('FruitPage')" class="menu-item">
              <el-icon><IceTea /></el-icon>
              <span class="title">果茶系列</span>
            </el-menu-item>
            <el-menu-item index="3" @click="setPath('MilkPage')" class="menu-item">
              <el-icon><IceDrink /></el-icon> 
              <span class="title">奶茶系列</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>


<script>
export default {
    data(){
        return{
        }
    },
    methods: {
        setPath(comppath){
            this.$router.push('/'+comppath)
            console.log(this.$router)
        },
        
    },
    mounted() {
        this.setPath('CoffeePage')
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
        margin-top: -30px;
        width: 160px;
        float: left;
        height: 100vh;
    }
    .title{
      font-size: larger;
    }

    .menu-item{
      height: 60px;
    }

    .content{
      width: 80%;
    }
</style>