FROM archiciel/kernel

MAINTAINER Gaétan

ENV http_proxy="http://192.168.1.75:3128"
ENV https_proxy="http://192.168.1.75:3128"

ENV PORT=3000

RUN mkdir /app
WORKDIR /app

RUN git clone https://github.com/Archiciel/restangutest

WORKDIR restangutest
RUN npm install -g bower
RUN npm install --production
RUN bower install
RUN npm uninstall bower

EXPOSE 3000

ENV http_proxy=""
ENV https_proxy=""

CMD ["npm", "start"]