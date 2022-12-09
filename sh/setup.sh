#!/bin/bash
set -e

echo '1. starting mysql...'
service mysql start

# set password
echo '2. setting password....'
mysql < /mysql/privileges.sql

# check mysql status
echo `service mysql status`

tail -f /dev/null