**Client 52492 和Hub的交互：
握手前4步，watch请求5、6步，heartbeat 6、7步；**

**1)	Hub发justsaying到client：**

SENDING to 127.0.0.1:52492: ["justsaying",{"body":{"alt":"1","library":"rust-sdag","library_version":"0.1.0","program":"rust-sdag-hub","program_version":"0.1.0","protocol_version":"1.0"},"subject":"version"}]


**2)	Hub发subscribe到client：**

SENDING to 127.0.0.1:52492: ["request",{"command":"subscribe","params":{"last_mci":2,"listen_addr":"127.0.0.1:6615","peer_id":"KJ76Z2EPSJEDRKFMI2LN7ERWWXTEPMWY"},"tag":"0"}]


**3)	Hub收到client的justsaying：**

RECV from 127.0.0.1:52492: ["justsaying",{"body":{"alt":"1","library":"rust-sdag","library_version":"0.1.0","program":"rust-sdag-sdg","program_version":"0.1.0","protocol_version":"1.0"},"subject":"version"}]


**4)	Hub收到client的subscribe回应：**

RECV from 127.0.0.1:52492: ["response",{"response":{"peer_id":"4FLSAXGR4PAGIKJ7IO57ECREBQIKMREE"},"tag":"0"}]


**5)	Hub收到client的watch请求：**

RECV from 127.0.0.1:52492: ["request",{"command":"watch","params":["4FLSAXGR4PAGIKJ7IO57ECREBQIKMREE"],"tag":"0"}]


**6)	Hub将请求结果返回给client：**

SENDING to 127.0.0.1:52374: ["response",{"tag":"0"}]


**7)	Hub收到client的heartbeat：**

RECV from 127.0.0.1:52374: ["request",{"command":"heartbeat","tag":"8"}]


**8)	Hub回应client的heartbeat：**

SENDING to 127.0.0.1:52374: ["response",{"tag":"8"}]
