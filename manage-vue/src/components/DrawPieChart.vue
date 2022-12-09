<template>
    <div>
        <div id="pie" style="margin:20px 10px 0 10px;"></div>
    </div>
</template>

<script>
import OrdersService from '@/services/OrdersService';
//2.引用echarts库
import * as echarts from 'echarts'
    export default {
        data() {
            return {
                //在data中去设置图标的数据
                days:['coffee','fruit','milk'],
                datas: []
            }
        },
        mounted() {
            OrdersService.getdaydata().then(res=>{
                this.datas=res;
                console.log('day data')
                console.log(this.datas)
            }).catch(err=>{
                console.log(err)
            })

            //先初始化echarts，得到一个echarts对象
            //创建一个echarts对象的方法是echarts中的init()方法
            let myPieChart = echarts.init(document.getElementById("pie"));//初始化echarts对象
            
            const option = {
                title: {
                    text: 'Daily Income',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['coffee', 'tea', 'soda']
                },
                series: [
                    {
                    name: '本日收入',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'coffee' },
                        { value: 310, name: 'tea' },
                        { value: 234, name: 'soda' },
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
                };
            //最后在使用echarts对象来设置提前写好的数据，来展现图标
            myPieChart.setOption(option);
        },
    }
</script>

<style scoped>
    #pie{
        width: 26vw;
        height: 34vh;
    }
</style>