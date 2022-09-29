<!-- <template>
    <div>
        <div>
            <nav>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                >
                    <el-menu-item index="1" @click="setComp('home')">首页</el-menu-item>
                    <el-menu-item index="2" @click="setComp('rankinglist')">院校排行</el-menu-item>
                    <el-menu-item index="3" @click="setComp('chooseschool')">智能择校</el-menu-item>
                    <el-menu-item index="4" @click="setComp('user')">我的</el-menu-item>
                </el-menu>
            </nav>
        </div>
        <router-view></router-view>
    </div>
</template> -->

<template>
    <div class="common-layout">
    <el-row class="tac">
      <el-col :span="3">
        <el-icon><Coffee /></el-icon>
        <h5 class="head-title">ABD cafe</h5>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="1" @click="setPath('cafe')">
            <template #title>
              <!-- <el-icon><location /></el-icon> -->
              <el-icon><CoffeeCup /></el-icon>
              <span class="title">咖啡系列</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><IceTea /></el-icon>
            <span class="title">果茶系列</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><IceDrink /></el-icon>
            <span class="title">奶茶系列</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    </div>
  </template>


<script>
export default {
    data(){
        return{
        }
    },
    methods: {
        setComp(comppath){
            this.$router.push('/'+comppath)
        },
        
    },
    mounted() {
        this.setComp('home')
    },
}
</script>


<style>
    .head-title{
        margin-left: 6px;
        display: inline;
        height: 28px;
        line-height: 20px;
        vertical-align: middle;
    }
    .common-layout{
        margin-top: -40px;
    }
    .title{
    }
</style>