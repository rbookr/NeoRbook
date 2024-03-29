import cppbookSideBar from './cppbook_sidebar'
import appendixSideBar from './appendix_sidebar'
import rbookSideBar from './rbook_sidebar'


//import anchor from 'markdown-it-anchor'
//


const customElements = ['mjx-container'];

export default {

  lang: 'zh-CN',
  title: 'CppBook',
  description: 'CppBook -- online book of C++',
  appearance: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/rbookIcon/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/rbookIcon/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/rbookIcon/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/rbookIcon/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/rbookIcon/favicon.ico"}],
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  lastUpdated:true,

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,

    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#permalinks
    //anchor: {
      //permalink: anchor.permalink.headerLink()
    //},

    // options for markdown-it-toc-done-right
    toc: { level: [1, 2,3] },
    ejsdata: {
        host:'https://cppbook.roj.ac.cn/'
    }
  },


  themeConfig: {
    logo:'/rbookIcon/favicon.ico',
    siteTitle:'cppbook',
    //根据
    siteConfgByRoute: [
      {start:"/",title:'CppBook',logo:'/cppbookIcon/favicon.ico'},
      // {start:"/rbook/",title:'RBook',logo:'/rbookIcon/favicon.ico'},
      // {start:"/appendix/",title:'Appendix',logo:'/rbookIcon/favicon.ico'}
    ],



    editLink: {
      pattern: 'https://github.com/rbookr/RBook/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    toGitLink: {
      pattern: 'https://github.com/rbookr/RBook/:type/:branch/:path',
      text: 'open this on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbookr/RBook' }
    ],

    nav: [
      // { text: 'Rbook', link: '/rbook/' },
      { text: 'CppBook', link: '/' },
      // { text: 'Appendix', link: '/appendix/' }
    ],

    sidebar:  {
      '/' : cppbookSideBar,
        }
    // sidebar: {
    //   '/' : cppbookSideBar,
    //   // '/appendix/' : appendixSideBar,
    //   // '/rbook/' :rbookSideBar 
    //   //{
    //     //text:'竞赛路线',
    //     //collapsible: true,
    //     //collapsed: false,
    //     //items:[
    //       //{ text: '路线', link: '/竞赛路线.md' }
    //     //]
    //   //}
    // }
  }
}
