const frontUrl='http://localhost:8080/paysuccess'
//引入 alipay sdk 模块
const AliPaySdk = require('alipay-sdk').default

//引入 alibapay form 模块
const AlipayForm = require('alipay-sdk/lib/form').default

//初始化alipay 配置
const alipaySdk = new AliPaySdk({
    appId: '2021000121697188', // 自己的id
    gateway:"https://openapi.alipaydev.com/gateway.do", // 这是支付宝官网沙箱测试网关
    privateKey: "MIIEowIBAAKCAQEA6pQbjEbMLa/lS0qw4HdClRcLVDXimymIesikxx2btnY/aftUbE4EYKpFeIkycrwALPVsy7Sp6QGYC0DcH9POfeEYYFF3n7Qb4ihg9aBMgELuRU5rwkeAypGhvSPtR3KaSDRhWlk3Vqwx0iEMxNRWznx8LsnIGLOUJUT+DZyESwtnCR7UTfrtd6Bjo5fhZd0VricoY6IixD3fPGCM7Yn8njiw46WBaBRQ7OZM8PdzYSfJQyNbPK/G5RFEDQ2qaUh/I462Tsp0goC1SUVerIpMBNdbMcEG12YiUzhtN2FODeduFLQ3faLERTFl8r+9pvi3HbOkGXhFqMiGjJo3o1uNEQIDAQABAoIBAGWkaU9d+eit96+pHH0Wj+4j/w+tDZRn6bAyMlvos2jbUdztPwZyw6jS/qkc4ZQfbAAPE+YsURcaTrRJlVfhIe8fUr2hbzDvDMnw7xpfK+bDmZTERyL2cpLTiX54C79SpBE3SRup3rWahTfkhDDhRP/RpslrO12gqkd/3oktUZFl+gxZ9r+lts8A4Lcer45xY3a4xKS7kflIU7YMO6gWv5oc8EVaQjRbjbQqzUyqV6kW3qKGXiHK6I36pJd+ENsRfrNg2lFk080KGhkUtIILhl/u6dSebSw4KG5JIol4h0VRJu3+bRyqI8w9r4H8t99U9n/2c5rq2ODC/WmSIPnF/bECgYEA+BLxCCs8Zk2DdzeDbFDittYQPOWOIrPovRtGWhNSs8WbBIuYqj138SdJoRZBrLUkWKUZSG64TklZAuf8d8LEt6+z9Ty2mUdlsBBQK/9hX3p2FJrEDaSOupanY2jAt3s+y/7JnYq25bf56LiagL5qbVGYercAZWFjfhtsp9zF8x0CgYEA8hLIk18dIK8h9yi75YQt0fTDp1oyRDEXKfyunajffWoBa8/KyESfE/wqm93QgLF9Y4hwddehZHXvmgXXmP84NUitL5e+ASGcpXjd/ziIMzt6UAhi0XRZyKmKK6KWl8Om0aN8P1HmyipKV4Uqo6JiXlfd3QGEODJx5VdtGDy6C4UCgYAvByg6bDffDQLHLvbzKcJQ9vPNF5eCbKjKcMk9ejxLaEKi8fPXEiASz2fd6eI5Y32ocGQCnzrBXJZLPr9V1M6GJADxlLjpBef5IJ6SOK+08fpAnbZc/70vEjBZYBporiyRb5O5EfrqQZ5Wx+hCT9bNMpK9cMPadEPwPDK0/91m4QKBgEL1jyW0mYoA55RGYDMMbOA2pCgWevEB4zZp/qL9o1Q9jkcUIzNiR95vUhnrMVFnxxdRFkqCatIvDSe9lfVsI1AZ2k3f217UvU/ILx/5szL4sMyShUMKvAsVWnLXdnBkXjB+2E9riDtDl2y+GR1KPYt7IpOPZ9NjoL2fgT3DDnNBAoGBANTaRVycrZUgAqQCfllc+OJ7fuG2CXyaylXZGIf65KD0gzqmv+fw9exmXq23r98m2kCJhMzmWntGuN6dbCfINOau8fUmEftCsAhoAeTANfu7OEJKmpd/Bho/0KGCm8cump6zXTS8uECa0VIvksKChc4mDqTY0p1GQecjjaDUWZZo", // 应用私钥
    alipayPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmkttNs0wCo0lpzk8nxezCbhAXMkxhnnHj5YexC9qhXeCfzrwSaxmcNQEdyzzco855tPvRCnnW1rEPeAYH0sYUuD+EuHezRALcstKCSqejtWSqZ+s+otiWATdwthTkmE8bLSjWkoS3hDe4pa1EG5I2Wvpo5ca/rST9rTYruqDMUU57Q0u2+LNr5Ffe7rFYpvNidJxn1Apw70yd/Etywum6im9+G981LQMqZkyL5vRAV3nepR3GiSDPXdXfrBAey8R4WWfWVYaLmBBJxiSOzdovuPIvN1g8qF1kjBh82zxbHpKuVOkuQlVEvULnedqKQ/rXws56SUC5KrbvoOPjBXj6QIDAQAB", // 支付宝公钥
    sign_type: 'RSA2',
    charset: 'utf-8'
  })
async function checkpay(data){
    // 实例化 AlipayForm
    const formData = new AlipayForm()
    // 下面是官网的测试代码
    formData.setMethod('get');
    formData.addField('bizContent', {
        outTradeNo:data.outTradeNo
    });

    // 通过该接口主动查询订单状态
    const result = await alipaySdk.exec(
        'alipay.trade.query', 
        {}, 
        { formData: formData },
    );
    return result
}
async function paycreate(data){
    // 实例化 AlipayForm
    const formData = new AlipayForm()
    // 下面是官网的测试代码
    formData.setMethod('get')
    formData.addField('returnUrl', frontUrl); //支付成功的回调
    formData.addField('bizContent', {
        outTradeNo: data.publicid, // 订单号
        productCode: 'FAST_INSTANT_TRADE_PAY', // 产品码
        totalAmount: data.totalprice, // 商品金额
        subject: 'ABD CAFE', // 出售商品的标题
        body: 'orderlist' // 出售商品的内容
    });
    //执行结果
    const result = await alipaySdk.exec('alipay.trade.page.pay',{},{ formData: formData })

    return result
}

exports.payapi = paycreate;
exports.checkpay = checkpay;