module.exports = {
    title: 'SDAG文档中心',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            ['/', '首页'],
            ['/try', '体验秒级到账'],
            ['/docker', '２分钟起链'],
            ['/api', 'api'],
            ['/sdk', 'sdk'],
            ['/wallet', '钱包']
        ]
    },
    base: "/",
    markdown: {
        lineNumbers: true
    }
}