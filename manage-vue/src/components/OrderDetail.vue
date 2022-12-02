<template>
  <div>
    <div class="menu-name">订单详情</div>
    <hr style="background:#2F3CF4;height:2px;margin-left: 0px;" />

    <el-scrollbar height="90vh" style="width: 60%;float: left;height: 90vh;min-width: 670px;">

      <el-table
       :data="tableData"
        style="float: left;height: 90vh;min-width: 670px;"
        max-height="90vh" 
        v-loading="loading"
        >
        <el-table-column label="订单编号" prop="publicid" width="140" align="center">
        </el-table-column>
        <el-table-column prop="createdAt" label="时间" #default="scope" width="180" align="center">
          {{ new Date(scope.row.createdAt).toLocaleString() }}
        </el-table-column>
        <el-table-column prop="category" label="支付方式" width="180" align="center">
        </el-table-column>
        <el-table-column prop="finish" label="订单状态" #default="scope" align="center">
          <el-tag :color='scope.row.color' :type="scope.row.finish==='0'?'warning':'default'" :data-value='scope.row.type' class="tags" ref="tag">{{ scope.row.finish === '0'
              ? '未完成' : '已完成'
          }}</el-tag>
        </el-table-column>
        <el-table-column label="订单详情" #default="scope" align="center">
          <el-button size="small" @click="ToDetail(scope.row.id)" style="color:#2F3CF4" link>
            <el-icon>
              <Fold />
            </el-icon>
            查看详情
          </el-button>
        </el-table-column>
      </el-table>
    </el-scrollbar>


    <div class="search">
      <el-icon :size='20' color="#2F3CF4" style="float:left;margin-top: 16px;margin-left: 26px;">
        <Filter />
      </el-icon>
      <div class="search-title">
        条件搜索
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
        {{ findlist }}
      </div>
      <div>
        <div style="float:left; margin:20px 0 0 16px;font-size: 1.2em;">日期</div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import GoodsService from '../services/GoodsService'
import OrdersService from '../services/OrdersService'

export default {
  data() {
    return {
      loading:true,
      value:undefined,
      key: undefined,
      findlist: undefined,
      goods: [],
      orders: [],
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
      OrdersService.findbykey(key)
        .then(response => {
          this.findlist = response.data;
        })
        .catch(err => {
          ElMessage.error(err.toString())
        })
    },
  },

  mounted() {
    GoodsService.getAll()
      .then(response => {
        this.goods = response.data
      })
    OrdersService.getAll()
      .then(response => {
        this.orders = response.data
        this.tableData = this.orders
        this.loading=false;
      })
      setTimeout(() => {
                this.loading=false;
            }, 400);
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

</style>