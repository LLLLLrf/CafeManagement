# CafeManagement

[FaterYU/CafeManagement: SCNU&UoA Cafe Management (github.com)](https://github.com/FaterYU/CafeManagement/)

## Install Application

### Windows Version Download

- [Client](https://github.com/FaterYU/CafeManagement/releases/download/1.1.0/CafeManagement-Client.Setup.1.1.0.exe)
- [Manage](https://github.com/FaterYU/CafeManagement/releases/download/1.1.0/CafeManagement-Manage.Setup.1.1.0.exe)

### Install

Follow the installation program

**You can use Application without build Back-end by yourself, because author build on cloud server and provide serve**

## Make  Back-end from Docker

### Compose Install

#### Linux

1. Run the following command to download the current stable version of Docker Compose:
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```
   
2. To apply executable permissions to binaries:

   ```bash
   sudo chmod +x /usr/local/bin/docker-compose
   ```
3. Create a soft chain:

   ```bash
   sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
   ```

4. Test whether the installation is successful:

   ```bash
   docker-compose version
   # cker-compose version 1.24.1, build 4667896b
   ```

#### Windows

The Windows Docker Desktop Edition and Docker Toolbox already include Compose and other Docker apps, so Windows users do not need to install Compose separately.

#### macOS

The Docker Desktop Edition and Docker Toolbox for Mac already include Compose and other Docker apps, so Mac users do not need to install Compose separately.

### Make from docker-compose.yml

1. Clone project from GitHub

   ```bash
   git clone https://github.com/FaterYU/CafeManagement.git
   ```

2. Switch the terminal to the root directory of project

   ```bash
   cd CafeManagement
   ```

3. Build docker from `docker-compose.yml`

   ```bash
   docker-compose up -d
   ```

## Make Back-end from Source Code

### Install Node.js

The Node.js installation package and source code can be downloaded from: <https://nodejs.org/en/download/>

The Node official website has changed the linux download version to the compiled version, we can download and decompress it directly and use it:

```bash
wget https://nodejs.org/dist/v16.14.2/node-v16.14.2-linux-x64.tar.xz    // download
tar xf  node-v16.14.2-linux-x64.tar.xz       // unzip
cd node-v16.14.2-linux-x64/                  // go to directory
./bin/node -v                               // check node version
# v16.14.2
```

### Install MySQL

Install from apt

```bash
sudo apt install mysql-server
```

Start MySQL Service

```bash
sudo service mysql restart
```

### Configuring MySQL Information

#### Base Information of MySQL

- host --> localhost
- user --> cfm
- password --> cfm123456
- database --> cfm
- table --> orders,goods

#### Configuring Base Infomation

- Create database

```sql
create database cfm;
```

- create user

```sql
create user 'cfm'@'%' identified by 'cfm123456';
```

- Authorization

```sql
grant all on cfmdb.* to 'cfm'@'%';
```

### Install Node modules

``` bash
cd cfm-node
npm install -s
```

### Start Back-end

```bash
 npm start
```

## Secondary Development from Source Code

### Requirement

- **Node.js**
- **[Node.js v16.14.2](http://nodejs.cn/)**
  - **[npm v8.5.5]**
- **[MySQL v8.0.28](https://www.mysql.com/)**

### Client Front-end Start

#### Install Node modules

```bash
cd cfm-vue
npm install -s
```

#### Start Client Front-end as Application

```bash
npm run electron:serve
```

#### Start Client Front-end as Web

```bash
npm run serve
```

#### Build Client Front-end as Application

```bash
npm run electron:build
```

#### Build Client Front-end as Web

```bash
npm run build
```

### Management Front-end Start

#### Install Node modules

```bash
cd manage-vue
npm install -s
```

#### Start Management Front-end as Application

```bash
npm run electron:serve
```

#### Start Management Front-end as Web

```bash
npm run serve
```

#### Build Management Front-end as Application

```bash
npm run electron:build
```

#### Build Management Front-end as Web

```bash
npm run build
```

### File Structure of Client Front-end

```bash
cfm-vue
├── README.md
├── babel.config.js
├── jsconfig.json
├── preload.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.ico
├── src
│   ├── App.vue
│   ├── api-http.js
│   ├── assets
│   │   ├── icons
│   │   ├── payment
│   │   └── pictures
│   ├── background.js
│   ├── bus.js
│   ├── components
│   │   ├── APItest.vue
│   │   ├── CartCard.vue
│   │   ├── CartPage.vue
│   │   ├── DetailPage.vue
│   │   ├── DrinkCard.vue
│   │   ├── HomePage.vue
│   │   ├── ManageHome.vue
│   │   └── PaySuccess.vue
│   ├── config
│   │   └── rsa_public_key.pem
│   ├── main.js
│   ├── router.js
│   ├── services
│   │   ├── GoodsService.js
│   │   ├── OrdersService.js
│   │   └── UploadFilesService.js
│   └── utils
│       ├── aes.js
│       ├── crypt_util.js
│       └── rsa.js
└── vue.config.js
```

### File Structure of Manage Front-end

```bash
manage-vue
├── README.md
├── babel.config.js
├── jsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── logo.ico
├── src
│   ├── App.vue
│   ├── api-http.js
│   ├── assets
│   │   ├── icons
│   │   └── pictures
│   ├── bus.js
│   ├── components
│   │   ├── APItest.vue
│   │   ├── DetailPage.vue
│   │   ├── DrawChart.vue
│   │   ├── DrawPieChart.vue
│   │   ├── DrinkCard.vue
│   │   ├── HomePage.vue
│   │   ├── ManageAPI.vue
│   │   ├── ManageHome.vue
│   │   ├── MonthChart.vue
│   │   ├── OrderDetail.vue
│   │   ├── ProductDetail.vue
│   │   ├── RankingChart.vue
│   │   ├── SingleOrder.vue
│   │   ├── SingleProduct.vue
│   │   ├── TotalProfit.vue
│   │   ├── UploadComp.vue
│   │   ├── UploadProduct.vue
│   │   └── YearChart.vue
│   ├── config
│   │   └── rsa_public_key.pem
│   ├── main.js
│   ├── router.js
│   ├── services
│   │   ├── GoodsService.js
│   │   ├── OrdersService.js
│   │   └── UploadFilesService.js
│   └── utils
│       ├── aes.js
│       ├── crypt_util.js
│       └── rsa.js
└── vue.config.js
```

### File Structure of Back-end

```bash
cfm-node
├── Dockerfile
├── package-lock.json
├── package.json
├── server.js
├── src
│   ├── config
│   │   ├── db.config.js
│   │   ├── rsa_create.js
│   │   ├── rsa_private_key.pem
│   │   └── rsa_public_key.pem
│   ├── controllers
│   │   ├── file.controller.js
│   │   ├── goods.controller.js
│   │   └── orders.controller.js
│   ├── middleware
│   │   ├── alipay.js
│   │   └── upload.js
│   ├── models
│   │   ├── goods.model.js
│   │   ├── index.js
│   │   └── order.model.js
│   ├── routes
│   │   ├── goods.routes.js
│   │   ├── orders.routes.js
│   │   ├── pay.routes.js
│   │   └── upload.routes.js
│   └── utils
│       ├── aes.js
│       ├── crypt_util.js
│       └── rsa.js
├── uploads
└── uploads-full

```

## Framework Document

- Prototype design **[Axure](https://docs.axure.com/axure-rp/reference/getting-started-video/)**
- Cross-platform framework **[Electron](https://www.electronjs.org/zh/docs/latest/)**
- UI framework **[Element](https://element-plus.gitee.io/zh-CN/component/button.html)**
- Front-end framework **[Vue 3](https://cn.vuejs.org/guide/quick-start.html)**
- Database **[MySQL](https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html)**

## More Infomation

- [Technical report]()

## Contributors

- [FaterYU (FaterYU) (github.com)](https://github.com/FaterYU)
- [LLLLLrf (github.com)](https://github.com/LLLLLrf)
- [kuzzz02 (github.com)](https://github.com/kuzzz02)
- [Pumpkingo123 (Pumpkingo) (github.com)](https://github.com/Pumpkingo123)
- [cookcookcoo (github.com)](https://github.com/cookcookcoo)
- [1zero224 (github.com)](https://github.com/1zero224)
- [sumikko43 (github.com)](https://github.com/sumikko43)
- [KKKaa82 (github.com)](https://github.com/KKKaa82)