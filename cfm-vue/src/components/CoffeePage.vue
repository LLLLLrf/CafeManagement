<template>
  <div>
    <DrinkCard></DrinkCard>
    <!-- <div class="slide-in-right"><DetailPage></DetailPage></div> -->
    <transition>
      <DetailPage v-if='show' @reload="reload"></DetailPage>
    </transition>

  </div>
</template>

<script>
import DrinkCard from "./DrinkCard.vue"
import DetailPage from './DetailPage.vue';
export default{
    props:{show:Boolean},
    components:{
    DrinkCard,
    DetailPage
  },
    methods: {
      reload(){
        alert('load')
        window.reload()
      }
    },
}
</script>

<style>
  /* @keyframes slide-in-right {
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
} */
.v-enter, .v-leave-to {
   transform: translateX(100%);
}
</style>