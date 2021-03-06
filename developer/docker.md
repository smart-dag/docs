# 2分钟起链

>　使用Docker，你可以在２分钟内启动你自己的SDAG区块链。

## 安装 Docker

根据你的操作系统，点击详细，按照Docker官方说明进行安装。

ubuntu:

https://docs.docker.com/install/linux/docker-ce/ubuntu/ 

centos:

https://docs.docker.com/install/linux/docker-ce/centos/

fedora:
https://docs.docker.com/install/linux/docker-ce/fedora/

Mac:

https://docs.docker.com/docker-for-mac/install/ 

windows:

https://docs.docker.com/docker-for-windows/install/

国内用户可以直接到 [http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/](http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/) 下载相应的版本。但需要注意的是，windos必须开启了虚拟化（需要CPU支持），否则无法使用。

注：windows10的ubuntu子系统，目前还无法使用docker。


## 把当前用户添加至 Docker 用户组

```bash
sudo gpasswd -a $(whoami) docker
```

## 拉取 SDAG 的 Docker 镜像
```
docker pull sdag/sdag_testnet_dev
```
## 启动docker镜像
```
docker run --rm -d --name sdag -p 6615:6615 -p 8080:8080 sdag/sdag_testnet_dev
```

这时，你可以访问 [http://localhost:8080](http://localhost:8080) 来查看SDAG的运行状况。

<img :src="$withBase('/images/explorer.png')" alt="explorer">
