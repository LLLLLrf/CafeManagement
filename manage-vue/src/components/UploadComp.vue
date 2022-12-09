<template>
 <div style="text-align:center">
  <el-upload
    action="#"
    class="upload-demo"
    :limit="10"
    show-file-list
    :auto-upload="false"
    :on-change="selectFile"
    multiple
    drag
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽文件到此处 或 <em>点击此处上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        文件需小于 512Mb
      </div>
    </template>
  </el-upload>
  <el-button type="primary" @click="uploadFiles" >上传</el-button>
  <!-- <div class="card">
      <div class="card-header"> 文件列表 </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <div>
            <el-button type="primary" @click="postTest(file.name)" >下载</el-button>
            <p>{{file.name}}</p>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import UploadService from "../services/UploadFilesService";
import { ElMessage } from 'element-plus'
import axios from 'axios';

export default {
  data () {
    return {
      selectedFiles: "",
      progressInfos: [],
      message: "",
      fileInfos: [],
    }
  },
  methods: {
    postTest(filename){
      var file_req={
        "filename":filename
      }
      axios({
        url:'http://localhost:8080/download',
        method:'post',
        data:file_req,
        responseType: 'blob',
        headers:{
          'Content-Type':'application/json'  //如果写成contentType会报错
        }
      })
      .then(res=>{
        // console.log(res);
        const blog = new Blob([res.data], {
          type: res.data.type
        })
        const url = window.URL.createObjectURL(blog) // 将blob对象转为blob地址
        console.log(url)
        // 创建DOM实现下载
        let a = document.createElement('a')
        a.download = filename
        a.href = url
        a.click()
        ElMessage({
          'message':'开始下载!',
          'type':'success'
        })
      })
      .catch(Error=>{
        console.log(Error);
        ElMessage.error((Error.toString()=='Error: Request failed with status code 404')?
          '此文件不存在!'
            :
          '你没有权限下载此文件!'
        );
      })
    },
    beforeUpload() {
      this.uploadFiles();
      return ;
    },
    selectFile(file,fileList) {
      if (file.status !== 'ready') return;
      var arr=[];
      if(fileList){
        fileList.forEach((item)=>{
          arr.push(item.raw);
        });
      }
      this.progressInfos = [];
      this.selectedFiles = arr;
      // this.$parent.filesList=this.selectedFiles
    },
    uploadFiles() {
      this.message = "";
      this.selectedFiles.forEach((item,index)=>{
        this.upload(index,item);
      });
    },
    upload(idx, file) {
      this.progressInfos[idx] = { percentage: 0, fileName: file.name };
      UploadService.upload(file, (event) => {
        this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
      })
        .then((response) => {
          if(response.data.message.includes("文件上传成功:")){
            ElMessage({
              message:'文件上传成功！',
              type:'success'
            })
          }
          let prevMessage = this.message ? this.message + "\n" : "";
          this.message = prevMessage + response.data.message;
          return UploadService.getFiles();
        })
        .then((files) => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          ElMessage.error(file.name+"上传失败");
          this.progressInfos[idx].percentage = 0;
          this.message = "Could not upload the file:" + file.name;
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    padding: 5px;
    color: white;
    background: gray;
  }
</style>