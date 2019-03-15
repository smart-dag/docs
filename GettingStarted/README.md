### 1 install docker-ce 

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


### 2 add user to docker grout

```
sudo gpasswd -a $(whoami) docker
```

### 3 get sdag testnet for developer

```
docker pull registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev:latest
```

### 4 start

```
docker run --rm -d --name sdag -p 6615:6615 -p 3000:6000 registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev
```

### 5 visit explorer

```
http://localhost:3000
```

### 6 get mnemonic
this mnemonic has many many token 

login 
```
docker exec -it sdag bash
```

```
cat data/sdg/settings.json
```

return 

```
{
    "hub_url": [
        "127.0.0.1:6615"
    ],
    "genesis_unit": "zg7GhBCgYe3enI03jdf6YmFuLm1mk3BFIGoXVfzjl1w=",
    "mnemonic": "sea absorb guilt regular retire fire invest urge tone peace enroll asthma"
}
```

### 7 send token

