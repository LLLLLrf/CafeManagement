<template>
  <div style="font-weight:bold;">
  <el-form :model="data" :rules="rules" ref="Form" label-position="top" label-width="120px" style="margin-top:20px;margin-left: 10px;">
  <el-form-item label="Name" prop="name">
    <el-input v-model="data.name"  placeholder="name" style="width:220px;margin-left: 40px;"/>
  </el-form-item>
  <el-form-item label="Class" prop="class">
    <el-select v-model="data.class" placeholder="choose the type of drink" style="width: 220px;margin-left: 40px;">
      <el-option label="Coffee" value="COFFEE" />
      <el-option label="Tea" value="TEA" />
      <el-option label="Soda" value="SODA" />
    </el-select>
  </el-form-item>
 
  <el-form-item label="Temperature" prop="temperature">
    <el-checkbox-group v-model="data.ask.temp" style="margin-left:40px">
      <el-checkbox label="Hot" />
      <el-checkbox label="Cold" />
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Sugar" prop="sugar">
    <el-checkbox-group v-model="data.ask.sugar" style="margin-left:40px">
      <el-checkbox label="Less" />
      <el-checkbox label="Normal" />
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Description" prop="describe">
    <el-input v-model="data.describe" type="textarea" style="width:60vw;margin-left: 40px;"/>
  </el-form-item>
  <el-form-item label="Price" prop="price">
    <el-input-number v-model="data.price" :min="1" :max="9999"/>
  </el-form-item>
  <el-form-item label="On Sale" prop="sale">
    <el-switch v-model="data.sale" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" :active-value="1" :inactive-value="0" />
  </el-form-item>
  <el-form-item label="Product Image">
    <div style="text-align: center; 
        font-family:Impact;
        font-weight:500;
        font-size: 1.4em;
        margin-top: 20px;
        margin-left: 40px;
        ">
      <el-upload action="#" class="upload" :limit="1" show-file-list :auto-upload="false" :on-change="selectFile" multiple
        drag>
        <img src="../assets/icons/upload-file.png" alt="upload" />
        <div class="el-upload__text">拖拽图片到此处 或 <em>点击此处上传</em></div>
        <template #tip>
          <div class="el-upload__tip">文件需小于 512Mb</div>
        </template>
      </el-upload>
      <!-- <el-button type="primary" @click="uploadFiles()">Upload</el-button> -->
    </div>
  </el-form-item>
  <el-form-item style="margin-left:40px">
    <el-button type="primary" @click="submitForm">Create</el-button>
    <el-button @click="Cancel">Cancel</el-button>
  </el-form-item>
</el-form>


  
</div>
</template>

<script>
import { ElMessage } from "element-plus";
import UploadFilesService from "@/services/UploadFilesService";
import GoodsService from '../services/GoodsService';
export default {
    data() {
      return {
        selectedFiles: [],
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
                temp:["Hot","Cold"],
                sugar:['Less','Normal'],
            },
            sale:1,
            image_name:undefined,
            image:0,
            price:10,
            describe:undefined,
        },
        rules : {
          name: [
            { required: true, message: 'Please input product name', trigger: 'blur' }
          ],
          class: [
            { required: true, message: 'Please input product class', trigger: 'blur' }
          ],
          describe: [
            { required: true, message: 'Please input product description', trigger: 'blur' }
          ],
          price: [
            { required: true, message: 'Please input product price', trigger: 'blur' }
          ]
        }
      };
    },
    mounted() {

    },
    methods: {
      Cancel(){
        this.$router.go(-1)
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
        this.progressInfos[idx] = { percentage: 0, fileName: file.name };
        UploadFilesService.upload(file, (event) => {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        })
          .then((response) => {
            if (response.data.message.includes("文件上传成功:")) {
              this.isUpload=true
              ElMessage({
                message: '文件上传成功！',
                type: 'success'
              })
            }
            let prevMessage = this.message ? this.message + "\n" : "";
            this.message = prevMessage + response.data.message;
            return UploadFilesService.getFiles();
          })
          .then((files) => {
            this.fileInfos = files.data;
          })
          .catch(() => {
            ElMessage.error(file.name + "上传失败");
            this.isUpload=false
            this.progressInfos[idx].percentage = 0;
            this.message = "Could not upload the file:" + file.name;
          });
      },
    submitForm() {
      this.$refs['Form'].validate((valid) => {
        if (valid) {
          this.uploadFiles()
          if(this.isUpload){
            this.data.image_name=this.selectedFiles[0].name
            console.log(this.data)
            GoodsService.create(this.data)
            .then(res=>{
              console.log(res.data)
              ElMessage.success("Success Create!")
              this.Cancel()
            })
            .catch(err=>{
              console.log(err)
            })
          }
          else{
            ElMessage.error("Please Upload Product Image!")
          }
        } else {
          ElMessage.error("Please Complete Product Form!")
        }
      });
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
    /* height: 14vh; */
    /* margin: auto; */
  }
</style>
  