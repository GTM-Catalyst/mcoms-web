module.exports = {
  title: 'MCOMS',
  tagline: 'The tagline of my site',
  url: 'https://GTM-Catalyst.github.io',
  baseUrl: '/mcoms-web/',
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
        srcDark: 'img/Mcoms_SquareSun_White.png',
      },
      hideOnScroll: true,      
      items: [
        {
          to: '/',
          //activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        /*{
          to: 'tutorial/',
          activeBasePath: 'tutorial',
          label: 'Admin',
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
          //to: "/", // by default, link to active/latest version
          //label: "हिंदी" // by default, show active/latest version label          
        },                
      ],
    },
    announcementBar: {
      id: 'download', // Any value that will identify this message.
      content:
        '<a href="/docusaurus3/img/HindiVersion.pdf" target="_blank">|| पीडीएफ प्रारूप में इस वेबसाइट के हिंदी संस्करण की सामग्री डाउनलोड करें ||</a><a href="/docusaurus3/img/EnglishVersion.pdf" target="_blank"> || Download content of English Version this websites  in PDF format ||</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },      
    footer: {
      style: 'dark',
     /* links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
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
      ],*/
      copyright: `Copyright © ${new Date().getFullYear()} Smart Power India (Powered by The Rockefeller Foundation).`,
    },
  },
  plugins: [
  /*  [require.resolve('@cmfcmf/docusaurus-search-local'), {
      blogRouteBasePath: '/blog', // must correspond to the base route path configured for the blog plugin
      docsRouteBasePath: '/docs', // must correspond to the base route path configured for the docs plugin
      indexBlog: true, // whether to index blog pages
      indexDocs: true, // whether to index docs pages
      indexPages: false, // whether to index static pages
      // /404.html is never indexed
      language: "en" // language of your documentation, see next section
    }]*/
    //require.resolve('docusaurus-lunr-search') 
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
      indexDocs: true, // whether to index docs pages
      docsRouteBasePath: '/docs', // must correspond to the base route path configured for the docs plugin
      indexPages: true, // whether to index static pages
      },
    ],
  ], 
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/', // Set this value to '/'.
          //homePageId: 'welcome',           
          editUrl: '/',
          lastVersion: "current",    
          versions: { 
            current: {
              label: 'हिंदी',
              //path: 'hi',
            },
          'English': {
            label: 'English',
            path: 'en',
            }, 
          },    
        },
/*        tutorial: {
            path: './docs/tutorial',
            sidebarPath: require.resolve('./sidebars.js'),
        },*/
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
