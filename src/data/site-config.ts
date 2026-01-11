import avatar from '../assets/images/avatar_1.png';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://www.sarahlturner.co.uk',
    avatar: {
        src: avatar,
        alt: 'A cartoon image of Dr Sarah Turner'
    },
    title: 'Sarah Turner',
    description: "Exploring what happens when people use technology that isn't designed for them",
    // image: {
    //  src: '/hero.png',
    //   alt: 'Dante - Astro.js and Tailwind CSS theme'
    //},
    headerNavLinks: [
        {
            text: 'Research and Engagement',
            href: '/research'
        },
        {
            text: 'Beyond Research',
            href: '/beyond-research'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'Privacy Policy',
            href: '/privacy'
        },

        { text: "RSS", href: "/rss.xml" }

    ],
    socialLinks: [
        {
            text: 'Email',
            href: 'mailto:hello@sarahlturner.co.uk'
        },
        {
            text: 'Google Scholar',
            href: 'https://scholar.google.com/citations?user=LXDgjZcAAAAJ&hl=en'
        },
        {
            text: 'ORCID',
            href: 'https://orcid.org/0000-0003-1246-1528'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sarah-t-47310391/'
        }
    ],
    hero: {
        title: 'Hello and welcome!',
        text: "I'm Dr Sarah Turner, a qualitative researcher based at UCL's Knowledge Lab. \n\n I investigate how people navigate and interact with emerging technologies that weren't designed with them in mind - exploring what keeps them safe, secure, and knowledgeable in their everyday digital lives.\n\n Read more about me or get in touch:",
        //image: {
        //   src: hero           
        //},
        actions: [
            {
                text: 'Research and Engagement',
                href: '/research'
            },
            {
                text: 'Beyond Research',
                href: '/beyond-contact'
            },
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8

};

export default siteConfig;
