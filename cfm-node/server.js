const db = require('./src/models/index')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8081;
const cors = require('cors')
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
const uploadRoutes=require('./src/routes/upload.routes')
uploadRoutes(app)
var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
global.__basedir = __dirname
require('./src/routes/goods.routes')(app)
require('./src/routes/orders.routes')(app)

//引入 alipay sdk 模块
const AliPaySdk = require('alipay-sdk').default

//引入 alibapay form 模块
const AlipayForm = require('alipay-sdk/lib/form').default
var router = require("express").Router();
// 挂载
app.use('/api', router)

//初始化alipay 配置
const alipaySdk = new AliPaySdk({
    appId: '2021000121697188', // 自己的id
    gateway:"https://openapi.alipaydev.com/gateway.do", // 这是支付宝官网沙箱测试网关
    privateKey: "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRzZvEYD8uLlza0cG3HCAfsVYpjgCzbFD/uQWuwFkyClD1zKIleZQ5dsf8kNS6S3XNq+PGEsLaQV4oT6I9oXm1sotBaAMtn/7WbPtagS1/hGQqCuSy0U5ysAA6goCERcbjUfcZHKvqPq367uXwTlJNquXbM+XVVzdWzsXQ5SikrdZnSkTLavuHzpf8IEx5hJesWx5NxJKBB9+5Yh+EAvfxreDR9yJQ0lQk4hlxnFeSq0m0T9g/NMFKuGt6N+/2ruRaXcT3CS/E6hVxZvpUeWw7acWUWbn5CBAmh2g3CaA9AolODJy9eRtnxcb0y/aS+nPSbSShvPT+K/WM+TgR97bPAgMBAAECggEAdoMft9FbyZfZ1etlgAcWfWxR0tkf7LeAZzvnSJIEbk5AXGsG6VsXhlXsXHkE0KCBkrnDHL8nLuyvMij4gQv9uBj2ZCW9X5qLM5PGA1y4tMvR9vJ/znGfSE2TAfwNpnZpIWEAbqMFghOMq0kAEgI3l/Xve+uFR5Hq416TICcEkEWWFsdcD0l+wYahtnEeGXroD4+quVZgAWh1LadKTiPQwKpYFk+V3zQn5tUd51dbuZFOwXI2Mge3drYbT85FSqRHlldJJEUGk0ZyTggZjCZ4d1FohvmnkpP+jqXHu5q44I9zMgum9XP3p9ofP8w4H5tOnHQZvh07khlHtsaIDbE8YQKBgQDlp6wr+UmVeBavSnemljic3A6nSfM0Imo4oihsusV/ATLbdwM9GNb9wXq3qZxlz9D+BtEQU066XyK+8r9s3jaJ1i9ntlOt4BQjD0C9uSuu2rh86EGFKq3jSLRTE3fY9AjrfdhjeyufEdLOa3oB3f91HfrkHciyrlZkPcpCPBCxmQKBgQCih3EGZvmWht/Afm+Ba1dt3CuLYG2a9gM5KhmWO7sPewsD99TvpyM9HXnVE9tKesp+Lpw93Ko1QTvpr+EPTXDRL3sr62W1mhLAKVWYHZ/vAKCFtmWpeldJUC3057x4VKurSAQL40egg5NXcxKAcEL20xzm1wVZgeVhGSMk1ZQ8pwKBgCEZx8EWzzpR8sMVMqW6JTLGrP4DtKAhDbpX9Qem6+xgWdo0Dy1xNRuiFXP/aGFsUK0sglmeCEzohXOMPXcNmELJsk96ghkfoQdknWo7FEbBk7G9MCRngGSwB/2pYq7MjbSTkOrVx/XHdeD2sMEwJC/XQGA8wr6uThlopoxhZ+6RAoGBAJtkSYDohWsQyu8dM3kWawHjhlJ8wG5vFgfao5oKw796Ub7afeEf+MYe33QExx4/pkjcQY+34ZiHJUQ5X0GlNd8auXX1W0o05AaLvoVwlZAKFm+hQzO1f6zdlwLXaU/XDEb31L6U78+c3Qu4PpFERBH/KFvgawH3+ppKUVqPRWpzAoGAeKxoWvgmI5hFba1hC5KbHH2TACk/tDJaD+TGi+0rvwQYyUZzfy/Ss0LsUTHgB2vWm3a/JqRfWXscmYSnJ0gZXMboMqKJFOzCcY6OqdfjYWJARsTfo0jA8MRisZpV/7XaluVdNmgFc0o7sbNZ6X6fDU3zIkLPUvZhWQMHkMtDF2g=", // 应用私钥
    alipayPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmkttNs0wCo0lpzk8nxezCbhAXMkxhnnHj5YexC9qhXeCfzrwSaxmcNQEdyzzco855tPvRCnnW1rEPeAYH0sYUuD+EuHezRALcstKCSqejtWSqZ+s+otiWATdwthTkmE8bLSjWkoS3hDe4pa1EG5I2Wvpo5ca/rST9rTYruqDMUU57Q0u2+LNr5Ffe7rFYpvNidJxn1Apw70yd/Etywum6im9+G981LQMqZkyL5vRAV3nepR3GiSDPXdXfrBAey8R4WWfWVYaLmBBJxiSOzdovuPIvN1g8qF1kjBh82zxbHpKuVOkuQlVEvULnedqKQ/rXws56SUC5KrbvoOPjBXj6QIDAQAB" // 支付宝公钥
})
 
// 服务器发送请求
router.get('/pay', async (req, res) => {
  // 实例化 AlipayForm
    const formData = new AlipayForm()

    // 下面是官网的测试代码
    formData.setMethod('get')
    formData.addField('returnUrl', 'http://www.baidu.com'); //支付成功的回调
    formData.addField('bizContent', {
        outTradeNo: Math.random(), // 订单号
        productCode: 'FAST_INSTANT_TRADE_PAY', // 产品码
        totalAmount: '499999', // 商品金额
        subject: '123', // 出售商品的标题
        body: '123123' // 出售商品的内容
    });
  
    //执行结果
    const reult = await alipaySdk.exec('alipay.trade.page.pay',{},{ formData: formData })

    // 返回一个 json 格式的数据
    res.json({
      code: reult
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
db.sequelize.sync();
