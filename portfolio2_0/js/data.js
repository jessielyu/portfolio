/**
 * Created by jessielyu on 12/12/17.
 */

var thumbnails = {
    facepalm: {
        name: 'DALIAN(打脸)',
        image: 'image/portfolio/thumbnail/dalian.png',
        href:'#dalian'
    },
    shopping: {
        name: 'LIVE SHOPPING(购物直播)',
        image: 'image/portfolio/thumbnail/shoppingLive.png',
        href:'#shoppingLive'
    },
    habitTracker: {
        name: 'HABIT TRACKER',
        image: 'image/portfolio/thumbnail/habitTracker.jpg',
        href:'#habitTracker'
    },
    smartLock:{
        name: 'SMART LOCKER',
        image: 'image/portfolio/thumbnail/smartLock.jpg',
        href: '#smartLock'
    },
    educationGame:{
        name: 'EDUCATION GAMES',
        image: 'image/portfolio/thumbnail/educationGame.png',
        href: '#educationGame'
    },
    iEar:{
        name: 'IEAR',
        image: 'image/placeholder.png',
        href: '#iEar'
    },
    movieLog:{
        name: 'MOVIE LOG',
        image: 'image/portfolio/thumbnail/movieLog.png',
        href: '#movieLog'
    },
    lait:{
        name: 'LAIT',
        image: 'image/placeholder.png',
        href: '#lait'
    },
    scratch:{
        name: 'SCRATCH',
        image: 'image/portfolio/thumbnail/scratch.jpg',
        href: '#scratch'
    },
    graphicDesign:{
        name: 'GRAPHIC DESIGN',
        image: 'image/portfolio/thumbnail/graphicDesign.png',
        href: '#graphicDesign'
    },
    photography:{
        name: 'PHOTOGRAPHY',
        image: 'image/portfolio/thumbnail/photography.jpg',
        href: '#photography'
    },
    tobeDecided:{
        name: 'TO BE DECIDED',
        image: 'image/placeholder.png',
        href: '#tobeDecided'
    }
};

var modals =
[
    {
        name: 'dalian',
        header: {
            title:'DALIAN 打脸 (faceplam)',
            date: 'June.2017 - August.2017',
            txt: ''
        },
        sections: [
            {
                title: '',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg',
                            src: 'image/portfolio/dalianApp/logo.png',
                            alt: 'logo'
                        }
                    }
                ]
            },
            {
                title: 'Project Idea',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'We see a lot of fake information everyday, from various sources including: internet, news, television, etc. Sometimes we want to find a place that we could post these false and misleading information, and rebuke them.' +
                        'Dalian is an app based on this idea. We want to build such a platform that people could post specious information and dismay them. While other users could advocate or rebut the original post by either citing other sources or commenting.' +
                        'The app is currently in reviewing process by Apple App store.'
                    }
                ]
            },
            {
                title: 'Our Team',
                data: [
                    {
                        type: 'img-txt',
                        class: 'col-6',
                        img: {
                            style: 'img-sm-round',
                            src: 'image/portfolio/dalianApp/Jessie_profile.jpg',
                            alt: 'jessie profile'
                        },
                        title: 'Jessie Lyu'
                    },
                    {
                        type: 'img-txt',
                        class: 'col-6',
                        img: {
                            style: 'img-sm-round',
                            src: 'image/portfolio/dalianApp/Qi_profile.jpg',
                            alt: 'qi profile'
                        },
                        title: 'Qi Liu'
                    }
                ]
            },
            {
                title: 'User Interview',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'USER A',
                        subtitle: '13-year old student from Chengdu, China',
                        txt: '"I rely on internet very much for my school work. Everytime if want to know something I always consult internet. It is bad for my study if I got something wrong. If there is somewhere that I could see all those false information that would be very helpful."'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'USER B',
                        subtitle: '24-year old software engineer from Mountain View, California',
                        txt: '"I love to read news while I am not coding. I can always see some misleading articles, especially about high technology. Those fake news are disguisting and their authors just want to attract readers. Sometimes I rebuke them under comments but seems like peple do not really care."'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'USER C',
                        subtitle: '54-year old professor from Beijing, China',
                        txt: '"Those fallacious content is everywhere: TV, newspaper, internet, magazines. I sometimes remind my students do not trust everything. It is better if they could filter out fake content using the critical thinkg skills."'
                    }
                ]
            },
            {
                title: 'Competitors',
                data: [
                    {
                        type: 'img-txt',
                        class: 'col-6',
                        img: {
                            style: 'img-sm',
                            src: 'image/portfolio/dalianApp/zhihu.png',
                            alt: 'zhihu logo'
                        },
                        title: 'Zhihu(知乎)',
                        txt: 'Zhihu is an app for users to share their knowledge to something.\n' +
                        'Users could provide their insight on a recent news, explain some technology term, or repudiate a commonly accepted idea.\n' +
                        'It is like a knowledge share community.'

                    },
                    {
                        type: 'img-txt',
                        class: 'col-6',
                        img: {
                            src: 'image/portfolio/dalianApp/wangyi.png',
                            alt: 'wangyi logo',
                            style: 'img-sm'
                        },
                        title: 'Wangyi(网易)',
                        txt: 'Wangyi News is a news digesting app.\n' +
                        'It is news content are of various aspects, from politics to entertainments. And they are of diffrent forms including articles, videos, or images.\n' +
                        'Users could read, share or comment on those news.'
                    }
                ]
            },
            {
                title: 'Wireframe',
                data: [
                    {
                        type: 'img-txt',
                        class: 'col-12',
                        img: {
                            style: 'img-lg',
                            src: 'image/portfolio/dalianApp/wireframe.jpg',
                            alt: 'wireframe'
                        },
                        subtitle: 'Our app need to support following basic functionalities: ',
                        txt: '1. Users could read all the content like a normal news digestion app. All the posts should be categorized and displayed title and abstraction on the main page, according to their content.<br>' +
                        '2. In each post detail page. Users could see: title, author, source(where the information comes from), abstraction, content(the basic content format is images or screenshots). And below the post body, there is a section for all the "faceplams"(people cite other source to rebute this post). User could also like, dislike, or comment on this post.<br>' +
                        '3. Upon click on each "facepalm", app will direct user to a new post page, with all the information a post needs. So all the post-faceplam-faceplam again... could form a chian.<br>' +
                        '4. User should login to create post or respond to an existing post.<br>' +
                        '5. On user profile page, we should list this user post history, facepalm history, comments number, etc.'
                    }
                ]
            },
            {
                title: 'UI Sketch',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            src: 'image/portfolio/dalianApp/uisketch.jpg',
                            alt: 'UI sketch'
                        }
                    }
                ]
            },
            {
                title: 'Revision History',
                data: []
            }
        ]
    },
    {
        name: 'shoppingLive',
        header: {
            title:'Shopping Live 购物直播',
            date: 'April.2017 - June.2017',
            txt: ''
        },
        sections: {}
    },
    {
        name: 'habitTracker'
    },
    {
        name: 'smartLock'
    },
    {
        name: 'educationGame'
    },
    {
        name: 'iEar'
    },
    {
        name: 'movieLog'
    },
    {
        name: 'lait'
    },
    {
        name: 'scratch'
    },
    {
        name: 'graphicDesign'
    },
    {
        name: 'photography'
    },
    {
        name: 'tobeDecided'
    }
];