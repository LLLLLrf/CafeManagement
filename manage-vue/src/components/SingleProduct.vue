<template>
    <div class="layout" v-if="this.good">
        <div style="">
            <div style="margin-top:12vh;float: left;margin-left: 12vw;">
                <div>
                    <ProgressiveImage class="image"
                    :src="change.image" />
                </div>
            </div>

            <div style="margin-top:12vh;text-align:left;float: left;margin-left: 40px;max-width: 400px;">
                <div>
                    <el-form :model="change" label-width="100px">
                        <el-form-item label="Class">
                            <el-select v-model="change.class" placeholder="please select class" style="min-width:260px">
                                <el-option label="COFFEE" value="COFFEE" />
                                <el-option label="TEA" value="TEA" />
                                <el-option label="SODA" value="SODA"/>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Name">
                            <el-input v-model="change.name" style="min-width:260px"></el-input>
                        </el-form-item>
                        <el-form-item label="Temp">
                            <el-checkbox-group v-model="good.ask.temp">
                                <el-checkbox label="Hot" name="type" />
                                <el-checkbox label="Cold" name="type" />
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="Price">
                            ￥
                            <el-input-number v-model="change.price" :min="0" :max="999" @change="handleChange" />
                        </el-form-item>
                        <el-form-item label="On Sale">
                            <el-switch v-model="change.sale" />
                        </el-form-item>
                        <el-form-item label="Describe">
                            <el-input v-model="change.describe" style="min-width:260px"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="Save()">Save</el-button>
                            <el-button @click="Cancel()">Cancel</el-button>
                            <el-popconfirm title="Are you sure to delete this?" @confirm="Delete()">
                                <template #reference>
                                    <el-button type="danger">Delete</el-button>
                                </template>
                            </el-popconfirm>
                        </el-form-item>
                    </el-form>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import GoodsService from '@/services/GoodsService';
import { ElMessage } from 'element-plus';
export default{
    data(){
        return{
            src:"https://www.starbucks.com.cn/images/products/cappuccino.jpg",
            good:undefined,
            change:undefined
            
        }
    },
    methods:{
        Save(){
            this.change.image='0'
            GoodsService.update(this.good.id, this.change).then(()=>{
                ElMessage.success("success Save")
                this.$router.go(-1)
            }).catch(err=>{
                ElMessage.error(err)
            })
        },
        Cancel(){
            this.change=this.good
            this.$router.go(-1)
        },
        Delete(){
            GoodsService.delete(this.good.id).then(()=>{
                ElMessage.success("success Delete")
                this.$router.go(-1)
            })
        }
    },
    mounted() {
        GoodsService.getbyname(this.$route.query.name)
        .then(res=>{
            this.good=res.data[0]
            this.change=this.good
            console.log(this.good)
        })
    },
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
        width:300px;
        height:300px;
        border-radius: 8px;
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
    .RadioSelection{
        margin-top:20px;
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