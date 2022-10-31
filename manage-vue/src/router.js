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
    path:"/singleproduct",
    name:"singleproduct",
    component:() => import("./components/SingleProduct.vue")
  },
  {
    path: '/singleorder',
    name: 'singleorder',
    component:() => import('./components/SingleOrder.vue')
  },
  {
    path: '/api',
    name: 'api',
    component:() => import('./components/ManageAPI.vue')
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;