<template>
  <div>
    <div class="menu-name">Orders</div>
    <hr style="background:#2F3CF4;height:2px;margin-left: 0px;" />

    <el-scrollbar height="90vh" style="width: 60%;float: left;height: 90vh;min-width: 670px;">

      <el-table
       :data="tableData"
        style="float: left;height: 90vh;min-width: 670px;"
        max-height="90vh" 
        v-loading="loading"
        >
        <el-table-column label="No." prop="publicid" width="140" align="center">
        </el-table-column>
        <el-table-column prop="createdAt" label="Time" #default="scope" width="180" align="center">
          {{ toShowableTime(scope.row.createdAt) }}
        </el-table-column>
        <el-table-column prop="paytime" label="Payment Status" width="180" align="center">
        </el-table-column>
        <el-table-column prop="finish" label="Status" #default="scope" align="center">
          <!-- <el-tag :color='scope.row.color' :type="scope.row.finish==='0'?'warning':'default'" :data-value='scope.row.type' class="tags" ref="tag"> -->
          <el-tag @click="changeStatus(scope.row.publicid,scope.row.paytime,scope.row.finish)" :color='scope.row.color' :type="/^[a-zA-Z_]+$/.test(scope.row.paytime) || scope.row.paytime === 0 ? 'info' : scope.row.finish==='0' ? 'warning' : 'default'" :data-value='scope.row.type' class="tags" ref="tag">
            {{ /^[a-zA-Z_]+$/.test(scope.row.paytime) || scope.row.paytime === 0 ? 'Wait Pay' : scope.row.finish==='0' ? 'Unfilled' : 'Completed'}}
          </el-tag>
        </el-table-column>
        <el-table-column label="Order Details" #default="scope" align="center">
          <el-button size="small" @click="ToDetail(scope.row.id)" style="color:#2F3CF4" link>
            <el-icon>
              <Fold />
            </el-icon>
            More Details
          </el-button>
        </el-table-column>
      </el-table>
    </el-scrollbar>


    <div class="search">
      <el-icon :size='20' color="#2F3CF4" style="float:left;margin-top: 16px;margin-left: 20px;margin-right: 4px;">
        <Filter />
      </el-icon>
      <div class="search-title" style="letter-spacing: -1px;">
        Search By Condition
      </div>

      <el-select 
       v-model="key"
       class="search-input"
       placeholder="选择商品名称"
       multiple
       filterable
       default-first-option
       :reserve-keyword="false"
       @change="findbykey"
       >
        <el-option
          v-for="item in goods"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
      <!-- <el-input v-model="key" class="search-input" placeholder="请输入商品信息等关键词">
        <template #prepend>
          <el-button @click="findbykey()">
            <el-icon>
              <Search />
            </el-icon>
          </el-button>
        </template>
      </el-input> -->

          <div>
            <div style="min-height:100px">
              <button @click="setFrom" class="timebtn learn-more" style="float: left;margin-left: 20px;margin-top: 10px; margin-bottom: 10px;">
                <span class="button_top">
                  FROM
                </span>
              </button>
              <div style="float: left;margin-left: 20px;margin-top: 10px;">{{this.leftday}}</div>
              <button @click="setTo" class="timebtn learn-more" style="float: left;clear: both;margin-left: 20px;">
                <span class="button_top">
                  TO
                </span>
              </button>
              <div style="float: left;margin-left: 20px;">{{this.rightday}}</div>
            </div>
            <!-- <div style="float:left; margin:20px 0 0 16px;font-size: 1.2em;">Date</div> -->
            <el-calendar v-model="dat" class="calendar" @click="showDate(dat)" style="clear:both"/>
            <!-- <el-button @click="showDate"></el-button> -->
          </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import GoodsService from '../services/GoodsService'
import OrdersService from '../services/OrdersService'
import { ref } from 'vue'
export default {
  inject: ['reload'],
  data() {
    return {
      dat:ref(new Date()),
      leftday:undefined,
      rightday:undefined,
      fromorto:1,
      loading:true,
      value:undefined,
      key: undefined,
      findlist: undefined,
      goods: [],
      colors: ["#D8FACD,#FFF6A1,#FAB9C3"],
      tableData: undefined
    }
  },
  methods: {
    indexMethod(index) {
      var len = (index + 1).toString().length;
      var str = "0".repeat(3 - len);
      var day = this.tableData[index].date.split("-").join('')
      return day + str + (index + 1).toString()
    },
    ToDetail(id) {
      this.$router.push({ name: 'singleorder', query: { id: id } })
    },
    findbykey() {
      var key = { key: this.key };
      if(key.key.length===0){
        OrdersService.getAll()
        .then(res => {
          this.tableData = res.data
        })
        setTimeout(() => {
                  this.loading=false;
              }, 200);
      }
      OrdersService.findbykey(key)
        .then(response => {
          // this.findlist = response.data;
          this.tableData=response.data
        })
        .catch(err => {
          ElMessage.error(err.toString())
        })
    },
    changeStatus(id,time,finish){
      var status=/^[a-zA-Z_]+$/.test(time) || time === 0 ? 'info' : finish==='0' ? 'warning' : 'default'
      if(status==='warning'){
        // alert(status)
        var data = {publicid:id}
        OrdersService.finishbyPublicid(data)
        this.reload()
      }
      // alert(id)
    },
    showDate(dat){
      console.log(dat)
      // dat=JSON.stringify(dat)

      // var date = /\d{4}\s\d{2}:\d{2}:\d{2}/.exec(dat)
      var date = new Date(dat)
      var DD = String(date.getDate()).padStart(2, '0');
      var MM = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();
      // var hh = String(date.getHours()).padStart(2, '0');
      // var mm = String(date.getMinutes()).padStart(2, '0');
      // var ss = String(date.getSeconds()).padStart(2, '0');
      var lday = yyyy+'-'+MM+'-'+DD;
      var rday = yyyy+'-'+MM+'-'+DD;
      if(this.fromorto===1){
        this.leftday=lday;
      }else if(this.fromorto===0){
          this.rightday=rday
      }
      if(this.leftday!==undefined && this.rightday!==undefined){
      var left = this.leftday+' 00:00:00'
      var right= this.rightday+' 00:00:00'
      var data = {lday:left,rday:right}
      OrdersService.getorderbylrday(data).then(res =>{
        this.tableData=res.data
      }).catch(err=>{
        console.log(err)
      })
      }
    },
    setFrom(){
      this.fromorto=1
    },
    setTo(){
      this.fromorto=0
    },
    toShowableTime(time){
      var date = new Date(time)
      var DD = String(date.getDate()).padStart(2, '0');
      var MM = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();
      var hh = String(date.getHours()).padStart(2, '0');
      var mm = String(date.getMinutes()).padStart(2, '0');
      var ss = String(date.getSeconds()).padStart(2, '0');
      var showtime=yyyy+'-'+MM+'-'+DD+' '+hh+':'+mm+':'+ss
      return showtime
    }
  },

  mounted() {
    GoodsService.getAll()
      .then(response => {
        this.goods = response.data
      })
    OrdersService.getAll()
      .then(response => {
        // this.orders = response.data
        this.tableData = response.data
      })
      this.loading=false;

  },

}

</script>

<style scoped>
.menu-name {
  text-align: left;
  margin-left: 40px;
  font-weight: bolder;
}

.tags[data-value="1"] {
  color: #43CF7C;
  font-weight: bold;
  border-radius: 12px;
  font-family: '黑体';
}

.tags[data-value="2"] {
  color: #FFC300;
  font-weight: bold;
  border-radius: 12px;
  font-family: '黑体'
}

.tags[data-value="3"] {
  color: #FA7085;
  font-weight: bold;
  border-radius: 12px;
  font-family: '黑体';
}

.search {
  background: #F7F7F7;
  float: right;
  margin-right: 100px;
  width: 28%;
  height: 600px;
  margin-top: 10px;
  font-family: '黑体';
  font-weight: bold;
  border-radius: 18px;
}

.search-title {
  font-size: 1.8em;
  margin-top: 10px;
  margin-left: 6px;
  text-align: left;
  float: left;
}

.search-input {
  margin-top: 10px;
  width: 94%;
  border-radius: 4px;
  border:0.6px #2F3CF4 solid;
}

.calendar{
  border-radius: 10px;
  background: #F7F7F7;

}


.timebtn {
 position: relative;
 padding: 4px 6px;
 float: left;
 border-radius: 3px;
 font-size: 14px;
 color: rgb(0, 0, 0);
 text-decoration: none;
 background-color: #ffffff;
 border: 1px solid #000;
 border-bottom: 3px solid #000;
 text-shadow: 0px -1px #000;
 -webkit-transition: all 0.1s;
 transition: all 0.1s;
 height: 28px;
 line-height: 0px;
 min-width: 88px;
}

 .timebtn:active {
 -webkit-transform: translate(0px,3px);
 -ms-transform: translate(0px,3px);
 transform: translate(0px,3px);
 border-bottom: 1px solid #000000;
}
</style>