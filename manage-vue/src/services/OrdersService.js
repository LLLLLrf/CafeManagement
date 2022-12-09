import http from "../api-http";
class OrdersService {
  getAll() {
    return http.get("/orders");
  }
  create(data) {
    return http.post("/orders", data);
  }
  update(id, data) {
    return http.put(`/orders/${id}`, data);
  }
  delete(id) {
    return http.delete(`/orders/${id}`);
  }
  deleteAll() {
    return http.delete(`/orders`);
  }
  findbykey(data){
    return http.post(`/orders/key`,data)
  }
  getorderbylrday(data){
    // data:{lday:'2022-11-22 21:20:40',rday:'2022-11-24 21:20:40'}
    return http.post(`/orders/lrday`,data)
  }
  findbyId(data){
    return http.post(`/orders/id`,data)
  }
  getweekdata(data){
    // data:{}
    return http.post(`/orders/getweekdata`,data);
  }
  getmonthdata(data){
    // data:{}
    return http.post(`/orders/getmonthdata`,data);
  }
  getdaydata(data){
    // data:{}
    return http.post(`/orders/getdaydata`,data);
  }
  finishbyPublicid(data){
    // data:{publicid:'202212020319'}
    return http.post(`/orders/finishbyPublicid`,data)
  }
  getMonthSales(data){
    // data:{}
    return http.post(`/orders/getMonthSales`,data);
  }
}
export default new OrdersService();