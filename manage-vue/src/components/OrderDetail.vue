<template>
  <div>
    <div class="menu-name">订单详情</div>
        <hr style="background:#2F3CF4;height:2px;margin-left: 0px;"/>
    <el-table
      :data="tableData"
      style="width: 60%;float: left;">
      <el-table-column
        type="index"
        label="订单编号"
        :index="indexMethod"
        width="140"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="payment"
        label="支付方式"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="state"
        label="订单状态"
        #default="scope"
        align="center"
        >
        <el-tag :color='scope.row.color' :data-value='scope.row.type' class="tags">{{scope.row.state}}</el-tag>
      </el-table-column>
      <el-table-column
        label="订单详情"
        #default="scope"
        align="center"
        >
        <el-button size="small" @click="ToDetail(scope.$index, scope.row)" style="color:#2F3CF4" link>
          <el-icon><Fold /></el-icon> 
          查看详情
        </el-button>
      </el-table-column>
    </el-table>

    <div class="search">
      <el-icon :size='20' color="#2F3CF4" style="float:left;margin-top: 16px;margin-left: 26px;"><Filter /></el-icon>
      <div class="search-title">
        条件搜索
      </div>

      <el-input
      v-model="input2"
      class="search-input"
      placeholder="请输入商品信息等关键词">
        <template #prepend>
          <el-button><el-icon><Search /></el-icon></el-button>
        </template>
      </el-input>

      <div>
        <div style="float:left; margin:20px 0 0 16px;font-size: 1.2em;">支付方式</div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2022-10-23',
          payment: '微信',
          state: '未开始',
          color: '#FAB9C3',
          type: "3"
        }, {
          date: '2022-10-22',
          payment: '支付宝',
          state: '制作中',
          color: '#FFF6A1',
          type: "2"
        }, {
          date: '2022-10-24',
          payment: '微信',
          state: '未开始',
          color: '#FAB9C3',
          type: "3"
        }, {
          date: '2022-10-21',
          payment: '微信',
          state: '已完成',
          color:'#D8FACD',
          type: "1"
        },{
          date: '2022-10-22',
          payment: '支付宝',
          state: '已完成',
          color: '#D8FACD',
          type: "1"
        },{
          date: '2022-10-22',
          payment: '支付宝',
          state: '制作中',
          color: '#FFF6A1',
          type: "2"
        },{
          date: '2022-10-22',
          payment: '支付宝',
          state: '制作中',
          color: '#FFF6A1',
          type: "2"
        },{
          date: '2022-10-27',
          payment: '支付宝',
          state: '制作中',
          color: '#FFF6A1',
          type: "2"
        },{
          date: '2022-10-26',
          payment: '微信',
          state: '未开始',
          color: '#FAB9C3',
          type: "3"
        },{
          date: '2022-10-24',
          payment: '支付宝',
          state: '制作中',
          color: '#FFF6A1',
          type: "2"
        },{
          date: '2022-10-22',
          payment: '微信',
          state: '已完成',
          color: '#D8FACD',
          type: "1"
        },{
          date: '2022-10-22',
          payment: '支付宝',
          state: '制作中',
          color: '#FFF6A1',
          type: "2"
        },{
          date: '2022-10-25',
          payment: '微信',
          state: '制作中',
          color: '#FFF6A1',
          type: "2"
        },{
          date: '2022-10-26',
          payment: '支付宝',
          state: '已完成',
          color: '#D8FACD',
          type: "1"
        },
      ],
      }
    },
    methods: {
      indexMethod(index) {
        var len = (index+1).toString().length;
        var str = "0".repeat(3-len);
        var day = this.tableData[index].date.split("-").join('')
        return day+str+(index+1).toString()
      },
      ToDetail(index, row){
        index;
        row;
        this.$router.push("/SingleOrder")
      }
    }
  };

</script>

<style scoped>

  .menu-name{
    text-align: left;
    width: 100%;
    margin-left: 40px;
    font-weight: bolder;
  }

  .tags[data-value="1"] {
    color:#43CF7C;
    font-weight:bold;
    border-radius:12px;
    font-family:'黑体';
  }
  .tags[data-value="2"] {
    color:#FFC300;
    font-weight:bold;
    border-radius:12px;
    font-family:'黑体'
  }
  .tags[data-value="3"] {
    color:#FA7085;
    font-weight:bold;
    border-radius:12px;
    font-family:'黑体';
  }

.search{
  background: #F7F7F7;
  float:right;
  margin-right: 100px;
  width: 28%;
  height: 600px;
  margin-top: 10px;
  font-family: '黑体';
  font-weight: bold;
  border-radius: 18px;
}

.search-title{
  font-size: 1.8em;
  margin-top: 10px;
  margin-left: 6px;
  text-align: left;
  float: left;
}

.search-input{
  margin-top: 10px;
  width: 94%;
  border-radius: 18px;
}
</style>