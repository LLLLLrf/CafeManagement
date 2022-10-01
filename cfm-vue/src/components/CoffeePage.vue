<template>
  <div style="">
    <div class="menu-name">咖啡系列</div>
    <hr style="background:#2F3CF4;height:2px;margin-left: 160px;"/>

    <DrinkCard ref="DrinkCard" style="position:absolute;left:160px"></DrinkCard>

    <!-- <div class="slide-in-right"><DetailPage></DetailPage></div> -->
    <div class="detail">
      <DetailPage v-if="show" style=""></DetailPage>
    </div>
  </div>
</template>

<script>
import DrinkCard from "./DrinkCard.vue"
import DetailPage from './DetailPage.vue';
export default{
    components:{
    DrinkCard,
    DetailPage
  },
  data() {
    return {
      show: false
    }
  },
  methods:{

  },
  mounted(){
    this.show=this.$refs.DrinkCard.show
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

.detail{
  position: fixed;
  left: 0;
  right: 100px;
}
</style>