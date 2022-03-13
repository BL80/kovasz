// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FriscoEgyreKenyérebb',
  tagline: 'Avagy mi mindenre jó a kovász',
  url: 'https://kovasz.tk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nynfus corporation', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nynfus/Docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/nynfus/Docusaurus/tree/main/',
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
      announcementBar: {
        id: 'support_us',
        content:
          '👍Ha tetszik az oldal, kövesd <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/friscoegyrekenyerebb/">instán</a>',
        backgroundColor: '#887964',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        title: 'FriscoEgyreKenyérebb',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo2.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'sourdough-matrix',
            position: 'left',
            label: 'Kovász',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/nynfus/Docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Receptek',
            items: [
              {
                label: 'Kovász',
                to: '/docs/sourdough-matrix',
              },
            ],
          },
          {
            title: 'Kapcsolat',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/friscoegyrekenyerebb/',
              },
              {
                label: '✉️ küldés',
                href: 'mailto:friscoegyrekenyerebb@gmail.com',
              },
            ],
          },
          {
            title: 'Egyéb',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nynfus/Docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} #friscoegyrekenyerebb, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "hu"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};

module.exports = config;
