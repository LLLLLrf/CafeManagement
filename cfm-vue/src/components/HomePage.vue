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
          <el-menu-item index="2" @click="setPath('')">
            <el-icon><IceTea /></el-icon>
            <span class="title">果茶系列</span>
          </el-menu-item>
          <el-menu-item index="3" @click="setPath('')">
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
        setPath(comppath){
            this.$router.push('/'+comppath)
        },
        
    },
    mounted() {
        this.setPath('home')
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