<template>
  <div style="">
    <div class="menu-name">咖啡系列</div>
    <!-- 这里宽度设100vh才不会有左右滑动 -->
    <hr style="background:#2F3CF4;height:2px;margin-left: 160px;"/>

    <DrinkCard ref="DrinkCard" style="position:absolute;left:160px"></DrinkCard>

  </div>
</template>

<script>
import DrinkCard from "./DrinkCard.vue"
export default{
    components:{
    DrinkCard,
  },
  data() {
    return {
    }
  },
  methods:{

  },
  mounted(){
  }
}
</script>

<style>

.menu-name{
  text-align: left;
  width: 100%;
  margin-left: 200px;
  font-weight: bolder;
}

</style>