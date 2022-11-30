<template>
    <div style="text-align: center; 
      font-family:Impact;
      font-weight:500;
      font-size: 1.4em;">
  
      <el-upload
        action="#"
        class="upload"
        :limit="10"
        show-file-list
        :auto-upload="false"
        :on-change="selectFile"
        multiple
        drag
      >
        <img
          class="upload-icon"
          src="../assets/icons/upload-file.png"
          alt="upload"
        />
        <div class="el-upload__text">拖拽文件到此处 或 <em>点击此处上传</em></div>
        <template #tip>
          <div class="el-upload__tip">文件需小于 512Mb</div>
        </template>
      </el-upload>
      <el-button type="primary" @click="uploadFiles()">上传</el-button>
      <el-button type="primary" @click="commitData()">保存</el-button>

    </div>
  </template>
  
<script>
import { ElMessage } from "element-plus";
  
export default {
    data() {
      return {
        selectedFiles: "",
        progressInfos: [],
        message: "",
        fileInfos: [],
        type: "",
        uploader: "",
        isUpload: false,
        isErr: false,
        phoneNum: undefined,
        fileName: undefined,
      };
    },
    mounted() {

    },
    methods: {
      beforeUpload() {
        this.uploadFiles();
        return;
      },
      selectFile(file, fileList) {
        if (file.status !== "ready") return;
        var arr = [];
        if (fileList) {
          fileList.forEach((item) => {
            arr.push(item.raw);
          });
        }
        this.progressInfos = [];
        this.selectedFiles = arr;
      },
      uploadFiles() {
        this.isUpload = true;
        this.message = "";
        this.selectedFiles.forEach((item, index) => {
          this.upload(index, item);
        });
      },
      upload(idx, file) {
        this.fileName = file.name;
        this.progressInfos[idx] = { percentage: 0, fileName: file.name };
        this.type = "todo-type";
        this.uploader = "todo-uploader";
        // UploadService.upload(
        //   file,
        //   (event) => {
        //     this.progressInfos[idx].percentage = Math.round(
        //       (100 * event.loaded) / event.total
        //     );
        //   },
        //   this.type,
        //   this.uploader
        // )
        //   .then((response) => {
        //     if (response.data.message.includes("文件上传成功:")) {
        //       ElMessage({
        //         message: "文件上传成功！",
        //         type: "success",
        //       });
        //     }
        //     let prevMessage = this.message ? this.message + "\n" : "";
        //     this.message = prevMessage + response.data.message;
        //     return UploadService.getFiles();
        //   })
        //   .then((files) => {
        //     this.fileInfos = files.data;
        //   })
        //   .catch(() => {
        //     ElMessage.error(file.name + "上传失败");
        //     this.progressInfos[idx].percentage = 0;
        //     this.message = "Could not upload the file:" + file.name;
        //   });
      },
      commitData() {
        //   this.isUpload = true;
        if (this.isUpload) {
        //   const data = {
        //     phone: this.phoneNum,
        //     projectName: this.$route.params.filename,
        //     fileName: this.fileName,
        //   };
        //   userDataService.addMaterial(data).catch(() => {
        //     this.isErr = true;
        //   });
          if (!this.isErr) {
            ElMessage.success("上传成功");
            this.$router.push("");
          }
        } else {
          ElMessage.error("请先上传文件");
        }
      },
    },
  };
</script>
  
<style scoped>
  .upload-icon {
    width: 15%;
    height: 30%;
    margin: 0 auto;
    margin-top: 6%;
  }
  .upload{
    width:40vw;
    margin: auto;
  }
</style>
  