import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/orderdetail",
    name: "orderdetail",
    component:() => import("./components/OrderDetail.vue")
  },
  {
    path: "/productdetail",
    name: "productdetail",
    component:() => import("./components/ProductDetail.vue")
  },
  {
    path: "/totalprofit",
    name: "totalprofit",
    component:() => import("./components/TotalProfit")
  },
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