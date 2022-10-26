<template>
    <div class="layout">
        <el-row justify="center" style="margin-left:200px">
            <el-col span="6">
                <div>
                    <button class="backbutton" @click="pageback">
                        <svg width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path></svg>
                    </button>
                </div>
                <div class="add" @click="addgoods"><el-button color="rgba(34, 75, 238, 1)" type="primary">+添加一个商品</el-button></div>

                <div>
                    <el-image class="image"
                    :src="src" />
                </div>
                <div class="des"><em>{{description}}</em></div>
            </el-col>

            <el-col span="18"  style="margin-top:120px;text-align:left;">
                <h1 class="name">{{coffee}}</h1>
                <hr class="cut" />
                <div class="RadioSelection">
                    <h2 class="t">规格</h2>
                        <el-button class="s" type="primary" size="nomral" >&nbsp;&nbsp;&nbsp;小杯&nbsp;&nbsp;&nbsp;</el-button>
                        <el-button class="m" type="primary">&nbsp;&nbsp;&nbsp;中杯&nbsp;&nbsp;&nbsp;</el-button>
                        <el-button class="l" type="primary">&nbsp;&nbsp;&nbsp;大杯&nbsp;&nbsp;&nbsp;</el-button>
                        <el-button class="more">&nbsp;&nbsp;&nbsp;+添加&nbsp;&nbsp;&nbsp;</el-button>
                </div> 
                <el-button class="new" size="large" @click="addselection">添加选项</el-button>
                <h2 class="price">价格：￥{{price}}</h2>

            </el-col>
        </el-row>
    </div>
</template>


<script>
export default{
    data(){
        return{
            src:"https://www.starbucks.com.cn/images/products/cappuccino.jpg",
            description:"点击为商品添加描述",
            coffee:"卡布奇诺",
            price:"20",
            addion:"添加一个商品"
        }
    },
    methods:{
        pageback(){
            this.$router.go(-1)
        },
        addgoods(){
        },
        addselection(){
        },
    }
}
</script>


<style scoped>
    .backbutton{
        color:white;
        margin-left:-1000px;
        border-radius: 100%;
        background-color:blue;
        border:white;
    }
    .image{
        width:250px;
        height:250px;
        margin-left:-600px;
        margin-bottom:-5px;
    }
    .add{
        display:inline;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left:-470px;
        font-size:small;
        text-indent:50px;
    }
    .des{
        display:inline;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background-color:aliceblue;
        margin-left:-600px;
        font-size:small;
        text-indent:50px;
    }
    .name{
        font-family:Arial, Helvetica, sans-serif;
        font-size: 1.5cm;
        margin-left:-140px;
        margin-top: -25px;
    }
    .cut{
        height:1.25px;
        width:400px;
        border:none;
        border-top:1px solid #000;
        margin-left:-200px;
        margin-top:-25px;
    }
    .t{
        font-family:Arial, Helvetica, sans-serif;
        font-size: 1cm;
        margin-left:-124px;
        margin-top: -20px;
    }
    .RadioSelection{
        margin-top:20px;
    }
    .s{
        margin-left:-122px;
        margin-top:-40px;
    }
    .m{
        margin-top:-40px;
    }
    .l{
        margin-top:-40px;
    }
    .more{
        margin-top:-40px;
    }
    .new{
        margin-left:-122px;
    }
    .price{
        font-family:Arial, Helvetica, sans-serif;
        font-size:40px;
        margin-left:-90px;
    }
    .el-button:focus{
        color:blue;
    }
</style>