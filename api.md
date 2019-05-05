# SDAG HUB API

::: danger 注意
hub 提供 websocket 供客户端与其连接，但交互时使用的是非标准的 RPC 语法。这意味着你不能使用标准的 RPC 库与 hub 进行交互。尤其是在发送心跳包时，必须注意，SDAG的心跳包必须使用 hub 自定义的消息格式才能维持。
:::

## 消息类型

1. justsaying

>　接到消息后不需要给 hub 任何回复

2. request

> 收到消息后，需要立刻回复 hub 。

3. response

使用如下代码捕获消息：

```js{5}
var hub = "wss://explorer.sdag.io:20003";
var ws = new WebSocket(hub);
ws.onmessage = function (evt) {
    console.log(evt.data);
    var result = JSON.parse(evt.data);
    switch (result[0]) {
        case "justsaying":
            on_justsaying(result[1]);
            break;
        case "request":
            on_request(result[1]);
            break;
        case "response":
            on_response(result[1]);
            break;
        default:
            break;
    }
}
function on_justsaying(result) {
    console.log("on_justsaying", result);
}
function on_request(result) {
    console.log("on_request", result);
    switch (result.command) {
        case "subscribe":
            request_peer_id = [
                "response",
                {
                    "response": {
                        "peer_id": "AJJ4KYJ5NTZVJXY3I4J7N6CZW6QR35WR",
                    },
                    tag: "0"
                }
            ]
            ws.send(JSON.stringify(request_peer_id));
            break;

        default:
            break;
    }
}
function on_response(result) {
    console.log("on_response", result);
}
```

## 连接过程

::: danger 注意
peer_id 为SDAG钱包地址。可以登录网页钱包https://wallet.sdag.io/进行复制。
建立连接成功后，如果客户端没有应答 hub 的心跳包，但会在 10-12 秒后断开。
:::

1. 客户端连接 hub
2. hub 给客户端发一个消息要客户端的 peer_id
3. 客户端给 hub 发送 peer_id

```js
function on_request(result) {
    console.log("on_request", result);
    switch (result.command) {
        case "subscribe":
            var request_peer_id = [
                "response",
                {
                    "response": {
                        "peer_id": "AJJ4KYJ5NTZVJXY3I4J7N6CZW6QR35WR",
                    },
                    tag: "0"
                }
            ]
            ws.send(JSON.stringify(request_peer_id));
            break;

        default:
            break;
    }
}
```

## 回应心跳包

::: danger 注意
如果不回应心跳包，hub 会在 10-20 秒后断开连接。
:::

1. hub 给客户端发送消息要心跳包
2. 客户端给 hub 发送心跳包
3. hub 给客户端发送消息要心跳包
4. 客户端给 hub 发送心跳包
5. hub 给客户端发送消息要心跳包
6. 客户端给 hub 发送心跳包
7. ...

```js
function on_request(result) {
    console.log("on_request", result);
    switch (result.command) {
        case "subscribe":
            var request_peer_id = [
                "response",
                {
                    "response": {
                        "peer_id": "AJJ4KYJ5NTZVJXY3I4J7N6CZW6QR35WR",
                    },
                    tag: "0"
                }
            ]
            console.log("回复peer_id", request_peer_id);
            ws.send(JSON.stringify(request_peer_id));
            break;
        case "heartbeat":
            var request_heartbeat = [
                "response",
                {
                    command: "heartbeat",
                    tag: result.tag
                }
            ]
            console.log("回复心跳包", request_heartbeat);
            ws.send(JSON.stringify(request_heartbeat));
            break;
        default:
            break;
    }
}
```
此时，长连接已经建立完毕。

## 断开重连

在上面的步骤中，客户端可以相应 hub 的心跳包，这时 hub 不会断开与客户端的连接。但如果因为网络原因断开了，需要在断开的回调函数中重新连接。

```js
ws.onclose = function () {
    console.log("连接已关闭...正在重新链接");
    ws = new WebSocket(hub);
};
```

## get balance

该 API 查询某个地址有多少余额。

```js
var get_balance = [
    "request",
    {
        command: "get_balance",
        params: "5YJKYU5NFWEUJAO4M2WNR4O3W5Z62ZYO",
        tag: "0"
    }
]
ws.send(JSON.stringify(get_balance));
```

返回如下数据：

```shell
["response",{"response":{"address":"5YJKYU5NFWEUJAO4M2WNR4O3W5Z62ZYO","balance":0},"tag":"0"}]
```

转成 json 后，框选处为余额。

```json{6}
[
    "response",
    {
        "response":{
            "address":"5YJKYU5NFWEUJAO4M2WNR4O3W5Z62ZYO",
            "balance":0
        },
        "tag":"0"
    }
]
```

::: danger 注意
获得的余额，需要除以1000000（１后面６个０）才能得到单位为SDG的金额。
:::