# 体验秒级到账

## 什么是秒级到账？

秒级到账用来描述转账的速度。假设有两个用户，Ａ是顾客，Ｂ是店家。Ａ要买一根冰棍，需要给店家Ｂ转账。顾客Ａ转账后，１－２秒内，店家Ｂ就能收到这笔钱。

## 秒级到账的意义

秒级到账属于即时支付，用于需要即时反馈的商业交互场景，如新零售和共享经济。

## 体验步骤

1. 打开　[http://sdag.io/demo/notify/index.html](http://sdag.io/demo/notify/index.html)　页面。

> 页面打开后，会自动创建一个钱包的收款地址，每个浏览器的地址都是唯一的。默认地址的金额是０。

<img :src="$withBase('/images/try/notify.png')" alt="notify">

2. 点击“猛击此处打开水龙头”

> 此时，就打开了水龙头页面，并且自动填写了收款地址。

<img :src="$withBase('/images/try/faucet.png')" alt="faucet">

3. 点击"Get 10.0000SDG"按钮。

> 此时，提示转账成功。水龙头会向该地址转入10个SDG（演示用的货币符号）

<img :src="$withBase('/images/try/txok.png')" alt="faucet">

4. 切换到第一次打开的页面

> 上面已经有了转账成功的通知信息。

<img :src="$withBase('/images/try/ok.png')" alt="ok">

## 后续思考：秒级到账能做什么？

* 新零售
* 共享经济
