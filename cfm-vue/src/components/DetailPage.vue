<template>
    <div class="layout">
        <!-- show good msg -->
        <div v-for="(msg,index) in good" :key="index">
            {{msg}}
        </div>
        <!-- create order option -->
        <el-form :model="form" label-width="120px">
            <el-form-item label="名称">
                {{good.name}}
            </el-form-item>
            <el-form-item label="热度">
                <el-select v-model="sig.temp" placeholder="please select your zone">
                    <el-option label="热" value="hot" />
                    <el-option label="冰" value="cold" />
                </el-select>
            </el-form-item>
            <el-form-item label="糖">
                <el-select v-model="sig.sugar" placeholder="please select your zone">
                    <el-option label="少" value="less" />
                    <el-option label="正常" value="normal" />
                </el-select>
            </el-form-item>
            <el-form-item label="糖">
                <el-input-number v-model="sig.amount" :min="1" :max="99"/>
            </el-form-item>
        </el-form>
        <el-button @click="onsubmit()">submit</el-button>
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
                amount: 0
            }
        };
    },
    methods: {
        onsubmit(){
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