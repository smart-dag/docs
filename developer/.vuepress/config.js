module.exports = {
    title: 'SDAG开发者文档',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '官网', link: 'http://sdag.io/' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/docker', 'Docker'],
            ['/api', 'SDAG API'],
            ['/sdk', 'SDAG SDK']
        ]
    },
    base: "/docs/developer/",
    markdown: {
        lineNumbers: true
    }
}