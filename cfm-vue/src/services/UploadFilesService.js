import http from "../api-http";
class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress});
  }
  getFiles() {
    return http.get("/files");
  }
  getFilesByName(name) {
    console.log(name)
    return http.get(`/files/${name}`);
  }
}
export default new UploadFilesService();