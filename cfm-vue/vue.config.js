const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  devServer: {
    port: 12580, // 端口
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "123456",
        productName: "CafeManagement-Client", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "FaterYU © 2022", //版权信息
        directories: {
          output: "./pack" //输出文件路径
        },
        win: {
          //win相关配置
          icon: "./public/logo.ico", //图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: "nsis", //利用nsis制作安装程序,打包文件的后缀为exe
              arch: [
                "x64", //64位
                "ia32" //32位
              ]
            }
          ]
        },
        nsis: {
          oneClick: false, //一键安装
          installerLanguages: ["en_US"],
          // language: "2052", //安装语言
          perMachine: true, //应用所有用户
          allowToChangeInstallationDirectory: true //用户可以选择路径
        },
        linux: {
          target: "deb" 
        },
        mac: {
          target: "dmg"
        }
      }
    }
  }
};