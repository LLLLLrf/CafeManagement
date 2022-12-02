<template>
  <div style="">
    <div class="menu-name" @click="GoBack">订单详情</div>
    <hr style="background:#2F3CF4;height:2px;margin-left: 0px;"/>
    <div class="card">
      <el-row>
        <el-icon class="card-icon" :size="26">
          <List />
        </el-icon>
        <div class="card-title">订单详情</div>
      </el-row>
      <div v-if="orderdata" class="details">
        <!-- <el-descriptions title="" class="card-content" :column="1">
          <el-descriptions-item label="订单编号" class="item" style="font-weight:700;font-size:1.4em;">{{orderdata.publicid}}</el-descriptions-item>
          <el-descriptions-item label="生成时间" class="item" style="font-weight:700;font-size:1.4em;">{{ new Date(orderdata.createdAt).toLocaleString()}}</el-descriptions-item>
          <el-descriptions-item label="支付时间" class="item" style="font-weight:700;font-size:1.4em;">{{orderdata.paytime==='0'?'无':orderdata.paytime}}</el-descriptions-item>
          <el-descriptions-item label="支付方式" class="item" style="font-weight:700;font-size:1.4em;">{{orderdata.category}}</el-descriptions-item>
          <el-descriptions-item label="订单状态" class="item" style="font-weight:700;font-size:1.4em;">{{orderdata.finish==='0' ? '未完成' : '已完成'}}</el-descriptions-item>
        </el-descriptions> -->

          <div class="item" style="">订单编号: {{orderdata.publicid}}</div>
          <div class="item" style="">生成时间: {{ new Date(orderdata.createdAt).toLocaleString()}}</div>
          <div class="item" style="">支付时间: {{orderdata.paytime==='0'?'无':orderdata.paytime}}</div>
          <div class="item" style="">支付方式: {{orderdata.category}}</div>
          <div class="item" style="">订单状态: {{orderdata.finish==='0' ? '未完成' : '已完成'}}</div>

      </div>
      
    </div>
    <div class="card" style="margin-left:16%">
      <el-row>
        <el-icon class="card-icon" :size="26">
          <Tickets />
        </el-icon>
        <div class="card-title">账单</div>
      </el-row>
      <div v-if="orderdata">
        <el-row v-for="item in orderdata.orderlist.data" :key="item.id" class="details">
          <!-- <el-descriptions title="" class="card-content" :column="1">
            <el-descriptions-item :label="item.id">{{item.name}} ✖ {{item.amount}}</el-descriptions-item>
            <el-descriptions-item v-if="(item.temp==='Hot' || item.temp==='Cold')" label="  -">{{ item.temp === 'Hot' ? '热饮' : item.temp === 'Cold'?'冷饮':'异常'}}</el-descriptions-item>
            <el-descriptions-item v-if="(item.sugar === 'Less' || item.sugar ==='Normal')" label="  -">{{ item.sugar === 'Less' ? '少糖' : item.sugar === 'Normal' ? '正常糖' :'异常'}}</el-descriptions-item>
          </el-descriptions> -->

            <div class="item" :label="item.id">{{item.id}}: {{item.name}} ✖ {{item.amount}}</div>
            <div class="item" v-if="(item.temp==='Hot' || item.temp==='Cold')" label="  -">{{ item.temp === 'Hot' ? '热饮' : item.temp === 'Cold'?'冷饮':'异常'}}</div>
            <div class="item" v-if="(item.sugar === 'Less' || item.sugar ==='Normal')" label="  -">{{ item.sugar === 'Less' ? '少糖' : item.sugar === 'Normal' ? '正常糖' :'异常'}}</div>
        </el-row>
        <el-row>
          <div class="item details">
            总金额：￥ {{orderdata.totalprice}}
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>
  
<script>
import OrdersService from '@/services/OrdersService'
export default{
  components:{
  },
  data() {
    return {
      id:this.$route.query.id,
      orderdata:undefined
    }
  },
  methods:{
      GoBack(){
          this.$router.push("/OrderDetail")
      },
    test() {
      console.log(this.orderdata.publicid)
    }
  },
  mounted(){
    OrdersService.findbyId({id:this.id})
      .then(response=>{
        this.orderdata=response.data[0]
      })
  }
}
</script>

<style scoped>
.item{
  font-size: 1.1em;
  font-weight: 600;
  /* float:left; */
  text-align: left;
  justify-items: left;
  display: block;
  margin-bottom:20px;
}
.details{
  margin-left: 10%;
  margin-top: 6%;
}
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

.card-content{
  font-weight: bold;
  font-size: 1.2em;
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