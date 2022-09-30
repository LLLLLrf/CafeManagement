<template>
    <el-container class="common-layout-demo" height="955px">
        <el-main>
            <el-scrollbar>
                <!--返回主页-->
                <div class="goback">
                    <div class="block">
                        <span class="img">default</span>
                        <!-- <el-image :bc="backgraph" @click="pageback" v-loading.fullscreen.lock="loading"/> -->
                    </div>
                </div>
                <!--图片插入-->
                <div class="image-demo">
                    <div class="block">
                        <span class="img">default</span>
                        <el-image :src="src" />
                    </div>
                </div>
                <!--商品描述-->
                <p class="des"><em>GoodsDescription-demo</em></p>
                <span class="ino">Customize your drink!</span>
                <span style="border:1px solid grey;width:440px;margin-left:788px; margin-top:134px;"></span>
                <!--商品名称-->
                <h1 :Name="name">GoodsName-demo</h1>
                <!--单选框-->
                <el-descriptions title="atr1" class="t">
                    <span style="border:1px solid grey;width:200px;margin-left:799px;margin-top:309px"></span>
                    <div class="RadioSelection">
                        <el-radio-group v-model="radio1" class="r-1">
                            <el-radio-button label="1" size="large">Option 1</el-radio-button>
                            <el-radio-button label="2" size="large">Option 2</el-radio-button>
                            <el-radio-button label="3" size="large">Option 3</el-radio-button>
                        </el-radio-group>
                    </div>
                </el-descriptions>
                <el-descriptions title="atr2" class="t">
                    <span style="border:1px solid grey;width:200px;margin-left:799px;margin-top:309px"></span>
                    <div class="RadioSelection">
                        <el-radio-group v-model="radio2" class="r-2">
                            <el-radio-button label="1" size="large">Option 1</el-radio-button>
                            <el-radio-button label="2" size="large">Option 2</el-radio-button>
                            <el-radio-button label="3" size="large">Option 3</el-radio-button>
                            <el-radio-button label="4" size="large">Option 4</el-radio-button>
                        </el-radio-group>
                    </div>
                </el-descriptions>
                <el-descriptions title="atr3" class="t">
                    <span style="border:1px solid grey;width:200px;margin-left:799px;margin-top:309px"></span>
                    <div class="RadioSelection">
                        <el-radio-group v-model="radio3" class="r-3">
                            <el-radio-button label="1" size="large">Option 1</el-radio-button>
                            <el-radio-button label="2" size="large">Option 2</el-radio-button>
                            <el-radio-button label="3" size="large">Option 3</el-radio-button>
                            <el-radio-button label="4" size="large">Option 4</el-radio-button>
                        </el-radio-group>
                    </div> 
                </el-descriptions>
                <!--商品价格-->
                <h2 class="p">价格：￥{{price}}</h2>
                <!--加入购物车-->
                <div class="add_to_cart">
                    <div class="block">
                        <span class="img">default</span>
                        <el-image :cart="cartgraph" @click="add"/>
                    </div>
                </div>
                <!--定义传递给购物车子组件的数据-->
                <ShoppingCartDemo :msg="{src,name,atr1,atr2,atr3,price}" />
            </el-scrollbar>
        </el-main>
    </el-container>
</template>


<script>
export default{
    data(){
        return{
            backgraph:"",
            loading:false,
            src:"",
            des:"",
            name:"",
            atr1:"",
            atr2:"",
            atr3:"",
            price:"",
            cartgraph:"",
            show:false
        }
    },
    methods:{
        pageback(){

        },
        add(){
        },
        changeStatus(){
            if(this.show){this.show=false}
            else{this.show=true}
            this.$emit('reload')
            alert(this.show)
        }
    },
}
</script>


<style scoped>
    .goback.img{
        width:90px;
        height:90px;
        margin-left:300px;
        margin-top:23px;

    }
    .image-demo.img{
        width:380px;
        height:450px;
        margin-left:381px;
        margin-top:448px;
    }
    .des{
        border:3px,solid,white;
        padding:10px;
        margin-left:399px;
        margin-top:665px;
    }
    .ino{
        width:480px;
        height:32px;
        margin-left:788px;
        margin-top:134px;
    }
    .name{
        width:295px;
        height:97px;
        margin-left:788px;
        margin-top:134px;
    }
    .t{
        width:58px;
        height:37px;
        margin-left:802px;
        margin-top:275px;
    }
    .t.RadioSelection{
        width:96px;
        height:38px;
        margin-left:799px;
        margin-top:324px;
    }
    .p{
        width:251px;
        height:76px;
        margin-left:788px;
        margin-top:775px;
    }
    .add_to_cart.img{
        width:120px;
        height:120px;
        margin-left:1108px;
        margin-top:731px;
    }
</style>