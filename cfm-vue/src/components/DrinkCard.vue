<template>
    <div>
        <div v-for="(img,index) in coffeeimgs" :key="img" class="card" @click="add_cart()">
            
        <!-- <el-image class="img" :src="img" :fit="fit" :preview-src-list="coffeeimgs" :initial-index="0"/> -->
        <el-image class="img" :src="img" :fit="fit" @click.stop="changeStatus()"/>
        <span class="img-title">{{price}}{{coffeenames[index]}}</span>
        </div>
        <DetailPage v-show="show"></DetailPage>

        <!-- <HomePage v-if="false" :school="school"></HomePage> -->
    </div>
</template>

<script>
    import DetailPage from './DetailPage.vue';
    import { ElMessage } from 'element-plus';
    // import HomePage from './HomePage.vue';

    export default{
        components:{DetailPage},
        data(){
            return{
                num:0,
                show:false,
                fit : 'fill',
                coffeenames : ['焦糖玛奇朵', '美式咖啡', '拿铁', '摩卡', '卡布奇诺','浓缩咖啡','红茶拿铁','枫味玛奇朵','粉檬泡泡饮','橙花白巧风味玛奇朵','经典天乐雪','冰冷萃咖啡','棉云冷萃','气炫冰山美式', '拿铁', '摩卡'],
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
                        'http://www.nanyangchapu.cn/uploads/allimg/200522/1-2005221Q631629.jpg',
                        'https://www.starbucks.com.cn/images/products/cold-brew.jpg',
                        'https://www.starbucks.com.cn/images/legacy/cold-foam-cold-brew/cold-foam-cold-brew-filling.gif',
                        'https://www.starbucks.com.cn/images/products/sparkling-espresso-tonic.jpg',
                        'https://www.starbucks.com.cn/images/products/caffe-latte.jpg',
                        'https://www.starbucks.com.cn/images/products/caffe-mocha.jpg',
                    ],
            }
        },
        methods:{
            changeStatus() {
                if (this.show) { this.show = false }
                else { this.show = true }
                alert('test')
            },
            add_cart(){
                this.num+=1;
                ElMessage({
                    message: '成功加入购物车',
                    type: 'success',
                });
                
            },
        },
            
    }
</script>

<style scoped>
    .img {
        margin-bottom: 0px;
        display: block;
        width: 100%;
        height: 200px;

    }
    .card{
        float: left;
        width: 200px;
        /* 这里为了方便展示才调到90px的正常40左右就行 */
        margin-left: 90px;
        margin-bottom: 40px;
        position: relative;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        border-radius: 26px;
        background: #2F3CF4;
        color:#fff;
    }

    .card:hover:active {
       transform: scale(0.98);
    }
    .card:hover::after {
        bottom: 0;
    }
    .card::after {
        content: "Add to Cart";
        padding-top: 1.25em;
        /* padding-left: 1.25em; */
        position: absolute;
        /* display: block; */
        left: 0;
        bottom: -60px;
        background: #FF8C00;
        color: #fff;
        height: 1.9em;
        width: 200px;
        transition: all 80ms;
        font-weight: 600;
        text-transform: uppercase;
    }

    .card:hover{
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        transform: translateY(-2px);
    }
    .img-title{
        font-family:'幼圆';
        font-size: 1.2em;
        font-weight: 500;
        line-height: 50px;
    }
</style>