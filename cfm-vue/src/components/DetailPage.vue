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
                <el-select v-model="temp" placeholder="please select your zone">
                    <el-option label="热" value="hot" />
                    <el-option label="冰" value="cold" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker v-model="time" type="data" placeholder="Pick a time" style="width: 100%" />
                </el-col>
            </el-form-item>
            <!-- <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
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
            temp: undefined,
            time: undefined
        };
    },
    methods: {
        test(){
            console.log(this.good)
        },
        onSubmit(){
            console.log('submit!')
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