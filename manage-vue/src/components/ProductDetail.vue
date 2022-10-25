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
        <hr style="background:#2F3CF4;height:2px;margin-left: 160px;"/>

        <div v-for = "good in goods" :key="good.name" class="card">
            <el-img class="img" :src="good.img"></el-img>
            <div class="good-name">{{good.name}}</div>
            <span class="good-msg">￥<strong>{{good.price}}</strong> 月售<em>{{good.sold}}</em></span>
            <el-button @click="go_page2" class="button3">
                <el-icon><Plus /></el-icon>
            </el-button>
        </div>
    </div>
</template>

<script>
//import GoodsService from '../services/GoodsService'

export default{
    data() {
        return{
            goods:[
                {img:"",name:"生椰拿铁",price:20,sold:100,},{},{},{},{},{},{},{},
            ],
        }
    },
    methods:{
        go_page2(){
            /*GoodsService.getbyname(name)
                .then(response => {
                    this.good.name = response.data[0]
                })
            this.good.name=name*/
            this.$router.push('/ProductDetail2')
            }
        },
        addseries(){
        },
        addgoods(){
        },
    mounted(){
    }
}

</script>

<style>
.menu-name{
text-align: left;
width: 100%;
margin-left: 200px;
font-weight: bolder;
}

.button1{
    text-align: left;
    width:80px;
    height:48px;
    color:white;
    background-color:blue;
    border:white;
}
.button2{
    margin-left:550px;
    vertical-align: middle;
    width:80px;
    height:48px;
    color:white;
    background-color:blue;
    border:white;
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