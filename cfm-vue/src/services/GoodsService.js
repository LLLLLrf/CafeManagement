import http from "../api-http";
class GoodsService {
  getAll() {
    return http.get("/goods");
  }
  getbyname(name){
    return http.get(`/goods/${name}`);
  }
  create(data) {
    return http.post("/goods", data);
  }
  update(id, data) {
    return http.put(`/goods/${id}`, data);
  }
  delete(id) {
    return http.delete(`/goods/${id}`);
  }
  deleteAll() {
    return http.delete(`/goods`);
  }
}
export default new GoodsService();