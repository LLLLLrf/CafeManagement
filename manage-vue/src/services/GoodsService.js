import http from "../api-http";
import UploadFilesService from "./UploadFilesService";
class GoodsService {
  getAll() {
    return this.getImg(http.get("/goods"));
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
  getImg(data){
    data.then(response=>{
      // console.log(response.data[0].image_name)
      for(var i=0;i<response.data.length;i++){
        var img=UploadFilesService.getFilesByName(response.data[i].image_name)
        console.log(img)
      }
    })
    return data;
  }
}
export default new GoodsService();