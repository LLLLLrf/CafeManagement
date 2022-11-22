<template>
    <div>
        <div id="pie" style="margin:20px 10px 0 10px;"></div>
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
            let myPieChart = echarts.init(document.getElementById("pie"));//初始化echarts对象
            
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
            //             type: 'pie',  //同理，该图标既用了折线图又用了柱状图
            //             data: this.datas //数据来源相同，表示数学和英语成绩是一样的，
            //         }
            //     ]
            // }
            const option = {
                title: {
                    text: '本日收入',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['coffee', 'fruit', 'milk']
                },
                series: [
                    {
                    name: '本日收入',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'coffee' },
                        { value: 310, name: 'fruit' },
                        { value: 234, name: 'milk' },
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
        height: 40vh;
    }
</style>