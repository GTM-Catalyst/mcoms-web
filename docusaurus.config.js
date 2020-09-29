module.exports = {
  title: 'MCOMS',
  tagline: 'The tagline of my site',
  url: 'https://gtm-catalyst.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/Mcoms_SquareSun_Black.png',
  organizationName: 'GTM-Catalyst', // Usually your GitHub org/user name.
  projectName: 'mcoms-web', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'MCOMS Logo',
        src: 'img/Mcoms_SquareSun_Black.png',
      },
      items: [
       /* {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/',
          activeBasePath: 'docs/opchallengehi',
          label: 'Tutorials',
          position: 'left',
        },        
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
         /* items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],*/
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'),
    {
        blogRouteBasePath: '/blog', // must correspond to the base route path configured for the blog plugin
        docsRouteBasePath: '/docs', // must correspond to the base route path configured for the docs plugin
        indexBlog: true, // whether to index blog pages
        indexDocs: true, // whether to index docs pages
        indexPages: false, // whether to index static pages
        // /404.html is never indexed
        language: "en", // language of your documentation, see next section
        indexBaseUrl: true,
    }],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
