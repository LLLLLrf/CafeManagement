<template>
    <div style="position:absolute;left:160px;">
            <div class="menu-name" style="margin-left: 40px;">{{page}}</div>
            <!-- 这里宽度设100vh才不会有左右滑动 -->
            <hr style="background:#2F3CF4;height:2px;margin-left: 8px;" />

        <div v-for="(good) in goods" :key="good.name" class="card" @click="changeStatus(good.name)">
            <!-- <el-image class="img" :src="img" :fit="fit" :preview-src-list="coffeeimgs" :initial-index="0"/> -->
            <el-image class="img" :src="good.image" :fit="fit" @click.stop="changeStatus(good.name)"/>
                <div class="img-title" style="margin-left: 10px;width: 180px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{good.price}}￥ {{good.name}}</div>
        </div>

        <el-drawer
            v-model="visible" :show-close="false"
            direction="rtl"
            size="89%"
            :custom-class="detaildrawer"
            >
            <template #header="{ close,titleId }">
            <button @click="close" style="padding: 0 10px;" class="btn">
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                <span style="font-weight:700">Back</span>
            </button>
            <div :id="titleId" style="width:86%;color: #fff;font-size:large;font-weight:bold;display:inline;margin:20px 7% 0 auto;">饮品详情</div>
            </template>
            <DetailPage @detail="getdetail" :good="goodmsg" :key="visible"></DetailPage>
        </el-drawer>
    </div>
</template>

<script>
    import DetailPage from './DetailPage.vue';
    import { ElMessage } from 'element-plus';
    import GoodsService from '../services/GoodsService'
    export default{
        components:{DetailPage},
        data(){
            return{
                page: this.$route.query.page,
                visible:false,
                price:0,
                num:0,
                show:false,
                fit : 'fill',
                goods: undefined,
                goodmsg: undefined,
                orderlist:[],
            }
        },
        methods:{
            changeStatus(viewingname) {
                GoodsService.getbyname(viewingname)
                .then(response => {
                    this.goodmsg = response.data[0]
                })
                this.goodmsg=viewingname

                console.log(this.goodmsg)
                this.visible = true
            },
            getdetail(detail) {
                detail.id = this.orderlist.length
                this.orderlist.push(detail)
                this.$emit('details',this.orderlist)
                ElMessage({
                    message: 'success add in cart',
                    type: 'success',
                });
                this.visible=false
            }
        },
        mounted() {
            console.log(this.page.toUpperCase())
            GoodsService.getbyclass(this.page.toUpperCase())
                .then(response => {
                    this.goods = response.data
                    console.log(this.goods)
                })
        },
        updated() {
            if(this.page!==this.$route.query.page){
                this.page=this.$route.query.page
                GoodsService.getbyclass(this.page)
                    .then(response => {
                        this.goods = response.data
                    })
            }
        }
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
        /* 这里为了方便展示才调到80px的正常40左右就行 */
        margin-left: 80px;
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
        /* font-family:'Courier New', Courier, monospace; */
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.2em;
        font-weight: 500;
        line-height: 50px;
    }


.btn {
 display: flex;
 width: 100px;
 height: 2.5em;
 align-items: center;
 justify-content: center;
 background-color: #eeeeee4b;
 border-radius: 8px;
 letter-spacing: 1px;
 transition: all 0.1s linear;
 cursor: pointer;
 border: none;
 background: #fff;
 margin-left: 20px;
 margin-top: 20px;
}

.btn > svg {
 margin-right: 5px;
 margin-left: 5px;
 font-size: 20px;
 transition: all 0.2s ease-in;
}

.btn:hover > svg {
 font-size: 1.2em;
 transform: translateX(-8px);
}

.btn:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: translateY(-2px);
}

/deep/.el-drawer.rtl {
    background: #2F3CF4;
  }


</style>