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
}
export default new OrdersService();