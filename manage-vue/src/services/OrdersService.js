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
  getincomebyday(data){
    return http.post(`/orders/income`,data)
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
}
export default new OrdersService();