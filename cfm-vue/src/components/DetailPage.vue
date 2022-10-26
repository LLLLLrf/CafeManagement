<template>
    <div class="layout">
        <!-- create order option -->
        <el-form :model="form" label-width="120px">
            <el-form-item label="name">
                {{good.name}}
            </el-form-item>
            <el-form-item label="image">
                <!-- <img :src="good.image"/> -->
            </el-form-item>
            <el-form-item label="describe">
                {{good.describe}}
            </el-form-item>
            <el-form-item label="release date">
                {{new Date(good.createdAt).toDateString()}}
            </el-form-item>
            <el-form-item label="price">
                {{good.price}}
            </el-form-item>
            <el-form-item label="temp">
                <el-select v-model="sig.temp" placeholder="please select your zone">
                    <el-option label="hot" value="hot" />
                    <el-option label="cold" value="cold" />
                </el-select>
            </el-form-item>
            <el-form-item label="sugar">
                <el-select v-model="sig.sugar" placeholder="please select your zone">
                    <el-option label="less" value="less" />
                    <el-option label="normal" value="normal" />
                </el-select>
            </el-form-item>
            <el-form-item label="amount">
                <el-input-number v-model="sig.amount" :min="1" :max="99"/>
            </el-form-item>
        </el-form>
        <el-button @click="onsubmit()">add in cart</el-button>
    </div>
</template>


<script>

// import GoodsService from '../services/GoodsService'
export default{
    props: [
        'good'
    ],
    data() {
        return {
            sig:{
                name: this.good,
                temp: undefined,
                sugar: undefined,
                amount: 0,
                price: 0,
            }
        };
    },
    methods: {
        onsubmit(){
            this.sig.price=this.good.price
            this.$emit('detail',this.sig)
        }
    },
    mounted() {
    },
}
</script>

<style scoped>
.layout{
    color: #fff;
}

</style>