import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/coffeepage",
    name: "coffeepage",
    component:() => import("./components/CoffeePage")
  },
  {
    path: "/fruitpage",
    name: "fruitpage",
    component:() => import("./components/FruitPage")
  },
  {
    path: "/milkpage",
    name: "milkpage",
    component:() => import("./components/MilkPage")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;