<template>
    <div>
        <div id="rank" style="width:34vw;height:40vh;margin: 10px 10px 0px 10px;"></div>
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
            let mycharts = echarts.init(document.getElementById("rank"));//初始化echarts对象
            
            //创建并初始化一个echarts的配置项对象option，所有的echarts图标的数据样式都是
            //来自于这个option对象的配置，其实这个option可以写在data中，或者通过父组件等其他
            //组件传值过来使用。
            const data = [];
            for (let i = 0; i < 5; ++i) {
                data.push(Math.round(Math.random() * 200));
            }
            const option = {
                title: {
                    left: 'center',
                    text: '本日饮品排行'
                },
            dataset: {
                source: [
                ['score', 'amount', 'product'],
                [89.3, 58212, 'Matcha Latte'],
                [57.1, 78254, 'Milk Tea'],
                [74.4, 41032, 'Cheese Cocoa'],
                [50.1, 12755, 'Cheese Brownie'],
                [89.7, 20145, 'Matcha Cocoa'],
                [68.1, 79146, 'Tea'],
                [19.6, 91852, 'Orange Juice'],
                [10.6, 101852, 'Lemon Juice'],
                [32.7, 20112, 'Walnut Brownie']
                ]
            },
            grid: { containLabel: true },
            xAxis: { name: 'amount' },
            yAxis: { type: 'category' },
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 10,
                max: 100,
                text: ['High Score', 'Low Score'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                color: ['#65B581', '#FFCE34', '#FD665F']
                }
            },
            series: [
                {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
                }
            ]
            };
                //最后在使用echarts对象来设置提前写好的数据，来展现图标
                mycharts.setOption(option);
            },
    }
</script>

<style scoped>
    #rank{

    }
</style>