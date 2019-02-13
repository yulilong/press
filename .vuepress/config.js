module.exports = {
    title: '个人文档',
    description: '练习文档',
    base: '/press/',     // 仓库名字是press,用于部署
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },                      // 根路径
          { text: 'bar/one', link: '/bar/one' },
          { text: 'External', link: 'https://google.com' }, // 外部链接
        ],
        sidebar: {
            // /bar/ 一个侧边栏，里面的三个页面共用一个侧边栏
            '/bar/': [
                '',           // ./bar/README.md文件，对应页面上/bar/路径
                'one',        // ./bar/one.md文件，对应页面上/bar/one.html
                'two',        // ./bar/two.md文件，对应页面上/bar/two.html
            ],
            '/page-a/': [
                '',
                'a',
                'b',
            ],
            // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
            '/': [
                // '',
                'home1',
                // 'home2',
                // 'home3',
            ],
        },
        // sidebar: [{
        //         title: '一组题目',
        //         //   collapsable: false,
        //         children: [
        //             '/', '/home1', '/home2'
        //         ]
        //     },
        //     {
        //         title: '二组题目',
        //         children: [
        //             '/bar/one',
        //             '/bar/',
        //             '/bar/two',
        //         ]
        //     }
        // ],
      }
  }