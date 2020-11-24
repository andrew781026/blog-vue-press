module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: 'Js', link: '/pages/8143cc480faf9a11/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
      {text: 'Vue', link: '/pages/208d23/'},
    ]
  },
  {
    text: '頁面',
    link: '/ui/',
    items: [
      {text: 'HTML', link: '/pages/8309a5b876fc95e3/'},
      {text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
    ]
  },
  {text: '關於我', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '網站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '資源', link: '/pages/eee83a9211a70f9d/'},
      {text: '影片素材', link: '/pages/eee83a9211a70f05/'},
      {text: 'Vue資源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分類', link: '/categories/'},
      {text: '標籤', link: '/tags/'},
      {text: '歸檔', link: '/archives/'},
    ]
  }
]
