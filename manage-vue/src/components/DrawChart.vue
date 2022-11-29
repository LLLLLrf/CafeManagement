<template>
    <div>
        <div id="main" style="width:48vw;height:34vh;margin: 20px 10px 0px 10px;"></div>
    </div>
</template>



<script>
//2.引用echarts库
import echarts from 'echarts'
    export default {
        data() {
            return {
                //在data中去设置图标的数据
                days:['Mon','Tue','Wen','Thu','Fri','Sat','Sun'],
                datas: [88,64,98,118,198,149,180]
            }
        },
        mounted() {
            //先初始化echarts，得到一个echarts对象
            //创建一个echarts对象的方法是echarts中的init()方法
            let mycharts = echarts.init(document.getElementById("main"));//初始化echarts对象
            
            //创建并初始化一个echarts的配置项对象option，所有的echarts图标的数据样式都是
            //来自于这个option对象的配置，其实这个option可以写在data中，或者通过父组件等其他
            //组件传值过来使用。
            const option = {
                title: {
                    text: '七日收入',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    feature: {
                        saveAsImage: {}
                        },
                    axisPointer: { type: 'cross' }
                },
                legend: {
                    left:'left',
                    // orient:'vertical'
                },
                //这个是echarts对象中的X轴坐标组件
                //type的属性值category代表着类目，就是横轴上面的表示事物
                //data表示类目对应的数据
                xAxis: {
                    type: 'category',
                    data: this.days,
                    axisTick: {
                        alignWithLabel: true
                    },
                },
                //echarts对象的Y轴组件
                //type同样表示y轴要表示的数据来源和类型是什么
                yAxis: {
                    type: "value",
                },
                //series是系列的意思，代表着整个图标的核心，具体表现在数据上和整个图标的类型和样式上
                series: [
                    {
                        name: 'coffee',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                            },
                        data: [120, 132, 101, 134, 110, 270, 260]
                    },
                    {
                        name: 'fruit',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                            },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'milk',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                            },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'total',
                        type:'line',
                        data:[490,545,493,522,590,930,980]
                    }
                ]
            }
            //最后在使用echarts对象来设置提前写好的数据，来展现图标
            mycharts.setOption(option);
        },
    }
</script>


<style scoped>
    #main{

    }
</style>