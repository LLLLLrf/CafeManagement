# 数据库

## 数据库信息

- host --> localhost
- user -->cfm
- password --> cfm123456
- database --> cfmdb
- table --> goods

## 依赖

- MySQL
- python==3.10
- cryptography==37.0.2
- openpyxl==3.0.10
- pycparser==2.21
- PyMySQL==1.0.2

## 快速配置数据库

- 创建数据库

```sql
create database cfmdb;
```

- 新建数据库用户

```sql
create user 'cfm'@'%' identified by 'cfm123456';
```

- 授权

```sql
grant all on cfmdb.* to 'cfm'@'%';
```

## 导入商品数据

- 配置python依赖

```bash
pip install -r requirements.txt
```

- 运行更新脚本（Windows下，若用conda配置环境要用绝对路径）

```bash
python3 msg_to_mysql.py ./goods_msg.xlsx 
```
