module.exports = {
    title: 'SDAG用户手册',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '开发者文档', link: 'http://sdag.io/docs/developer' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/try', '体验秒级到账'],
            ['different','不同之处'],
            ['/explorer', '区块链浏览器'],
            ['/wallet', '区块链钱包'],
            ['/diy', 'DIY区块链']
        ]
    },
    base: "/docs/guide/",
    markdown: {
        lineNumbers: true
    }
}