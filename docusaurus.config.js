// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '郑华的个人网站',
  tagline: 'Zheng Hua\' Personal Website',
  favicon: 'img/zhenghua.ico',

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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zhenghua75/zhh-website/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zhenghua75/zhh-website/blob/main/',
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
      image: 'img/zhenghua-social-card.jpg',
      navbar: {
        title: '郑华的个人网站',
        logo: {
          alt: '郑华的个人网站的Logo',
          src: 'img/zhenghua.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文集一',
          },
          {to: '/blog', label: '日志', position: 'left'},
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
            title: '文集',
            items: [
              {
                label: '文集一',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/zhenghua75',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '日志',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zhenghua75/zhh-website',
              },
            ],
          },
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
