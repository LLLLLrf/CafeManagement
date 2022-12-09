use mysql;
create database cfm;
create user 'cfm'@'%' identified by 'cfm123456';
grant all on cfmdb.* to 'cfm'@'%';
flush privileges;