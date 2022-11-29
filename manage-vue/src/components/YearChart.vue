<template>
    <div>
        <div id="year" style="width:80vw;height:40vh;margin: 20px 6px 0px 6px;"></div>
    </div>
</template>

<script>
//2.引用echarts库
import * as echarts from 'echarts'
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
            let mycharts = echarts.init(document.getElementById("year"));//初始化echarts对象
            
            //创建并初始化一个echarts的配置项对象option，所有的echarts图标的数据样式都是
            //来自于这个option对象的配置，其实这个option可以写在data中，或者通过父组件等其他
            //组件传值过来使用。
            let base = +new Date(1968, 9, 3);
            let oneDay = 24 * 3600 * 1000;
            let date = [];
            let data = [Math.random() * 300];
            for (let i = 1; i < 20000; i++) {
                var now = new Date((base += oneDay));
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            }
            const option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                    return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '本年收入'
                },
                toolbox: {
                    feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [
                    {
                    type: 'inside',
                    start: 0,
                    end: 10
                    },
                    {
                    start: 0,
                    end: 10
                    }
                ],
                series: [
                    {
                    name: '本年收入',
                    type: 'line',
                    symbol: 'none',
                    sampling: 'lttb',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }
                        ])
                    },
                    data: data
                    }
                ]
            }
            //最后在使用echarts对象来设置提前写好的数据，来展现图标
            mycharts.setOption(option);
        },
    }
</script>

<style scoped>
    #year{
        width: 10vw;
        height: 20vh;
    }
</style>