FROM mysql:5.7.25

# allow no password
ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

# copy file into container
COPY setup.sh /mysql/setup.sh
COPY msg_to_mysql.py /mysql/msg_to_mysql.py
COPY order_to_mysql.py /mysql/order_to_mysql.py
COPY privileges.sql /mysql/privileges.sql

RUN sh /mysql/setup.sh

FROM python

WORKDIR /sh
ADD . /sh
RUN pip install -r /sh/requirements.txt
RUN python3 /sh/msg_to_mysql.py /sh/goods_msg.xlsx 
RUN python3 /sh/orders_to_mysql.py /sh/orders_exp.xlsx

# # exec these command when container start up
# CMD ["sh", "/mysql/setup.sh"]