const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
    title: '努力的沧州人',
    description: '努力的沧州人的技术博客',
    // base: '/publicblog/',
    head: [
        [
            'meta',
            { name: 'keywords', content: '前端,vuepress博客,努力的沧州人' },
        ],
        ['meta', { name: '努力的沧州人' }],
        ['link', { rel: 'icon', href: './favicon.ico' }],
    ],
    themeConfig: {
        logo: '/assets/img/hero.png',

        lastUpdated: '更新时间', // string | boolean

        // navbar: false,
        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: '链接', link: 'https://www.vuepress.cn/' },
            // {
            //   text: 'Languages',
            //   items: [
            //     { text: 'Group1', items: [  { text: '主页', link: '/' },
            //     { text: '关于', link: '/about/' }] },
            //     { text: 'Group2', items: [  { text: '主页', link: '/' },
            //     { text: '关于', link: '/about/' }] }
            //   ]
            // }
        ],

        // 路径

        // sidebar: [
        //   '/',
        //   '/page-a',
        //   ['/page-b', 'Explicit link text']
        // ]

        sidebar: [
            '/about/',

            {
                title: '工具', // 必要的
                path: '/AuxiliaryTools/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    '/AuxiliaryTools/vuepress',
                    // '/css/css2',
                    // '/css/css3',
                ],
            },
        ],
    },
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
                return moment(timestamp).format('LLLL')
            },
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            autoCreateIssue: true,
            // 其他的 Vssue 配置
            owner: 'aiwen19950203',
            repo: 'publicblog',
            clientId: '3381967dfe33a93ad9cf',
            clientSecret: '849646589c86af776ebdd7d6cbaea64a4217682e',
        },
    },
}
