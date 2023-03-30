// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '郑华的个人网站',
  // 网站标语
  tagline: 'Zheng Hua\' Personal Website',
  // favicon: 'img/zhenghua.ico',

  // Set the production url of your site here
  url: 'https://zhenghua75.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zhenghua75', // Usually your GitHub org/user name.
  projectName: 'zhh-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        //docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/zhenghua75/zhh-website/blob/main/',
        //},
        blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/zhenghua75/zhh-website/blob/main/',
          blogSidebarCount: 10, //'ALL',
          //blogSidebarTitle: '最新帖子',
          // routeBasePath: '/',
          blogTitle: '郑华的网络日志',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/zhenghua-social-card.jpg',
      navbar: {
        title: '郑华的个人网站',
        // logo: {
        //   alt: '郑华的个人网站的Logo',
        //   src: 'img/zhenghua.jpg',
        // },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: '文集一',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog/archive', label: 'Archive', position: 'left'},
          {
            href: 'https://github.com/zhenghua75/zhh-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
         style: 'dark',
        links: [
          {
            //title: 'Blog',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              
            ],
          },
          {
            items: [
              {
                label: 'Archive',
                to: '/blog/archive',
              },
            ],
          },
          {
            //title: '社区',
            items: [
              // {
              //   label:'微博',
              //   href:'https://weibo.com/zhenghua9409',
              // },
              // {
              //   label:'知乎',
              //   href:'https://zhihu.com/people/zhenghua75'
              // },
              // {
              //   label: '今日头条',
              //   href: 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAKtMZdX08NzQat09Zqqu1VC75O1R_tIizkQCz5EM3uQQ',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/zhenghua75/zhh-website',
              },
            ],
          },
          //{
            //title:'更多',
            //items:[
              
              // {
              //   label:'Twitter',
              //   href:'https://twitter.com/zhenghua75'
              // },
              // {
              //   label:'Facebook',
              //   href:'https://www.facebook.com/zhenghua75'
              // },
              // {
              //   label:'Youtube',
              //   href:'https://www.youtube.com/zhenghua75'
              // }
            //],
          //},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 郑华的个人网站. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
