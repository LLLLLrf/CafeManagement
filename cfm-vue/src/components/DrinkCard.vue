<template>
    <div>
        <div v-for="(img,index) in coffeeimgs" :key="img" class="card">
            <span class="img-title">{{coffeenames[index]}}</span>
        <!-- <el-image class="img" :src="img" :fit="fit" :preview-src-list="coffeeimgs" :initial-index="0"/> -->
        <el-image class="img" :src="img" :fit="fit" @click="CheckDetail"/>
        </div>
        <DetailPage ref='DetailPage' v-show="show"></DetailPage>
    </div>
</template>

<script>
    import DetailPage from './DetailPage.vue';
    export default{
        props:{show:Boolean},
        components:{DetailPage},
        data(){
            return{
                // tempshow:this.show,
                fit : 'fill',
                coffeenames : ['焦糖玛奇朵', '美式咖啡', '拿铁', '摩卡', '卡布奇诺','浓缩咖啡','红茶拿铁','枫味玛奇朵','粉檬泡泡饮','橙花白巧风味玛奇朵','经典天乐雪'],
                coffeeimgs : ['https://www.starbucks.com.cn/images/products/caramel-macchiato.jpg',
                        'https://www.starbucks.com.cn/images/products/caffe-americano.jpg',
                        'https://www.starbucks.com.cn/images/products/caffe-latte.jpg',
                        'https://www.starbucks.com.cn/images/products/caffe-mocha.jpg',
                        'https://www.starbucks.com.cn/images/products/cappuccino.jpg',
                        'https://www.starbucks.com.cn/images/products/espresso.jpg',
                        'https://www.starbucks.com.cn/images/products/black-tea-latte.jpg',
                        'http://www.nanyangchapu.cn/uploads/allimg/200522/1-2005221Q413505.jpg',
                        'http://www.nanyangchapu.cn/uploads/allimg/200522/1-2005221Q45b00.jpg',
                        'http://www.nanyangchapu.cn/uploads/allimg/200522/1-2005221Q551555.jpg',
                        'http://www.nanyangchapu.cn/uploads/allimg/200522/1-2005221Q631629.jpg'
                    ],
            }
        },
        methods:{
            CheckDetail(){
                this.$refs.DetailPage.changeStatus()
                // this.tempshow=true
            },
            
        },
    }
</script>

<style scoped>
    .img {
        margin-top: 20px;
        display: block;
        width: 100%;
        height: 200px;
        border-radius: 26px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }
    .card{
        float: left;
        width: 200px;
        margin-left: 40px;
        margin-bottom: 20px;
    }
    .img:hover{
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    }
    .img-title{
        font-family:'华文行楷';
        font-size: 1.2em;
    }
</style>