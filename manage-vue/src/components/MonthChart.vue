<template>
    <div>
        <div id="month" style="margin:40px;"></div>
    </div>
</template>

<script>
//2.引用echarts库
import echarts from 'echarts'
    export default {
        data() {
            return {
                //在data中去设置图标的数据
                days:['coffee','fruit','milk'],
                datas: [88,64,98]
            }
        },
        mounted() {
            //先初始化echarts，得到一个echarts对象
            //创建一个echarts对象的方法是echarts中的init()方法
            let myMonthChart = echarts.init(document.getElementById("month"));//初始化echarts对象
            
            //创建并初始化一个echarts的配置项对象option，所有的echarts图标的数据样式都是
            //来自于这个option对象的配置，其实这个option可以写在data中，或者通过父组件等其他
            //组件传值过来使用。
            // const option = {
            //     //这个是echarts对象中的X轴坐标组件
            //     //type的属性值category代表着类目，就是横轴上面的表示事物
            //     //data表示类目对应的数据

            //     // xAxis: {
            //     //     type: 'category',
            //     //     data: this.days
            //     // },
            //     // //echarts对象的Y轴组件
            //     // //type同样表示y轴要表示的数据来源和类型是什么
            //     // yAxis: {
            //     //     type: "value",
            //     // },
                
            //     //series是系列的意思，代表着整个图标的核心，具体表现在数据上和整个图标的类型和样式上
            //     series: [
            //         {
            //             name: 'bar',//表示的英语科目使用的是柱状图
            //             type: 'month',  //同理，该图标既用了折线图又用了柱状图
            //             data: this.datas //数据来源相同，表示数学和英语成绩是一样的，
            //         }
            //     ]
            // }
            const option = {
                    title: {
                        text: '本月收入'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['coffee','fruit','milk','total']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                        saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                        axisLabel: {
                            formatter: '{value} th',
                            align: 'center'
                            }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        name: 'coffee',
                        type: 'line',
                        // stack: 'Total',
                        data: [32, 32, 11, 34, 40, 35, 40, 90, 80, 30, 40]
                        },
                        {
                        name: 'fruit',
                        type: 'line',
                        // stack: 'Total',
                        data: [10, 22, 8, 24, 20, 33, 20, 60, 50, 40, 60]
                        },
                        {
                        name: 'milk',
                        type: 'line',
                        // stack: 'Total',
                        data: [14, 25, 12, 30, 50, 55, 40, 102, 90, 60, 50]
                        },
                        {
                        name: 'total',
                        type: 'line',
                        // stack: 'Total',
                        data: [56, 79, 31, 88, 110, 123, 100, 252, 220, 130, 150]
                        },
                    ]
                    };
            //最后在使用echarts对象来设置提前写好的数据，来展现图标
            myMonthChart.setOption(option);
        },
    }
</script>

<style scoped>
    #month{
        width: 600px;
        height: 500px;
    }
</style>