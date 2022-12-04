<template>
    <div style="font-weight:bold;">

    <el-form :model="data" label-position="top" label-width="120px" style="margin-top:20px;margin-left: 10px;">
    <el-form-item label="product name">
      <el-input v-model="data.name"  placeholder="name" style="width:220px;margin-left: 40px;"/>
    </el-form-item>
    <el-form-item label="product type">
      <el-select v-model="data.class" placeholder="choose the type of drink" style="width: 220px;margin-left: 40px;">
        <el-option label="Coffee" value="coffee" />
        <el-option label="Tea" value="tea" />
        <el-option label="Soda" value="soda" />
      </el-select>
    </el-form-item>
 
    <el-form-item label="Temperature">
      <el-radio-group v-model="data.ask.temp" style="margin-left:40px">
        <el-radio label="Hot" />
        <el-radio label="Cold" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Description" >
      <el-input v-model="data.describe" type="textarea" style="width:60vw;margin-left: 40px;"/>
    </el-form-item>
    <el-form-item style="margin-left:40px">
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>

  <div style="text-align: center; 
      font-family:Impact;
      font-weight:500;
      font-size: 1.4em;
      margin-top: 20px;
      margin-left: 40px;
      ">

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
        <div class="el-upload__text">拖拽图片到此处 或 <em>点击此处上传</em></div>
        <template #tip>
          <div class="el-upload__tip">文件需小于 512Mb</div>
        </template>
      </el-upload>
      <el-button type="primary" @click="uploadFiles()" style="float:left;">Upload</el-button>
      <el-button type="primary" @click="commitData()" style="float:left;">Save</el-button>
    </div>

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
        
        data:{
            name:undefined,
            class:undefined,
            ask:{
                temp:[],
                sugar:['Less','Normal'],
            },
            sale:1,
            image_name:undefined,
            image:0,
            price:0,
            describe:undefined,
        }
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
    /* margin: 0 auto; */
    margin-top: 6%;
  }
  .upload{
    width:40vw;
    height: 14vh;
    /* margin: auto; */
  }
</style>
  