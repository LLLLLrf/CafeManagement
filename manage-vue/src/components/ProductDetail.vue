<template>
    <div class="layout">
        <div class="menu-name">商品详情</div>
        <span>
            <el-button @click="addseries()" class="button1">
                <el-icon><Plus />添加系列</el-icon>
            </el-button>
        </span>
        <span>
            <el-button @click="addgoods()" class="button2">
                <el-icon><Plus />添加商品</el-icon>
            </el-button>
        </span>
        <hr style="background:#2F3CF4;height:2px;clear: both;"/>

        <div v-for = "good in goods" :key="good.name" class="card">
            <el-image class="img" :src="good.img"></el-image>
            <div class="good-name">{{good.name}}</div>
            <span class="good-msg">￥<strong>{{good.price}}</strong> 月售<em>{{good.sold}}</em></span>
            <el-button @click="go_page2" class="button3">
                <el-icon><Plus /></el-icon>
            </el-button>
        </div>
    </div>
</template>

<script>
import GoodsService from '../services/GoodsService'
export default{
    data() {
        return{
            goods:[]
        }
    },
    methods:{
        go_page2(){
            /*GoodsService.getbyname(name)
                .then(response => {
                    this.good.name = response.data[0]
                })
            this.good.name=name*/
            this.$router.push('/SingleProduct')
        },
        addseries(){
        },
        addgoods(){
            this.$router.push({ name:'singleproduct'})
        },
    },
    mounted(){
        GoodsService.getAll()
        .then(response => {
            this.goods=response.data
        })
    }
}

</script>

<style scoped>
  .menu-name{
    text-align: left;
    margin-left: 40px;
    font-weight: bolder;
    float: left;
  }

.button1{
    /* text-align: left; */
    width:80px;
    height:34px;
    color:white;
    background-color:blue;
    border:white;
    float: left;
    margin-left: 4%;
    margin-bottom: 10px;
    margin-top: -4px;
}
.button2{
    margin-left:6%;
    vertical-align: middle;
    width:80px;
    height:34px;
    color:white;
    background-color:blue;
    border:white;
    float: left;
    margin-bottom:10px;
    margin-top: -4px;
}
.button3{
    margin-left:20px;
    width:30px;
    height:30px;
    border-radius:30px;
    color:white;
    background-color:blue;
    border:white;
}
.card{
    float: left;
    display:block;
    width: 200px;
    height:200px;
    margin-left: 150px;
    margin-bottom: 40px;
    border-radius: 30px;
    overflow: hidden;
}
.img{
    display:block;
    width:150px;
    height:150px;
}
.good-name{
    font-size:1.4em;
    font-family:Arial, Helvetica, sans-serif;
    font-stretch:expanded;
    line-height: 20px;
    text-align: left;
    margin-left:10px;
}
.good-msg{
    font-family:'宋体';
    font-stretch:narrower;
    text-align: center;
}
</style>