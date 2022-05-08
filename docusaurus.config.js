const path = require('path');
module.exports = {
    title: 'Docker Mate',
    tagline: 'Documentation for Docker Mate',
    organizationName: 'docker-mate', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.
    baseUrl: '/',
    baseUrlIssueBanner: true,
    url: 'https://docker-mate.dev',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    themeConfig: {
        liveCodeBlock: {
            playgroundPosition: 'bottom',
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        // announcementBar: {
        //     id: 'supportus',
        //     content:
        //         '⭐️ If you like Docker Mate, give it a star on <a target="_blank" rel="noopener" href="https://github.com/docker-mate/docker-mate">GitHub</a> and help us to develop to next level! ⭐️',
        // },
        image: 'img/logo.png',
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'Docker Mate',
            logo: {
                alt: 'Docker Mate Logo',
                src: 'img/logo.svg',
                srcDark: 'img/logo.svg',
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
                    title: 'Info',
                    items: [
                        {
                            label: 'Get Started',
                            to: 'docs/start',
                        },
                        {
                            label: 'Blog',
                            to: 'blog',
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
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Matrix Chat/Support',
                            href: 'https://matrix.to/#docker-mate:matrix.org',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/DockerMate',
                        },
                    ],
                },
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
            ],
            logo: {
                alt: 'Docker Mate Logo',
                src: 'img/logo.svg',
                href: "/",
            },
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/docker-mate/documentation/edit/main/',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
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
            },
        ],
    ],
    plugins: [
        require.resolve('docusaurus-lunr-search')
    ],
};
