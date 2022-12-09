import http from "../api-http";
class GoodsService {
  getAll() {
    return http.get("/goods");
  }
  getbyname(name){
    return http.get(`/goods/${name}`);
  }
  create(data) {
  //   data : {
  //     name: 'cafename',
  //     class: 'COFFEE',
  //     ask: {
  //       temp: ["Hot", "Cold"],
  //       sugar: ["Less","Normal"]
  //     },
  //     sale: 1,
  //     image_name: 'cafe.png',
  //     image: 0,
  //     price: 10,
  //     describe: 'this is sample cafe'
  // };
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