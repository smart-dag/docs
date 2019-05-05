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