const path = require('path');
module.exports = {
    title: 'Docker Mate',
    tagline: 'Documentation for Docker Mate',
    url: 'https://docs.docker-mate.dev',
    baseUrl: '/',
    baseUrlIssueBanner: true,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'docker-mate', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.
    themeConfig: {
        announcementBar: {
            id: 'supportus',
            content:
                '⭐️ If you like Docker Mate, give it a star on <a target="_blank" rel="noopener" href="https://github.com/docker-mate/docker-mate">GitHub</a> and help us to develop to next level! ⭐️',
        },
        image: 'img/logo.png',
        navbar: {
            title: 'Docker Mate',
            logo: {
                alt: 'Docker Mate Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'start',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    href: 'https://github.com/docker-mate',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
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
                            to: 'privacy',
                        },
                        {
                            label: 'Imprint',
                            to: 'imprint',
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
            copyright: 'Docker Mate',
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/docker-mate/documentation/edit/main/',
                },
                blog: {
                    path: 'blog',
                    editUrl:
                        'https://github.com/docker-mate/documentation/edit/main/',
                    postsPerPage: 3,
                    feedOptions: {
                        type: 'all',
                        title: 'Docker Mate Blog feed',
                        copyright: `Docker Mate`,
                        language: 'en',
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                }
            },
        ],
    ],
    plugins: [
        require.resolve('docusaurus-lunr-search')
    ],
};
