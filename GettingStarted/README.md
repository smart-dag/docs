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


### 2 add user to docker group

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

not in docker,in your local, install sdagwallet.js

```
npm isntall sdagwallet.js
```

make a file named mnemonic.js

```
const { default: Wallet } = require("sdagwallet.js");
let wallet = new Wallet();
var mnemonic = wallet.generateMnemonic();
console.log(mnemonic);
```

run it
```
node mnemonic.js
```

return like this:
```
expose permit goat flame resist grab allow faint share bike parrot bleak
```


make a file named alice.js

```
const { default: Wallet } = require("sdagwallet.js");
//import Wallet from 'sdagwallet.js';
let wallet = new Wallet();

const mnemonic = "expose permit goat flame resist grab allow faint share bike parrot bleak";

wallet.configHub("ws://localhost:6615");
wallet.loginWithMnemonic(mnemonic).then(() => {
    var address = wallet.getAddress();
    console.log("address",address);
    wallet.getBalance().then((balance) => {
        console.log("balance",balance);
    });
});

```

run it 
```
node alice.js
```

return like tihs, balance is zero.

```
address BBWCYWYGEYPDKVKATZVZ7MDQQHOE3WQL
balance 0
```

make a file named scott.js and replace mnemonic to "sea absorb guilt regular retire fire invest urge tone peace enroll asthma" (from step 6) 

```
const { default: Wallet } = require("sdagwallet.js");
//import Wallet from 'sdagwallet.js';
let wallet = new Wallet();

const mnemonic = "sea absorb guilt regular retire fire invest urge tone peace enroll asthma";

wallet.configHub("ws://localhost:6615");
wallet.loginWithMnemonic(mnemonic).then(() => {
    var address = wallet.getAddress();
    console.log("address",address);
    wallet.getBalance().then((balance) => {
        console.log("balance",balance);
    });
});

```

run it 

```
node scott.js
```

return like this

```

```

now , make a file named scott-to-alice.js

```

```

run it

new reget balance of alice

```
node alice.js
```

balance is xxx


send token finish


this demo at https://github.com/smart-dag/samples.git


