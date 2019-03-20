# 在 docker 中启动 SDAG 区块链

> sdag 提供简单易用的docker镜像，如果你网络环境好，你可以在2分钟内启动sdag区块链。

### 安装 docker

> 如果你没有安装 docker，你可以通过 docker 官方提供的方法安装：

ubuntu 用户 https://docs.docker.com/install/linux/docker-ce/ubuntu/

centos 用户 https://docs.docker.com/install/linux/docker-ce/centos/

fedora 用户 https://docs.docker.com/install/linux/docker-ce/fedora/

Mac 用户 https://docs.docker.com/docker-for-mac/install/

windows 用户 https://docs.docker.com/docker-for-windows/install/

### 把当前用户添加到docker用户组

```
sudo gpasswd -a $(whoami) docker
```

### 拉取 SDAG 区块链镜像

```
docker pull registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev:latest
```

### 启动 SDAG 区块链

```
docker run --rm -d --name sdag -p 6615:6615 -p 8080:8080 registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev
```

### 打开区块链浏览器，检测 SDAG 是否已经启动

http://localhost:8080

![](https://github.com/smart-dag/docs/raw/master/GettingStarted/explorer.png)
