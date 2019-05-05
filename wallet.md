# wallet 

## 使用桌面版钱包通过水龙头获得数字资产

首先，要确保 SDAG 区块链已经启动。

可参考 [docker.md](docker.md)

然后，克隆sdag wallet for desktop：

```bash
git clone https://github.com/smart-dag/desktop.git
```

安装

```bash
cd desktop
npm install
```

启动

```bash
npm start
```

<img :src="$withBase('/images/wallet/desktop/wallet.png')" alt="wallet">

这个时候，钱包默认使用本地的hub，余额为0。

现在，克隆水龙头项目，从docker中转一些数字资产到钱包里。

```bash
git clone https://github.com/smart-dag/localhost_faucet_cli.git
```

进入目录并安装
```bash
cd faucet
npm install
```

复制钱包的地址，转10个数字资产到钱包里。

```bash
node get E7KCWXQ4Y4FM3WXD2LJVXQEBAWYM7Y24 10
```

<img :src="$withBase('/images/wallet/desktop/get.png')" alt="get">

现在，钱包已经有了10个数字资产了。

<img :src="$withBase('/images/wallet/desktop/wallet2.png')" alt="wallet">
