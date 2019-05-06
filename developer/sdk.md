# sdk

安装
```shell
npm install sdagwallet.js --save
```

使用

```js
import Wallet from 'sdagwallet.js'
var wallet = new Wallet();
wallet.configHub("wss://explorer.sdag.io:20003");
var nemonic = wallet.generateMnemonic();
await wallet.loginWithMnemonic(nemonic);
await wallet.getBalance();
```


#### 自动配置

```javascript
wallet.autoConfigHub("mainnet"); // Using mainnet
wallet.autoConfigHub("testnet"); // Using testnet
```

#### 手动配置
```javascript
wallet.configHub("ws://10.168.3.131:6635");
```

#### 生成助记词

```javascript
wallet.generateMnemonic();
```

#### 使用密码和助记词登陆

```javascript
await wallet.loginWithMnemonic(secret, password);
```

#### 私钥与地址

```javascript
wallet.getAddress();
wallet.getPrivateKey(); // Extened Private Key
wallet.getPublicKey();
```

#### 获取余额

```javascript
await wallet.getBalance();
```

#### 获取交易历史

```javascript
await wallet.getHistory();
```

#### 获取一个Unit

```javascript
await wallet.getUnit('AELe/VgaqoCJekPfVxd8huecW3g7n33ihFw1A3vVVPE=');
```

#### 发送资产

```javascript
await wallet.send({ to: 'E5UR2ISKQWT3HISO55SHQYGYTF5BLWV6', amount: 2, text: 'Hello world' });
```

#### 订阅

```javascript
wallet.onAssetMessage(msg => {});
wallet.watchAddress(addrs, msg => {});
```
