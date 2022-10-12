<template>
    <div class="layout">
        <el-row justify="center" style="margin-left:200px">
            <el-col span="12">
                <!--返回主页-->
                <div>
                    <button class="backbutton" @click="pageback">
                        <svg width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path></svg>
                    </button>
                </div>
                <!--图片插入-->
                <div>
                    <el-image
                    style="width:350px;height:350px;margin-left:-400px;margin-top:100px;"
                    :src="src" />
                </div>
                <!--商品描述-->
                <span class="des"><em>{{description}}</em></span>
            </el-col>

            <el-col span="12" offset="6" style="margin-top:120px;text-align:left;">
                <span style="font-family:Arial;color:#D7D7D7;font-size:large;font-style:oblique">Customize your drink!</span>
                <!--商品名称-->
                <h1 class="name">{{name}}</h1>
                <!--商品要求-->
                <div class="RadioSelection">
                    <div class="t">规格</div>
                    <el-radio-group v-model="radio1" class="k">
                        <el-radio-button label="1" size="large">中杯</el-radio-button>
                        <el-radio-button label="2" size="large">大杯</el-radio-button>
                        <el-radio-button label="3" size="large">小杯</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="RadioSelection">
                    <div class="t">温度</div>
                    <el-radio-group v-model="radio2" class="k">
                        <el-radio-button label="1" size="large">常规冰</el-radio-button>
                        <el-radio-button label="2" size="large">去冰</el-radio-button>
                        <el-radio-button label="3" size="large">少冰</el-radio-button>
                        <el-radio-button label="4" size="large">多冰</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="RadioSelection">
                    <div class="t">糖度</div>
                    <el-radio-group v-model="radio3" class="k">
                        <el-radio-button label="1" size="large">常规糖(7分)</el-radio-button>
                        <el-radio-button label="2" size="large">5分糖</el-radio-button>
                        <el-radio-button label="3" size="large">多糖</el-radio-button>
                        <el-radio-button label="4" size="large">不加糖</el-radio-button>
                    </el-radio-group>
                </div> 
                <!--商品价格-->
                <h2 class="p">价格：￥{{price}}</h2>
                <!--加入购物车-->

            </el-col>
        </el-row>
    </div>
</template>


<script>
export default{
    data(){
        return{
            src:"https://www.starbucks.com.cn/images/products/cappuccino.jpg",
            description:"卡布奇诺是一种加入以同量的意大利特浓咖啡和蒸汽泡沫牛奶相混合的意大利咖啡。此时咖啡的颜色，就像卡布奇诺教会的修士在深褐色的外衣上覆上一条头巾一样，咖啡因此得名。传统的卡布奇诺咖啡是三分之一浓缩咖啡，三分之一蒸汽牛奶和三分之一泡沫牛奶，并在上面撒上小颗粒的肉桂粉末。",
            name:"卡布奇诺",
            price:"20",
        }
    },
    methods:{
        pageback(){
            this.$router.go(-1)
        },
    },
}
</script>


<style scoped>
    .backbutton{
        color:white;
        margin-left:-800px;
        border-radius:30px;
        background-color:blue;
        border:white;
    }
    .des{
        display:block;
        width:200px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size:small;
        text-indent:20px;
        margin-left:-320px;
    }
    .name{
        font-family:Arial, Helvetica, sans-serif;
    }
    .RadioSelection{
        margin-top:20px;
    }
    .RadioSelection .k{
        margin-top:8px;
    }
    .p{
        font-family:Arial, Helvetica, sans-serif;
        margin-top:120px;
        font-size:32px;
    }
    .el-button:focus{
        color:blue;
    }
</style>