<template>
    <div class="layout">
        <div class="menu-name">商品详情</div>
        <span>
            <el-button @click="addgoods" class="button2">
                <el-icon><Plus />
                </el-icon>
                    添加商品
            </el-button>
        </span>
        <hr style="background:#2F3CF4;height:2px;clear: both;"/>

        <div v-for = "good in goods" :key="good.name" class="card">
            <el-image class="img" :src="good.image" style="border-radius:20px;width: 180px;height: 180px;"></el-image>
            <div class="good-name" style="white-space:nowrap;text-overflow: ellipsis;overflow: hidden;width: 160px;margin-left: 10px;">
                {{good.name}}
            </div>
            <span class="good-msg">￥{{good.price}} 月售<em>{{good.sold}}</em></span>
            <el-button @click="goodsdetail(good.name)" class="edit_btn">
                <el-icon><EditPen /></el-icon>
            </el-button>
        </div>
    </div>
</template>

<script>
import GoodsService from '../services/GoodsService'
export default{
    data() {
        return{
            goods:[],
        }
    },
    methods:{
        goodsdetail(name){
            this.$router.push({ name:'singleproduct',query:{name:name}})
        },
        addgoods(){
            this.$router.push('/UploadProduct')
        }
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
    font-weight: bolder;
    float: left;
    margin-left: 40px;
  }

.button1{
    /* text-align: left; */
    width:80px;
    height:34px;
    color:white;
    background-color:#2F3CF4;
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
    background-color:#2F3CF4;
    border:white;
    float: left;
    margin-bottom:10px;
    margin-top: -4px;
}
.edit_btn{
    /* margin-left:40px; */
    float: right;
    width:30px;
    height:30px;
    border-radius:30px;
    color:white;
    background-color:#2F3CF4;
    border:white;
}
.card{
    float: left;
    display:block;
    width: 180px;
    margin-left: 90px;
    margin-bottom: 40px;
    overflow: hidden;
}
.img{
    display:block;
}
.good-name{
    font-size:1.2em;
    font-family:Arial, Helvetica, sans-serif;
    line-height: 20px;
    text-align: left;
    margin-top: 4px;
    margin-left:10px;
}
.good-msg{
    font-stretch:narrower;
    text-align: center;
    margin-left: 10px;
    line-height: 30px;
    height: 30px;
    justify-content: center;
    float: left;
}
</style>