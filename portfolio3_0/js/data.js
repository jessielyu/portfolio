/**
 * Created by jessielyu on 7/10/18.
 */
const thumbnails = {
    techExchange: {
        name: 'TechExchange Website Design',
        image: 'image/portfolio/thumbnail/techExchange.png',
        href: '#techExchange'
    },
    dmvRedesign: {
        name: 'DMV Schedule System Redesign',
        image: 'image/portfolio/thumbnail/dmvRedesign.png',
        href: '#dmvRedesign'
    },
    laishuati: {
        name: 'Laishuati.com',
        image: 'image/portfolio/thumbnail/laishuati.png',
        href: '#laishuati'
    },
    dalian: {
        name: 'Dalian News IOS App',
        image: 'image/portfolio/thumbnail/dalian.png',
        href: '#dalian'
    },
    shoppingLive: {
        name: 'Live Shopping IOS App',
        image: 'image/portfolio/thumbnail/shoppingLive.png',
        href: '#shoppingLive'
    }
};

const thumbnails_work = {
    vision: {
        name: 'Yahoo! Vision Tool',
        image: 'image/portfolio/thumbnail/vision.png',
        href: '#vision'
    },
    wizard: {
        name: 'Yahoo! Triggering Tool',
        image: 'image/portfolio/thumbnail/wizard.png',
        href: '#wizard'
    },
    quicket: {
        name: 'Quicket Solutions, Inc.',
        image: 'image/portfolio/thumbnail/quicket.png',
        href: '#quicket'
    }
};

const modals = [
    {
        name: 'dalian',
        header: {
            title: 'DALIAN',
            date: 'June.2017 - August.2017',
            txt: 'User-generated news application'
        },
        sections: [
            {
                title: 'The Idea',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Dalian App is a news digest application on IOS mobile devices, which features user-generated news content. The purpose of it is to change the way people receive information.</p>' +
                        '<p>Normally people digest news passively -- the content is pre-created for them by editors of TVs, websites, mobile apps, and newspapers. What if users could create the news themselves?</p>' +
                        '<p>Dalian was designed based on this idea. It’s a news sharing platform that all the content is coming from the users themselves. Users could view other users’ posts, and they could react to those content by comments or thumb-up/down. Another distinguishable feature of Dalian is that users could debate each other’s news, by creating a new post that cites the original one and explain the reason for debating.</p>' +
                        '<p>Our purpose is through this user-generated news platform, users could freely express their ideas and thoughts. We also hope everyone could develop a critical mind about the information they receive every day, and learn to filter out fake ones.'
                    }
                ]
            },
            {
                title: 'The Team',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center img-smmd padding-sm',
                            src: 'image/portfolio/dalianApp/Jessie_profile.jpg',
                            alt: 'Jessie'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center img-smmd padding-sm',
                            src: 'image/portfolio/dalianApp/Qi_profile.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-6 center-align',
                        txt: '<b>Jessie Lyu - Designer</b>'
                    },
                    {
                        type: 'txt',
                        class: 'col-6 center-align',
                        txt: '<b>Qiyuan Liu - Engineer</b>'
                    }
                ]
            },
            {
                title: 'Competitive Analysis',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/competitive analysis.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Analysis'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'There is no comprehensive platform currently in China that features user-generated news. Furthermore, as we could see, content from the few major news agencies are either polished or filtered, so the accuracy of that news is highly doubtable. However, none of the platforms features user critique on fake information.'
                    }
                ]
            },
            {
                title: 'Brainstorming',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/wireframe.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The application we will develop should:'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '1. Be mobile-based, since most people like to read news on-the-go, or during their spare time.</p>' +
                        '<p>2. Features on user-generated content. The application itself will not produce any news for users.</p>' +
                        '<p>3. Features on users critique -- the idea we want to promote is to allow users debating and reputing on each other.  Since much of the news we receive is fake, we want to facilitate users critical thinking skills, and help them filter our misleading news. This function should be easily accessed and distinguishable.'
                    }
                ]
            },
            {
                title: 'Low-fidelity Sketches',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/uisketch.jpg',
                            alt: 'Qi'
                        }
                    }
                ]
            },
            {
                title: 'Prototype Iterations',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Version 1.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version1.1.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version1.2.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Version 2.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version2.1.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version2.2.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Version 3.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version3.1.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version3.2.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Version 4.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version4.1.jpg',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/version4.2.jpg',
                            alt: 'Qi'
                        }
                    }
                ]
            },
            {
                title: 'Final Deliverables',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-md',
                            src: 'image/portfolio/dalianApp/final.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Selected UI'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'User on-board flow'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - welcome.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - login.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - sign up email.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - sign up user info (birth&profile pic).png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'News & posts flow'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - homepage.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - post page.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - create post photo.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - comment.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'User profile & settings'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - user main.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - user edit info.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - user post history.png',
                            alt: 'Qi'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/dalianApp/iPhone 7 - user settings.png',
                            alt: 'Qi'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'shoppingLive',
        header: {
            title: 'Shopping Live',
            date: 'April.2017 - June.2017',
            txt: 'An immersive online shopping experience design'
        },
        sections: [
            {
                title: 'The Problem',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'People\'s shopping habits have undergone tremendous changes because of globalization and hi-tech. Shopping over the world nowadays is easy for customers through e-commerce.</p>' +
                        '<p>“Freelance retail consultants” arise with the popularity of e-commerce. For some countries, such as China, customers don’t have accesses to all e-commerce sites overseas. So “freelance retail consultants” work as the middleman for such customers to get their products. Most of “freelance retail consultants” are people in another country who part-time in helping others purchasing products. They always advertise themselves through social media or bbs websites. Mostly they will provide customized services for customers -- giving advise to the customers’ buying choices through conversations, images, and video clips.</p>' +
                        '<p>The problem of this business model is obvious -- users could only get information about a product through arbitrary methods. Descriptions, images and video clips from a “freelance retail consultant”’s view are very biased. Furthermore, since most “freelance retail consultants” are part-time in shopping for others, they are not professional buyers and have no guarantees on either product price or product quality. So It’s hard to build trust between customers and buyers.'
                    }
                ]
            },
            {
                title: 'The Idea',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/shoppingApp/brainstorming.jpg',
                            alt: 'Jessie'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The idea of LiveShopping is to build a trustworthy platform for “freelance retail consultants” and customers. The major feature is shopping with live streaming -- customers could actually “watch” how their buyers purchase the products. By creating an immersive shopping experience for customers, customers could have a more comprehensive view of the product itself, as well as build trust for the buyers.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Target users'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The target users of the application are customers.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Two major functions'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Customers should be able to see on-going and upcoming events for the buyers (freelance retail consultants). Furthermore, the application needs to support placing orders either within the live-streaming event or beforehand.'
                    }
                ]
            },
            {
                title: 'Page Design',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Low-fidelity prototypes'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/shoppingApp/uisketch.jpg',
                            alt: 'Jessie'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'High-fidelity prototypes'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/shoppingApp/wireframe.png',
                            alt: 'Jessie'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Homepage'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'On the homepage, the first thing users should see is the on-going live (with a link to enter). Users should be able to see list upcoming shopping events of buyers.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Upcoming event page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Include key information about the event -- brand, time, date, and shopping list (available products for the event).'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Product page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Include information about a product: properties (color, size, etc.), price, and “place an order” button.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Live streaming page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'On the live page, users should be able to see a collapsable dialogue about the current “product” been shopped. Users should be able to place an order from the live page.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Shopping cart and checkout pages'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Similar to other e-commerce applications, these pages are standard shopping cart and checkout pages, including functions like view/update shopping cart, fill billing/shipping information and order confirmation.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Final deliverables'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/shoppingApp/img1.gif',
                            alt: 'Jessie'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/shoppingApp/img3.gif',
                            alt: 'Jessie'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/shoppingApp/img4.gif',
                            alt: 'Jessie'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/shoppingApp/img6.gif',
                            alt: 'Jessie'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'techExchange',
        header: {
            title: 'TechExchange website design',
            date: 'October.2018',
            txt: 'Non-profit Website Redesign'
        },
        sections: [
            {
                title: 'Our Team',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/techExchange/team.jpg',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Our Client',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center shadow padding-sm',
                            src: 'image/portfolio/techExchange/client.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Mapping the user flow',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center shadow padding-sm',
                            src: 'image/portfolio/techExchange/userflow.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/userflow2.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Our goal',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center shadow padding-sm',
                            src: 'image/portfolio/techExchange/goal.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/goal2.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Personas',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center shadow padding-sm',
                            src: 'image/portfolio/techExchange/persona1.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/persona2.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/persona3.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Our process',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center shadow padding-sm',
                            src: 'image/portfolio/techExchange/process.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Final designs',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center shadow padding-sm',
                            src: 'image/portfolio/techExchange/home.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/home2.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/home3.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center shadow padding-sm',
                            src: 'image/portfolio/techExchange/impact.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/impact2.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/impact3.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/about.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/about1.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/donate.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/donate2.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/donate3.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/volunteer.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/volunteer1.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/volunteer2.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Appendix',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/asset.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/asset2.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/asset3.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            },
            {
                title: 'Conclusion',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-cente shadow padding-sm',
                            src: 'image/portfolio/techExchange/conclusion.png',
                            alt: 'intro_1'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'laishuati',
        header: {
            title: 'laishuati',
            date: 'Jan.2018 - Mar.2018',
            txt: 'Group Coding Application Design'
        },
        sections: [
            {
                title: 'Overview',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '来刷题(laishuati.com) is a collaborative interview preparation platform, which provides a series of interview preparation courses. The platform motivates users to keep practicing by group participation and bonus system.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-md',
                            src: 'image/portfolio/laishuati/intro.png',
                            alt: 'Intro'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'My role'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'UX Designer'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Problems'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'With the trending of computer technology, Software Engineer has become one of the most popular jobs in the world. Nowadays a typical software engineer interview will include coding and algorithm questions. In order to prepare for a technical interview, candidates always need to practice some common questions beforehand.</p>' +
                        '<p>However, colleges normally don’t provide courses to formally train students about dealing with interview questions, and interview questions are fundamentally different from school exam questions. So candidates need other resources to help them prepare the interview.</p>' +
                        '<p>In addition, interview questions are very different from software engineers’ daily job. So even for experienced software engineers who want to change their career, they still need to dedicate time practicing interview questions, though they might rarely use techniques they used in solving interview questions.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Competitive analysis'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'People need a centralized and comprehensive resource to help them study interview questions. Currently, there are few ways to prepare a technical interview, such as books, Bootcamp, online coding judgment platform, etc. I analyze these methods according to cost, time, motivation, engagement, resources, etc.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center padding-md img-lg',
                            src: 'image/portfolio/laishuati/competitive_analysis.png',
                            alt: 'Intro'
                        }
                    }
                ]
            },
            {
                title: 'Research',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Persona'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-md',
                            src: 'image/portfolio/laishuati/persona.png',
                            alt: 'Intro'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Storyboard'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-md',
                            src: 'image/portfolio/laishuati/storyboard.png',
                            alt: 'Intro'
                        }
                    }
                ]
            },
            {
                title: 'Design',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Page flow'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-md',
                            src: 'image/portfolio/laishuati/user_flow.png',
                            alt: 'Intro'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Selected UI'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Homepage'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Users could view general intro about the website, courses info, etc.<br>' +
                        'Users need to login to get access to Group page.'
                    },
                    {
                        type: 'txt',
                        class: 'col-3',
                        txt: ''
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/HomePage.png',
                            alt: 'HomePage'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-3',
                        txt: ''
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Group page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Users could view the list of all groups.<br>' +
                        'For each group\’s card, information about name, creator, the number of people, required deposit amount, the start date will be displayed.<br>' +
                        'Users could also search group by difficulty level, the number of people, time zone or start date.</p>' +
                        '<p><b>Create a group</b><br>' +
                        'The user needs to select difficulty level<br>' +
                        'Input name, intro and a group picture<br>' +
                        'Select the start date, time zone, number of people and required deposit money'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/GroupPage.png',
                            alt: 'GroupPage'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/CreateGroupPage.png',
                            alt: 'GroupPage'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Problem page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The major part of problem page will be a code edit platform which also supports online compile and run.<br>' +
                        'Information about the group will be on a separate tab.<br>' +
                        'At the bottom, there will be a online chatting dialog.<br>' +
                        'Upon complete the problem, there will be a congratulation screen.'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/ProblemPage.png',
                            alt: 'ProblemPage'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/ProblemPage-2.png',
                            alt: 'ProblemPage'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/ProblemPage-3.png',
                            alt: 'ProblemPage'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/ProblemPage-4.png',
                            alt: 'ProblemPage'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'User page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'User page is used to show information of the user.<br>' +
                        'There are three tabs: “today’s progress”, “coding history”, and “balance”<br>' +
                        'Users could add money to their account, or extract money from their account.<br>' +
                        'On the header, it will show the user’s overall progress.'
                    },
                    {
                        type: 'txt',
                        class: 'col-3',
                        txt: ''
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/UserPage.png',
                            alt: 'UserPage'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-3',
                        txt: ''
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/UserPage-2.png',
                            alt: 'UserPage'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center padding-sm',
                            src: 'image/portfolio/laishuati/ProblemPage-3.png',
                            alt: 'UserPage'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'dmvRedesign',
        header: {
            title: 'DMV Redesign',
            date: 'September.2018',
            txt: 'Redesign Project',
            header_img: '<div id="dmv_slide"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSFgnOTsZR7_-StUuZ1vqI75F2XLD81nzQ_HJGb2Lk7qiGNgnsPLF-wHsA0FOfD2gKrFKVEUMaUXJR4/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/intro_1.png',
                            alt: 'intro_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/intro_2.png',
                            alt: 'intro_2'
                        }
                    }
                ]
            },
            {
                title: 'Task Analysis',
                data: [
                    {
                        type: 'txt',
                        class: 'col-3'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/task_analysis.png',
                            alt: 'task_analysis'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-3'
                    }
                ]
            },
            {
                title: 'Brainstorming Sketch',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/brainstorming.png',
                            alt: 'brainstorming'
                        }
                    }
                ]
            },
            {
                title: 'Paper Prototype',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/prototype_1.png',
                            alt: 'prototype_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/prototype_2.png',
                            alt: 'prototype_2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/prototype_3.png',
                            alt: 'prototype_3'
                        }
                    }
                ]
            },
            {
                title: 'User Testing',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/user_testing.png',
                            alt: 'user_testing'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/critique.png',
                            alt: 'critique'
                        }
                    }
                ]
            },
            {
                title: 'Mockups',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_1.png',
                            alt: 'mockup_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_2.png',
                            alt: 'mockup_2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_3.png',
                            alt: 'mockup_3'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_4.png',
                            alt: 'mockup_4'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_5.png',
                            alt: 'mockup_5'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_6.png',
                            alt: 'mockup_6'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_7.png',
                            alt: 'mockup_7'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/mockup_8.png',
                            alt: 'mockup_8'
                        }
                    }
                ]
            },
            {
                title: 'Interactive prototype',
                data: [
                    {
                        type: 'customized',
                        class: 'col-12',
                        customized_class: 'center_block',
                        customized_tag: '<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWy9pp5Npb8HyFC0tCZuGViu3%2FDMV_Appt.Redesign%3Fnode-id%3D0%253A2" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        name: 'vision',
        header: {
            title: 'Vision Tool',
            date: 'June.2016 - July.2018',
            txt: 'Dat Visualization Design and Development',
            header_img: '<img src="image/portfolio/visionTool/header_img.png" class="header_img">'
        },
        sections: [
            {
                title: 'Overview',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Vision tool is an internal debugging tool built for Yahoo search system. I designed and implemented this tool in early 2017, while I was a full-time software engineer in Yahoo. The whole project lasted about three months(1 quarter).'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'My roles'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'As an engineer working in the Search team, I realized that it’s urgent for us to have a easy-to-use and comprehensive debugging tool. In late 2017 I proposed to develop a universal search debugging tool for Yahoo employees working on Search system.</p>' +
                        '<p>In 2018 the project was initiated and was included in the Search team’s Q1 goals. I was the person who led this project. During the development of Vision Tool, I worked as both the <b>designer</b> and the <b>engineer</b>. I coordinated with people across the whole search team and rapidly shipped a product in 3 months. '
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'The process'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Identifying problems → interviewing users → designing interfaces → implementing → launching'
                    }
                ]
            },
            {
                title: 'Identify problems',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Challenges'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'In early 2017, we transferred all the traffic of Yahoo Search from the old platform to the new platform. Over <b>100 Yahoo employees</b> were contributing to the system with <b>various backgrounds</b>.</p>' +
                        'By the end of 2017, the new search system had provided search services for over 50 countries over the world and millions of users. Many problems emerged as well.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-md',
                            src: 'image/portfolio/visionTool/old_data.png',
                            alt: 'Old Data'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'However, the debugging process is very inefficient for Yahoo! System. Some commonly used debugging methods like IDE built-in debugging portal, browser inspector, system log...all had major drawbacks. Debugging had become the most painful process of search system developing.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center padding-md',
                            src: 'image/portfolio/visionTool/current_methods.png',
                            alt: 'layout'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Purposes'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'There are three major purposes of Vision Tool.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-md',
                            src: 'image/portfolio/visionTool/goals.png',
                            alt: 'Goals'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Success Matrix'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-md',
                            src: 'image/portfolio/visionTool/success_matrix.png',
                            alt: 'Old Data'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Target users'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Everyone Yahoo employee in Search team who needs to debug the system, including UI designer, content editors, system engineers, and product managers.'
                    }
                ]
            },
            {
                title: 'Interview users',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I interviewed a bunch of employees in the Yahoo search team, including engineers, designers, content editors, and product managers. Debugging needs and expectations varied from user to user, depending on his/her position, duties, and technical backgrounds. Based on user interview result, I constructed two user personas:'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Primary users: software engineers'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center padding-sm',
                            src: 'image/portfolio/visionTool/persona_1.png',
                            alt: 'layout'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Secondary users: content editors'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center padding-sm',
                            src: 'image/portfolio/visionTool/persona_2.png',
                            alt: 'layout'
                        }
                    }
                ]
            },
            {
                title: 'Design Interfaces',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Page layout & theme colors'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I’d decided to divide information into groups according to their functionalities and target users. Since each group would have various type of data, I decided to render them as different panels. An individual panel had its own data visualization mechanism.</p>' +
                        '<p>As the designer, I intended to make the UI as simple as possible, but still be able to provide the necessary functions for user needs. So I decided to have three major components:'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center padding-sm',
                            src: 'image/portfolio/visionTool/layout.png',
                            alt: 'layout'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'As for theme color, I thought it should convey a sign of calmness and serenity, helped to ease the debugging process(which in nature should be anxious). So I chose ocean blue, black and gray.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-sm img-center padding-sm',
                            src: 'image/portfolio/visionTool/color.png',
                            alt: 'theme color'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Data visualization'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I designed three types of data visualization, based on the purpose of debugging. All visualization types had distinctive advantages. Even though each of them also had drawbacks, but those drawbacks could be compensated by other data visualization methods.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'JSON collapsible list view'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/json_format.png',
                            alt: 'JSON collapsible list view'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Table view'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/table_format.png',
                            alt: 'table format'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Graph view'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/graph_format.png',
                            alt: 'graph format'
                        }
                    }
                ]
            },
            {
                title: 'Implementation',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The whole tool was web-based. I programmed everything using HTML5, CSS3, JavaScript(with JQuery and Handlebar.js).</p>' +
                        '<p>For data visualizations, I used: Canvas.js, VIS.js, HighChart.js, and D3.js.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Selected UI'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'In the header section, I put the icon and search query, so users could easily find the query information. And for the menu, I appended a toggle selection for each panel, so users could turn off debug information they don’t need to reduce data loading time.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'API Page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'On the API page, there will be query information and header information. I also added a query/header update function for users to easily update those data.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/api.png',
                            alt: 'Vision API'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Module Page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'For individual modules, I used table view format. I used eye-catching colors to illustrate system status intuitively.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/module_table.png',
                            alt: 'Module Table'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Method Latency Page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I chose bar-chart to show the overall time consumption of methods since bar-chart will be easy for comparison between each other. With units and interval information on the side, users could also know the general performance of methods.</p>' +
                        '<p>Users could also hover over above each bar to view more information.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/latency.png',
                            alt: 'Latency'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Search Flow Page'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The flow chart was used for showing overall system flow. I choose different colors to indicate active/inactive flows. Users could highlight an individual node to view its relationships with other nodes.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/flow.png',
                            alt: 'Flow'
                        }
                    }
                ]
            },
            {
                title: 'Launch',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The development process of Vision Tool was iterative. I quickly launched the initial version and kept refining designs based on user feedback.</p>' +
                        '<p>In the end, I was able to promote the tool to the whole search team and completed a major Q1 goal for the search team.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Feedback'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center padding-md',
                            src: 'image/portfolio/visionTool/comments.png',
                            alt: 'Comments'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Reflection'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'In this project, I went to through a <b>complete product development cycle</b> -- ideation, research, design, development, and launch. For the first time, I was the only person responsible for an important project.<p>' +
                        '<p>In this project, I had worked on many aspects of product development -- management, design, coding -- and took different “roles” and duties. One major takeaway I had was <b>designing from an engineer’s perspective, while still addressing user needs.</b></p>' +
                        '<p>This was the first design-oriented project I had done as an engineer, and also the shifting point of my career. From this project, I <b>discovered my huge passion for solving user problems</b> and finally had decided to go back to school and study product design.'
                    }
                ]
            }
        ]
    },
    {
        name: 'wizard',
        header: {
            title: 'Triggering Tool for Yahoo Search',
            date: 'June.2016 - July.2018',
            txt: 'Yahoo Internal Tool Development'
        },
        sections: [
            {
                title: 'Overview',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Yahoo triggering tool is used for content editors to update the search result. In the Yahoo search system, a user query will trigger a collection of backend data sources based on predefined rules, and the returned data sources will be filtered again based on selected criteria. The triggering tool is used for editors to set triggering rules and data filters.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Challenges'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The old triggering tool was built for the old Yahoo Search system. The system was replaced in late 2016 and early 2017, so we also needed to build a new triggering tool for the new search system. Before the system was built, editors needed to directly modify the configuration code to update the layout, which required extra effort and time.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Goals'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Build a tool to streamline the editing process and increase editors’ working efficiency.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Target user'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Yahoo Search Editors and Yahoo Search Engineers'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'My role'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'UX researcher | UX designer | Frontend developer'
                    }
                ]
            },
            {
                title: 'User Interview',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Contextual Inquiry'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/wizardTool/contextual inquiry.png',
                            alt: 'Contextual Inquiry'
                        }
                    }
                ]
            },
            {
                title: 'Flow',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Data Flow'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-mdlg padding-sm',
                            src: 'image/portfolio/wizardTool/data flow.png',
                            alt: 'Data Flow'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Page Flow'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-mdlg padding-sm',
                            src: 'image/portfolio/wizardTool/page flow.png',
                            alt: 'Page Flow'
                        }
                    }
                ]
            },
            {
                title: 'Visual Design',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Constraint'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'One constraint I had when designing the triggering tool is this tool need to be compatible with the general configuration tool for search layout. The triggering tool needed to be in harmony with the configuration tool, in terms of color and layout.</p>' +
                        '<p>Another constraint I had is with the engineers (I’m one of the engineers as well). The triggering tool was going to share the same frontend framework with the configuration tool, so I needed to consider the limits of that framework when I designed the UI. Furthermore, I also needed to consider reusability of some components to save the effort of engineers.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Theme colors - comply with other already existing tools'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The theme color is: green, white, blue and black, which I carefully picked from the existing configuration tool and the old triggering tool. I believe these colors convey the sense of serenity and calmness.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-sm padding-sm',
                            src: 'image/portfolio/wizardTool/theme.png',
                            alt: 'Theme Color'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Form design - reusable components + new components'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Since the engineering team (including myself) wished to reuse some UI component that already been built for other tools. I tried my best to design the UI that embed existing components as many as possible, without affecting its usability.</p>' +
                        '<p>Another benefit of reusing some UI components is that it could increase the efficiency of usage since most users are already familiar with the existing UI components. '
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'A more user-friendly form structure'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'When designing the for structure, I considered the most common user flow to organize the form in a reasonable and natural way. The purpose of this to prevent users from scrolling up and down on the page to fill out the information.'
                    }
                ]
            },
            {
                title: 'Deliverable',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Overview pages'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/DomainView Retina.png',
                            alt: 'Category view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/UseCaseView Retina.png',
                            alt: 'Rule view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/RuleView Retina.png',
                            alt: 'Filter view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/DisplayConflictsView Retina.png',
                            alt: 'Filter view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/DispatchConflictsView Retina.png',
                            alt: 'Filter view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/Publisher Retina.png',
                            alt: 'Filter view'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Form pages'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/CreateDomain Retina.png',
                            alt: 'Category view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/CreateUC Retina.png',
                            alt: 'Rule view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/CreateRule Retina.png',
                            alt: 'Filter view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/CreateDisplayConflicts Retina.png',
                            alt: 'Filter view'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center span padding-sm',
                            src: 'image/portfolio/wizardTool/CreatePublisher Retina.png',
                            alt: 'Filter view'
                        }
                    }
                ]
            },
            {
                title: 'Usability Test',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I presented the design to our content editors, and ask one of them to perform a usability test.</p>' +
                        '<p>I asked Tracy, who has no coding background, to perform a complete chain of triggering configuration. The purpose of this test was to test the usability of interaction design, especially for non-tech users.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '<b>Testee: Tracy Lee, Senior Content Analysis Engineer</b></p>' +
                        '<p><b>Task: Create a complete chain of configuration -- triggering rule and triggering filter</b>'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Result'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Problems (based on heuristics):'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '<b>Flexibility and Efficiency of use</b>: When she tried to search for the existing configs, she found its hard for her to search by the exact name (cause she didn’t remember). In many cases, she just wanted to search by attributes but the system didn’t support attribute search function.</p>' +
                        '<p><b>Error prevention</b>: A configuration needed to be created under a category. But the system didn’t have any error prevention mechanism so the user accidentally created a configuration without assigning the category. Then she found she could never successfully save the configuration and needed to redo everything again with proper procedures.</p>' +
                        '<p><b>Help and documentation</b>: Even though Tracy didn’t have any problems navigating and understanding terms and forms, she pointed out that for first-time users the onboard processes could be troublesome since there were no tutorials and help/tips for them.</p>' +
                        '<p><b>Match between system and the real world</b>: She also mentioned that the terminology choices for the tool were not intuitive, ie. “domain”meant ”category”, and “use case” meat “rule” while “rule” actually meant “filter”. She felt this is really confusing. However, those terms were defined in the search system and we want to make the tool and the system consistent.'
                    }
                ]
            },
            {
                title: 'Impact & Thoughts',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The tool has been used cross-teams, by developers from US, Taiwan, Hong Kong, and Europe. The tool has reduced the search triggering configuration creation and modifying time by at least half. Most of the user feedback was positive, saying that the flow was intuitive and easy to manipulate.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Future thoughts'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Even though the tool has made the work of search developers much faster and easier, I still found some potential areas of development for this tool:</p>' +
                        '<p><b>Training and tutorial</b>: For first-time users, especially new hires, the tool is hard to learn and command even with help and tips. They normally spent more than 3 days to get familiar with the tool. A future to-do might be a tutorial for new users.</p>' +
                        '<p><b>Minimize the functionality and information</b>: since the tool was built to follow the layout and design of another configuration tool, there are a lot of redundant information and functionalities. A future to-do could be to minimize the design and information to prevent information overload.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Retrospect'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'From this project, I greatly developed my skills of user study through user interviews, contextual inquiries, and user testings. In the end, I was able to interpret and analyze the collected interview result and adjust design decisions. This is also a major tool for search product which will be used by many developers, so I could make a huge impact on our team through this project.</p>' +
                        '<p>One takeaway I got was balancing the requirements from users and engineers. In this project, I worked closely with engineers (as I was also one of them) and I found out sometimes I designed more for engineers rather than users. As I kept thinking about reducing engineers’ workload and increasing development easiness, I sometimes forgot about the real user needs. In my future career, I need to consider both stakeholders’ needs and design the best solution to balance their requirements.'
                    }
                ]
            }
        ]
    },
    {
        name: 'quicket',
        header: {
            title: 'Quicket Solutions',
            date: 'Sep.2015 - June.2016',
            txt: 'Application Design for Police Department',
            header_img: '<div id="youtube_embedded_video"><div onclick="this.nextElementSibling.style.display=\'block\'; this.style.display=\'none\'"><img src="image/portfolio/quicket/intro.png" style="cursor:pointer" /></div><div style="display:none"><iframe width="800" height="450" frameborder="0" style="margin-bottom: 100px" src="https://www.youtube.com/embed/zFK0OadY21Q?autoplay=1&rel=0&showinfo=0"></iframe></div></div>'
        },
        sections: [
            {
                title: 'Overview',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Quicket Solutions, Inc. is a startup company building cloud based software for government workloads. Quicket solutions provides a unified cloud-based platform for agency, and is accessible everywhere from all kinds of devices. </p>' +
                        '<p>One service Quicket Solutions provides is e-ticket system for police department. The service provides a comprehensive and unified tickets storage platform where officers could update, add, and retrieve tickets from either computers or mobile devices. This system could significantly reduce officer’s workload by converting traditional hand-written tickets to cloud-based e-tickets. </p>' +
                        '<p>In 2015, Quicket Solutions won the finalist of Amazon\'s "City on the Cloud" award.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Challenges'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'In many states of the United States, police officers are using hand-written method to assign traffic violence tickets, and manually input ticket information to department system after returning offices. This process was not very efficient and synchronous, with multiple steps to complete one task. Introducing human management of tickets system could always increase error occurrences, ie. mistyping a person’s name without error checking, or searching for a specific case from chronological-ordered, paper-based database.</p>' +
                        '<p>There are lots of troubles of using hand-written ticket issuing method, and police officers need a more efficient way to store all the records and keep information in a unified format.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Goals'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '&middot Build a comprehensive cloud tickets platform which keeps all information in one place.</p>' +
                        '<p>&middot Transform ticket issuing process from paper based to electronic based.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/quicket/flow.png',
                            alt: 'System Flow'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'My role'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '<b>Service</b>: Ticket UI for Tablet Devices </p>' +
                        '<p><b>Role</b>: User Researcher | Information Architecture | UX Designer | Full-stack Engineer'
                    }
                ]
            },
            {
                title: 'Research',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Persona'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-mdlg padding-sm',
                            src: 'image/portfolio/quicket/persona.png',
                            alt: 'Persona'
                        }
                    }
                ]
            },
            {
                title: 'Design Iterations',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Initial Design'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/quicket/old_design.jpg',
                            alt: 'Old Design'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'User Testing'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Critiques from our users:'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/quicket/critique.png',
                            alt: 'Critique'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Final Design'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/quicket/electronic_design.jpg',
                            alt: 'Electronic Design'
                        }
                    }
                ]
            }
        ]
    }
];

const about = {
    header: 'image/about/header.jpg',
    subtitle: 'I\'m a designer based in bay area, California. ',
    intro: 'I\'m a motivated product designer with strength in UX research, UX design, and software engineering. <br>' +
    'I design for creativity and love, aiming at bringing innovation and usability from ordinary. <br>' +
    'Currently I\' pursuing my master\'s degreen of Information Management and Systems in University of California, Berkeley.',
    resume: 'src/resume.pdf',
    path: 'I found my interests in HCI when I was still studying Computer Engineering in <a href="https://ece.illinois.edu/" target="_blank">University of Illinois at Urbana-Champaign</a>. In my junior year I took a class named "User Interface Design", and that class changed my life. After finishing the course I started to do research with my HCI professor and learned a lot about the processes of <b>UX research</b> and <b>UX design</b>.</p>' +
    '<p>In <b>2015</b> I joined a startup company <a href="https://www.quicketsolutions.com/qs/" target="_blank">Quicket Solutions, Inc.</a> in Chicago, working as a <b>Software Engineer</b>. In Quicket Solutions I firstly applied the HCI knowledge I learned in class to real industrial use. In a small company, I was not only the software developer, but also the UX researcher, visual designer, and interaction designer. Our team worked back and forth with our clients, conducting user tests, getting feedback, and adjusting our design. I learned a lot about user-centered product design strategies in this job.</p>' +
    '<p>In <b>2016</b> I joined <a href="https://search.yahoo.com/" target="_blank">Yahoo Inc.</a> and moved to California. I worked in the Yahoo Search team as a software engineer, supporting search system development. In Yahoo, I worked closely with UX researchers, designers, and product managers on improving user experience in the search product. I gained a lot of experience in iterative product development and corporating with people in different teams. Over two years, I designed and developed two internal tools for editors and engineers to config and debug search output.</p>' +
    '<p>In <b>2018</b> I decided to return back to school, and begin pursuing my master\'s degree in Information Management and Systems in <a href="https://www.ischool.berkeley.edu/" target="_blank">Unersity of California, Berkeley</a>.</p>' +
    '<p>I\'m exploring design possibilities of all kinds of media. I\'ve worked on developing human interactions on both <b>digital interfaces</b> and <b>tangible interfaces</b>.'
};