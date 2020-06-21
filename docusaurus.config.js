module.exports = {
  title: 'Docker Mate',
  tagline: 'Local development made easy',
  url: 'https://docs.docker-mate.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'docker-mate', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docker Mate',
      logo: {
        alt: 'Docker Mate Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/docker-mate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: '/privacy',
            },
            {
              label: 'Imprint',
              href: '/imprint',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/docker-mate',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Docker Mate`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/docker-mate/documentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
