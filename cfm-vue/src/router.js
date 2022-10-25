import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/drink",
    name: "drink",
    component:() => import("./components/DrinkCard.vue")
  },
  // {
  //   path: "/fruitpage",
  //   name: "fruitpage",
  //   component:() => import("./components/FruitPage")
  // },
  // {
  //   path: "/milkpage",
  //   name: "milkpage",
  //   component:() => import("./components/MilkPage")
  // },
  {
    path:"/cartpage",
    name:"cartpage",
    component:() => import("./components/CartPage.vue")
  },
  {
    path: '/api',
    name: 'api',
    component:() => import('./components/APItest.vue')
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;