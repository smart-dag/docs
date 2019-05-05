# DIY 区块链

>　针对区块链难以部署的问题，SDAG可做到开箱即用。即使是小白用户，也能做到2分钟起链。 

## 一、2分钟起链

拉取 SDAG 的 Docker 镜像
```
docker pull sdag/sdag_testnet_dev
```
启动docker镜像
```
docker run --rm -d --name sdag -p 6615:6615 -p 8080:8080 sdag/sdag_testnet_dev
```

这时，你可以访问 [http://localhost:8080](http://localhost:8080) 来查看SDAG的运行状况。

<img :src="$withBase('/images/explorer.png')" alt="explorer">

## 二、配置 explorer

> 新版的 explorer 可以通过修改config.json文件来自定义名称和LOGO。

如需去掉 powered by sdag.io　可以联系我们购买企业版。

服务邮件: help@sdag.io

## 三、配置 wallet

> 新版的 wallet 可以通过修改config.json文件来自定义名称和LOGO。

如需去掉 powered by sdag.io　可以联系我们购买企业版。

服务邮件: help@sdag.io