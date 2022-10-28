<template>
    <div style="">
      <div class="menu-name" @click="GoBack">订单详情</div>
      <hr style="background:#2F3CF4;height:2px;margin-left: 0px;"/>
      <div class="card">
        <el-icon class="card-icon" :size="26"><List /></el-icon>
        <div class="card-title">订单详情</div>
        <div>
            订单编号 {{ordernumber}}
        </div>
      </div>
      <div class="card" style="margin-left:16%">
        <el-icon class="card-icon" :size="26"><Tickets /></el-icon>
        <div class="card-title">账单</div>
        <div></div>
      </div>
    </div>
  </template>
  
  <script>
  export default{
    props:['tableData'],

    components:{
    },
    data() {
      return {
        
        orders:[
            {
                ordernumber:this.tableData.date
                
            },
        ]
      }
    },
    methods:{
        GoBack(){
            this.$router.push("/OrderDetail")
        }
    },
    mounted(){
    }
  }
  </script>
  
  <style scoped>
  
  .menu-name{
    text-align: left;
    width: 100%;
    margin-left: 40px;
    font-weight: bolder;
  }
  
  .card {
      width: 34%;
      height: 800px;
      border-radius: 30px;
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
      margin-left: 10%;
      margin-top: 40px;
      float: left;
  }
  
  .card-title{
    font-weight: bold;
    font-size: 1.8em;
    font-family: "黑体";
    text-align: left;
    margin-top: 30px;
    margin-left: 20px;
    /* display: inline; */
    float: left;
  }
  
  .card-icon{
    /* display: inline; */
    margin-left: 40px;
    margin-top: 34px;
    float: left;
  }
  </style>