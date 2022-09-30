<template>
  <div>
    <DrinkCard ref="DrinkCard"></DrinkCard>
    <!-- <div class="slide-in-right"><DetailPage></DetailPage></div> -->
    <div>
      <DetailPage v-if="show" style="float:left;width:800px"></DetailPage>
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
  @keyframes slide-in-right {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
  .slide-in-right {
	animation: slide-in-right 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 150ms backwards;
}
/* .v-enter, .v-leave-to {
   transform: translateX(100%);
} */
</style>