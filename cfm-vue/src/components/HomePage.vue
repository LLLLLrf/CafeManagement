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
    <el-row class="tac">
      <el-col :span="3">
        <h5 class="mb-2">Default colors</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <!-- <el-icon><location /></el-icon> -->
              <el-icon><Coffee /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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