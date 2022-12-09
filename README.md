# CafeManagement

SCNU&amp;UoA Cafe Management

## 从docker构建

## 从源代码构建

- **安装Node.js**

  - **[Node.js v16.14.2](http://nodejs.cn/)**
  - **[npm v8.5.5]**
- **安装[MySQL v8.0.28](https://www.mysql.com/)**

### 前端

#### 安装依赖

```bash
cd cfm-vue
npm i
```

#### 快速启动

```bash
npm run electron:serve
```

### 后端

#### 数据库信息

- host --> localhost
- user -->cfm
- password --> cfm123456
- database --> cfm
- table --> orders,goods

#### 快速配置数据库

- 创建数据库

```sql
create database cfm;
```

- 新建数据库用户

```sql
create user 'cfm'@'%' identified by 'cfm123456';
```

- 授权

```sql
grant all on cfmdb.* to 'cfm'@'%';
```

#### 安装依赖

```bash
cd cfm-node
npm i
```

#### 快速启动

```bash
node server.js
```

## Document

- 原型设计工具 **[Axure](https://docs.axure.com/axure-rp/reference/getting-started-video/)**
- 跨平台框架 **[Electron](https://www.electronjs.org/zh/docs/latest/)**
- UI框架 **[Element](https://element-plus.gitee.io/zh-CN/component/button.html)**
- 前端框架 **[Vue 3](https://cn.vuejs.org/guide/quick-start.html)**
- 数据库 **[MySQL](https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html)**

## 功能

- 商品展示
- 商品详细页
- 付款界面
- 购物车
- 订单
