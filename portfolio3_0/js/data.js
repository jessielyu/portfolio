/**
 * Created by jessielyu on 7/10/18.
 */
const thumbnails = {
    vision: {
        name: 'VISION TOOL',
        image: 'image/portfolio/thumbnail/photography.png',
        href: '#vision',
        position: "left",
        time: 'June.2016 - July.2018',
        desc: 'Internal Debugging Tool for Yahoo Search System'
    },
    wizard: {
        name: 'WIZARD TOOL',
        image: 'image/portfolio/thumbnail/graphicDesign.png',
        href: '#wizard',
        position: "right",
        time: 'June.2016 - July.2018',
        desc: 'Frontend UI Configuration Tool for Yahoo Search System'
    },
    taskMate: {
        name: 'TASK MATE',
        image: 'image/portfolio/thumbnail/habitTracker.png',
        href: '#taskMate',
        position: "left",
        time: 'March.2018 - June.2018',
        desc: 'UX Research on Task Tracking Applications'
    },
    laishuati: {
        name: '来刷题 laishuati.com',
        image: 'image/portfolio/thumbnail/projecto.png',
        href: '#laishuati',
        position: "right",
        time: 'January.2018 - March.2018',
        desc: 'Coding Interview Preparation Platform for Group Practicing'
    },
    dalian: {
        name: '打脸APP Dalian',
        image: 'image/portfolio/thumbnail/dalian.png',
        href: '#dalian',
        position: "left",
        time: 'June.2017 - August.2017',
        desc: 'User-Generated Content News Digestion IOS APP'
    },
    shoppingLive: {
        name: '购物直播 Live Shopping',
        image: 'image/portfolio/thumbnail/shoppingLive.png',
        href: '#shoppingLive',
        position: "right",
        time: 'April.2017 - June.2017',
        desc: 'Live Streaming Online Shopping IOS APP'
    },
    quicket: {
        name: 'Quicket Solutions',
        image: 'image/portfolio/thumbnail/movieLog.png',
        href: '#quicket',
        position: "left",
        time: 'September.2015 - June.2016',
        desc: 'Cloud Based E-Tickets System for Police Officers'
    },
    placeholder4: {
        name: 'placeholder4',
        image: 'image/portfolio/thumbnail/iear.png',
        position: "right",
        time: 'June.2016 - July.2018',
        desc: 'Coming Soon'
    },
    placeholder5: {
        name: 'placeholder5',
        image: 'image/portfolio/thumbnail/scratch.png',
        position: "left",
        time: 'June.2016 - July.2018',
        desc: 'Coming Soon'
    },
    placeholder6: {
        name: 'placeholder6',
        image: 'image/portfolio/thumbnail/smartLock.png',
        position: "right",
        time: 'June.2016 - July.2018',
        desc: 'Coming Soon'
    }
};

const modals = [
    {
        name: 'dalian',
        header: {
            title: '打脸APP DALIAN',
            date: 'June.2017 - August.2017',
            txt: 'Creative News Digestion APP'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Dalian App is used to change the traditional way people digest news everyday. </p>' +
                        '<p>Normally people receive information passively -- by television or internet -- that ' +
                        'we people can only read content that has been created for them. </p>' +
                        '<p>Dalian is an App that users could create content themselves, with cited source and users\' ' +
                        'own opinion. Other users could comment, thumbs-up/down, or create another post to repute the ' +
                        'previous one. The purpose of Dalian is to build a user-generated content news platform, and form ' +
                        'a community where everyone could freely express their ideas and thoughts.'
                    }
                ]
            },
            {
                title: 'Our Team',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/dalianApp/Jessie_profile.jpg',
                            alt: 'jessie profile'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/dalianApp/Qi_profile.jpg',
                            alt: 'qi profile'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-6 center-align',
                        title: 'Jessie Lyu',
                        subtitle: 'Designer & Prototyping'
                    },
                    {
                        type: 'txt',
                        class: 'col-6 center-align',
                        title: 'Qi Liu',
                        subtitle: 'Programmer & Product Management'
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
                        txt: '"My school work requires some knowledge of the latest news. I want to find a reliable source ' +
                        'to get the information with less bias."'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'USER B',
                        subtitle: '24-year old software engineer from Mountain View, California',
                        txt: '"I love to read news while I am not coding. However, many news articles on internet, especially ' +
                        'those regarding high-tech, are misleading and full of exaggeration. I want to find a place where ' +
                        'information comes from real professionals."'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'USER C',
                        subtitle: '54-year old professor from Beijing, China',
                        txt: '"I think sometimes news content are deliberately misguiding people towards an opinion. I ' +
                        'think this is not good for a student to form their critical thinking skills since they need to ' +
                        'know different -- even opposite -- opinions to get a more comprehensive understanding."'
                    }
                ]
            },
            {
                title: 'Competitors',
                data: [
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'img-sm img-center',
                            src: 'image/portfolio/dalianApp/zhihu.png',
                            alt: 'zhihu logo'
                        }

                    },
                    {
                        type: 'txt',
                        class: 'col-9',
                        title: 'Zhihu',
                        txt: 'Zhihu is a community for users to share their knowledge.<br>' +
                        'Users could provide their insight on a recent news, explain some technology term, or repudiate ' +
                        'a commonly accepted idea.'
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            src: 'image/portfolio/dalianApp/wangyi.png',
                            alt: 'wangyi logo',
                            style: 'img-sm img-center'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-9',
                        title: 'Wangyi',
                        txt: 'Wangyi News is the most popular news app in China. <br>' +
                        'The content covers various areas from politics to entertainment.<br>' +
                        'Content continues to refresh 24/7.'
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
                            style: 'span',
                            src: 'image/portfolio/dalianApp/wireframe.jpg',
                            alt: 'wireframe'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Dalian should be a combination of knowledge sharing community and a news digestion platform, ' +
                        'with user-generated content.',
                        subtitle: 'The App need to support following basic functionality: ',
                        txt: '1. Users could read all the content like a normal news digestion app. All the posts should be ' +
                        'categorized and displayed title and abstraction on the main page, according to their content.<br>' +
                        '2. In each post detail page. Users could see: title, author, source(where the information comes from), ' +
                        'abstraction, content(the basic content format is images or screenshots). And below the post body, ' +
                        'there is a section for all the "dalian-post"(people cite other source to refute this post). ' +
                        'User could also like, dislike, or comment on this post.<br>' +
                        '3. Upon click on each "dalian-post", app will direct user to a new post page, with all the information a post needs. ' +
                        'So all the post-dalian-dalian again... could form a chain.<br>' +
                        '4. User should login to create post or respond to an existing post.<br>' +
                        '5. On user profile page, we should list this user post history, dalian history, comments number, etc.'
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
                            style: 'span',
                            src: 'image/portfolio/dalianApp/uisketch.jpg',
                            alt: 'UI sketch'
                        }
                    }
                ]
            },
            {
                title: 'Revision History',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Version 1.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version1.1.jpg',
                            alt: 'vision1.1.jpg'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version1.2.jpg',
                            alt: 'vision1.2.jpg'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Version 2.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version2.1.jpg',
                            alt: 'vision2.1.jpg'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version2.2.jpg',
                            alt: 'vision2.2.jpg'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Version 3.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version3.1.jpg',
                            alt: 'vision3.1.jpg'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version3.2.jpg',
                            alt: 'vision3.2.jpg'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Version 4.0'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version4.1.jpg',
                            alt: 'vision4.1.jpg'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/version4.2.jpg',
                            alt: 'vision4.2.jpg'
                        }
                    }
                ]
            },
            {
                title: 'Selected UI',
                data: [
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img0.png',
                            alt: 'img0'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img1.png',
                            alt: 'img1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img2.png',
                            alt: 'img2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img3.png',
                            alt: 'img3'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img4.png',
                            alt: 'img4'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img5.png',
                            alt: 'img6'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img6.png',
                            alt: 'img6'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img7.png',
                            alt: 'img7'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img8.png',
                            alt: 'img8'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img9.png',
                            alt: 'img9'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img10.png',
                            alt: 'img10'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img11.png',
                            alt: 'img11'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'shoppingLive',
        header: {
            title: '购物直播 Shopping Live',
            date: 'April.2017 - June.2017',
            txt: 'Live streaming shopping APP'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'People\'s shopping habits have undergone tremendous changes with globalization and hi-tech. ' +
                        'Consumers nowadays could shop for products over the world online or in store.</p>' +
                        '<p>As shopping becomes easier for everyone, doing shopping business also becomes easier. ' +
                        'More small parties and individuals get involved in online shopping business, and various type of shopping patterns has emerged.</p>' +
                        '<p>One shopping pattern is the buyers pattern. Generally, for products that is not accessible by either online or real shops, ' +
                        'consumers could still buy the products through some third-party -- buyers. ' +
                        'They serve as a media or intermediate step since they have access to both goods and consumers. </p>' +
                        '<p>Live shopping is an App for buyers and consumers. By providing a platform with Live Streaming, ' +
                        'buyers could post their services for consumers. When doing merchandise, consumers could make choices at real-time. ' +
                        'At the same time, the App could make third-party shopping more trustful and reliable.'
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
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/brainstorming.jpg',
                            alt: 'brainstorm.jpg'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Our app should have functions of a normal shopping App:',
                        txt: '1. Users could browse product lists and see product description, price, style, etc. <br>' +
                        '2. Users could add products to shopping cart, fill address form, make payment, etc. <br>' +
                        '3. Users could login to see order history, saved payment methods, address book, etc. <br>'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Since the app also integrates the functionality of live video streaming, so it should ' +
                        'also supports: ',
                        txt: '1. There should be a button to direct users to current live video streaming event.<br>' +
                        '2. On the main page, users could find information about upcoming shopping events.<br>' +
                        '3. Users should be able to make purchases inside video streaming, the screen should have a ' +
                        'popup window about the current shopping product.<br>'
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
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/uisketch.jpg',
                            alt: 'uisketch.jpg'
                        }
                    }
                ]
            },
            {
                title: 'Wireframe',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/wireframe.png',
                            alt: 'wireframe'
                        }
                    }
                ]
            },
            {
                title: 'Prototyping',
                data: [
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img1.gif',
                            alt: 'img1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img3.gif',
                            alt: 'img3'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img4.gif',
                            alt: 'img4'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img6.gif',
                            alt: 'img6'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'taskMate',
        header: {
            title: 'Task Mate',
            date: 'Mar.2018 - June.2018',
            txt: 'UX Research and UI Design on Time Management APP'
        },
        sections: [
            {
                title: 'Project Proposal',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'We face so many distractions when we trying to finish a task. Various attractions such as cell-phone, ' +
                        'computer games, fast food...make it harder to reach goals like study for an hour, or lose 10 pounds, etc.</p>' +
                        '<p>I figured out that goal/task accomplishing difficulty has became a major problem in people from all ages, ' +
                        'especially young people from 15 - 40. However, it’s critical for everybody to set up different ' +
                        'type of goals and try to reach them, in order to improve his own skill set and abilities. ' +
                        'So it’s important to find a way to help people finishing tasks and accomplishing goals efficiently.'
                    }
                ]
            },
            {
                title: 'User Research',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I’ve conducted comprehensive surveys to people from 20 - 50, and among 50 responses I received, I found most people prefer to:</p>' +
                        '<p>1. Setup medium-detailed plan such as: lose 10 pounds in a month(not as detailed as daily diet menu), or study CFA 3 times/week.<br>' +
                        '2. Adjust the goals according to the progress. For example, if the initial goal is to study CFA 3 times/week but the person is too busy, ' +
                        'then he will change the goal to 2 times/week.</p>' +
                        '<p>And their major reasons for “goal/task accomplishing difficulty” are:'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-mini img-center',
                            src: 'image/portfolio/taskMate/difficulties.png',
                            alt: 'difficulties'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Most people is willing to try a mobile/desktop application to help them increase their task performing efficiency and goal accomplishing rate. ' +
                        'Based on the result of user surveys, I think it would be helpful if an application could support the following functionalities:'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-mdlg',
                            src: 'image/portfolio/taskMate/research_result.png',
                            alt: 'user research result'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'So I propose to build an mobile application to help people accomplishing their goals and finishing their tasks with the above functionalities.'
                    }
                ]
            },
            {
                title: 'Competitive Analysis',
                data: [
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/taskMate/streaks.png',
                            alt: 'streaks'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/taskMate/strides.png',
                            alt: 'strides'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/taskMate/wunderlist.png',
                            alt: 'wunderlist'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/taskMate/today.png',
                            alt: 'today'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-3 center-align',
                        subtitle: 'Streaks'
                    },
                    {
                        type: 'txt',
                        class: 'col-3 center-align',
                        subtitle: 'Strides'
                    },
                    {
                        type: 'txt',
                        class: 'col-3 center-align',
                        subtitle: 'Wunderlist'
                    },
                    {
                        type: 'txt',
                        class: 'col-3 center-align',
                        subtitle: 'Today'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-mdlg img-center',
                            src: 'image/portfolio/taskMate/compare_table.png',
                            alt: 'comparison table'
                        }
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
                            style: 'img-center img-mdlg',
                            src: 'image/portfolio/taskMate/page_relationship.png',
                            alt: 'page relationship'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12 center-align',
                        subtitle: 'Page Relationship'
                    }
                ]
            },
            {
                title: 'Information Organization',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Task Page Organization'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-mdlg',
                            src: 'image/portfolio/taskMate/task_page_organization.png',
                            alt: 'Task Page Organization'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Community Page Organization'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md',
                            src: 'image/portfolio/taskMate/community_page_organization.png',
                            alt: 'Community Page Organization'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Profile Page Organization'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md',
                            src: 'image/portfolio/taskMate/profile_page_organization.png',
                            alt: 'Profile Page Organization'
                        }
                    }
                ]
            },
            {
                title: 'Prototyping',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-lg',
                            src: 'image/portfolio/taskMate/prototype1.gif',
                            alt: 'prototype 1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-lg',
                            src: 'image/portfolio/taskMate/prototype2.gif',
                            alt: 'prototype 1'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'laishuati',
        header: {
            title: '来刷题 laishuati.com',
            date: 'Jan.2018 - Mar.2018',
            txt: 'Coding Interview Preparation Platform.'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '来刷题 (laishuati.com) is a web platform for group coding exercises. ' +
                        'It could help people practice their software engineering skills, especially programming skills. ' +
                        'Laishuati supports coding problems such as algorithm, system design, database, etc. ' +
                        'The main functionality is that users could form groups to practice together.'
                    }
                ]
            },
            {
                title: 'Ideas',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'With the trending of computer technology, Software Engineer has became one of the most popular job in the world. ' +
                        'Nowadays a typical software engineer interview will always include coding skill and algorithm questions. ' +
                        'In order to prepare for coding interviews, most candidates will practice quite a number of programming and algorithm questions. ' +
                        'The idea of Laishuati is based on coding interview preparing processes, that users could group up and practice together.</p>' +
                        '<p>There are numerous preparing methods for coding interview. Bootcamps, books, online-judgment platforms... ' +
                        'Each of them has their own advantages and disadvantage. Book is the best for understanding fundamental theories but it doesn\'t provide any real practice. ' +
                        'Online-judgement is good for real practice but is lacks knowledge illustration. ' +
                        'Bootcamp is probably the best way to ramp up both algorithm and coding skills, but it is expensive, too.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Competitor -- LeetCode'
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-center img-md',
                            src: 'image/portfolio/laishuati/leetCode.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-8',
                        txt: 'LeetCode is the most popular online judgement platform, used by thousands of users who are looking for jobs as Software Engineer. ' +
                        'LeetCode has a large questions base, including coding problems from various tech companies. ' +
                        'It also has a community which people could share their solutions and ideas. </p>' +
                        '<p>However, LeetCode does not have group training feature, which allow users to practice together. ' +
                        'It does have personal progress status, but without peers, people tend to lose enthusiasm  easily.'
                    }
                ]
            },
            {
                title: 'Page Relationship',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'laishuati.com has two major components -- coding online judgement system and group community. ' +
                        'The home page is used to show main content and functionality of the website. Once login, ' +
                        'users could join groups, practice problems, and check progress.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/laishuati/page_relationship.png',
                            alt: 'Page Relationship'
                        }
                    }
                ]
            },
            {
                title: 'Home Page Design',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Information Organization'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/laishuati/home_info.png',
                            alt: 'Home Page Information Organization'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'UI Mockup'
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
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/HomePage.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-3',
                        txt: ''
                    }
                ]
            },
            {
                title: 'Group Page Design',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Information Organization'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-mdlg img-center',
                            src: 'image/portfolio/laishuati/group_info.png',
                            alt: 'Group Page Information Organization'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'UI Mockup'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/GroupPage.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/CreateGroupPage.png',
                            alt: 'Leet Code'
                        }
                    }
                ]
            },
            {
                title: 'Problem Page Design',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Information Organization'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-mdlg img-center',
                            src: 'image/portfolio/laishuati/problem_info.png',
                            alt: 'Problem Page Information Organization'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'UI Mockup'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/ProblemPage.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/ProblemPage-2.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/ProblemPage-3.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/ProblemPage-4.png',
                            alt: 'Leet Code'
                        }
                    }
                ]
            },
            {
                title: 'User Page Design',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Information Organization'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-mdlg img-center',
                            src: 'image/portfolio/laishuati/user_info.png',
                            alt: 'User Page Information Organization'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'UI Mockup'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/UserPage.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/UserPage-2.png',
                            alt: 'Leet Code'
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
                            style: 'img-center span',
                            src: 'image/portfolio/laishuati/UserPage-3.png',
                            alt: 'Leet Code'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-3',
                        txt: ''
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
            txt: 'Internal Debugging Tool for Yahoo Search Middleware.'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-sm',
                            src: 'image/portfolio/visionTool/yahoo_logo.png',
                            alt: 'Yahoo! logo'
                        }

                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-sm',
                            src: 'image/portfolio/visionTool/vision_logo.png',
                            alt: 'Yahoo! logo'
                        }

                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Vision Tool is an internal debugging tool for Yahoo Search Middleware.</p>' +
                        '<p>It contains debugging information such as search backend calling sequence, request latency, ' +
                        'script running status, etc.'
                    }
                ]
            },
            {
                title: 'Ideas',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Yahoo Search Middleware is the platform which connects search backend and frontend. ' +
                        'It controls all incoming queries from users, parses queries using NLP algorithm, ' +
                        'dispatches queries to different backend, then it organizes data returned by backend, ' +
                        'and returns a page response for rendering by frontend to users.</p>' +
                        '<p>Yahoo Search Middleware serves millions of users all over the world, and processes billions of user queries everyday.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/gsmFlow.png',
                            alt: 'GSM Flow'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Debugging processes could be very painful for a large-scale system like this. ' +
                        'For the past two years in Yahoo I was working on building a comprehensive debugging tool for engineers and editors, ' +
                        'and here comes the <strong>Vision Tool</strong>.</p>' +
                        '<p>Vision Tool covers debugging information for almost every steps in a single search query processing. ' +
                        'From request analysis, backend call sequence, to module rendering UI components. ' +
                        'It has been proved to be very helpful for developers in Yahoo Search Team.'
                    }
                ]
            },
            {
                title: 'Define Data Needed',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Firstly I need to find out types of data for the tool, and how I could retrieve those information from Search platform.</p>' +
                        '<p>I conducted user interviews with many teams, including engineers who are responsible for platform coding, ' +
                        'and editors who are responsible for building search result data modules.</p>' +
                        '<p>The interview result from users showed that the tool need to have the following debugging data in the tool:</p>' +
                        '<p>' +
                        '1. API information, including request information, dimension information(intl, device...), etc.<br>' +
                        '2. Data parsing and configuration information for each steps. eg. script to parse data from raw backend data to UI component' +
                        '(image, text, header...), and script to config data from UI components to UI module(a complete search result item).<br>' +
                        '3. Overall search result data configuration and data layout.<br>' +
                        '4. Search performance like backend calling latencies and data parsing time efficiency.' +
                        '</p>' +
                        '<p>All of the debugging information above could be retrieved from Search Middleware System.'
                    }
                ]
            },
            {
                title: 'Data Visualization',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'After discussions with users back and forth, I finally decided to use three types of ' +
                        'visualization methods for the debugging data.'
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/visionTool/json_format.png',
                            alt: 'json format'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/visionTool/table_format.png',
                            alt: 'table format'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-sm-round img-center',
                            src: 'image/portfolio/visionTool/graph_format.png',
                            alt: 'graph format'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-4 center-align',
                        subtitle: 'json format'
                    },
                    {
                        type: 'txt',
                        class: 'col-4 center-align',
                        subtitle: 'table format'
                    },
                    {
                        type: 'txt',
                        class: 'col-4 center-align',
                        subtitle: 'graph format'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Json Format',
                        txt: 'Json format is best for rendering raw data. Since all of the debugging information is returned ' +
                        'as json object. Json Format is the easiest way to render information.</p>' +
                        '<p>However, users can\'t get a straightforward overview of information among json data. And sometimes ' +
                        'it could be hard for non-technical users to understand pure json data.</p>' +
                        '<p>So I used json format to render data which contains information that was hard to be visualized ' +
                        'using graphs, and information used mostly by only engineers.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Table Format',
                        txt: 'Table format is majorly used to debug entities. Each entity stands for a phase of data configuration. ' +
                        'In Yahoo Search System, a query will be firstly parsed as <em>Intents</em>, and according to ' +
                        'different Intents it will triggering different backend and get <em>DataObjects</em>. A DataObject could ' +
                        'be formatted as a <em>Module</em>, which is also a UI component like text or image. Finally different ' +
                        'Modules will form a <em>ModuleGroup</em>, which stands for a search result item.</p>' +
                        '<p>All of the objects mentioned above are entities: DataObject, ModuleGroup, and Intents. ' +
                        'Entity has information such as id, scripts, status, etc. The information is very suitable for table format visualization.</p>' +
                        '<p>However, the downside of table format is that it could only render limited amount of information. ' +
                        'For more complex information, we still need to use json format.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Graph Format',
                        txt: 'Graph format is the best visualization method for a straightforward and user-friendly data view. ' +
                        'It could be understandable by any users, especially users without tech background.</p>' +
                        '<p>For graph format visualization the most difficult part is to construct and organize data for the graph. ' +
                        'I used graphs for debugging data like backend calling latency, and search performance etc.'
                    }
                ]
            },
            {
                title: 'User Feedback for First Version',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg',
                            src: 'image/portfolio/visionTool/version1_0.png',
                            alt: 'version 1.0'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12 center-align',
                        subtitle: 'UI version 1.0'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The first version of UI is very simple, with only basic debugging information. ' +
                        'Most of the information is rendered using table or json format. </p>' +
                        '<p>I received a lot of useful feedback from the initial round of user testing. ' +
                        'Some major potential enhancements I concluded from user feedback include:'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: '1. Lack of Query Information',
                        txt: 'Users didn\'t know what query they were searching for or debugging at. Query info was not shown on the UI.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: '2. Incomplete Debugging information',
                        txt: 'Even though I thought I\'ve covered all major debugging data that an engineer or an editor could ever needs, ' +
                        'there were still not sufficient enough to address all the user requirements.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: '3. Query and Header Update Functionality',
                        txt: 'If users want to debug another query, or update header information to customize search result, ' +
                        'they should be able to do it in the tool instead of going to search page to perform the task.'
                    }
                ]
            },
            {
                title: 'Tool Enhancements',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Accroding to user feedback, I made some enhancements to the tool.'
                    },
                    {
                        type: 'txt',
                        class: 'col-8',
                        txt: 'I added query information, so users could easily find out current query information.</p>' +
                        '<p>I also added query and header update for users to conveniently update search request.</p>' +
                        '<p>I added more panels with more thorough debugging information. In order to prevent long data loading time, ' +
                        'I added debugging panel toggle button so users could choose types of information they want to see. ' +
                        'That way users could eliminate loading time for panels they don\'t need.'
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/visionTool/query_form.png',
                            alt: 'query form'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-3',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/visionTool/panel_menu.png',
                            alt: 'panel menu'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-9',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/visionTool/graph.png',
                            alt: 'graph enhancement'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I also added more graphical data visualizations for users to understand debugging information easier.</p>' +
                        '<p>Besides, I\'ve also changed the page to be responsible to accommodate users debugging using mobile devices.'
                    },
                    {
                        type: 'txt',
                        title: 'Feedback',
                        txt: 'The second round of user testing went very well. Most users seemed to be pretty comfortable with the UI. ' +
                        'I felt so grateful that more and more people are using the tool for debugging Search System, ' +
                        'and I could make developing process more efficient. </p>' +
                        '<p>I still received minor enhancements requests from users after the tool had been launched. ' +
                        'Perfecting the tool is a long and on-going process since more data will be added to the system.</p>' +
                        '<p>I learned a lot from this project in Yahoo, not only in technical perspective. I developed my user research skills, and user-centered product design skills. ' +
                        'Through working with other teams I\'ve also practiced cross-team coordinating skills. ' +
                        'Finally I learned the lifecycle of a product, from research, design to develop and launch. ' +
                        'Thanks Yahoo of giving me this chance.'
                    }
                ]
            },
            {
                title: 'Final Design',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/visionAPI.png',
                            alt: 'Vision API'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12 center-align',
                        subtitle: 'Vision API'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/entity.png',
                            alt: 'Vision Entity'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12 center-align',
                        subtitle: 'Vision Entity'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/column_chart.png',
                            alt: 'Column Chart'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12 center-align',
                        subtitle: 'Column Chart'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/visionTool/network_chart.png',
                            alt: 'Network Chart'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12 center-align',
                        subtitle: 'Network Chart'
                    }
                ]
            }
        ]
    },
    {
        name: 'wizard',
        header: {
            title: 'Wizard Tool',
            date: 'June.2016 - July.2018',
            txt: 'Configuration Tool for Yahoo Search Data Output.'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-sm',
                            src: 'image/portfolio/visionTool/yahoo_logo.png',
                            alt: 'Yahoo! logo'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-sm',
                            src: 'image/portfolio/visionTool/yahoo_logo.png',
                            alt: 'Yahoo! logo'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Wizard Tool is an internal configuration tool for Yahoo Search. It is widely used by both developers and editors. ' +
                        'The main purpose of Wizard Tool is to transform raw data to UI output with text, title, images, etc. ' +
                        'I designed and developed Wizard Triggering Tool, which is focus on user intent to data source, and to output template mapping.</p>' +
                        '<p>Every user request from Search frontend will be analyzed through Yahoo NLP algorithm, ' +
                        'then each query will be reduced to a list of Intents. An Intent could trigger one or more backends, ' +
                        'which will then return data for frontend to render. Most of the Intent->Backend mapping is done by developers and editors, ' +
                        'who manually define a certain intent could trigger some specific backends. ' +
                        'Triggering Tool could help users easily config those mappings.'
                    }
                ]
            },
            {
                title: 'Information Organization',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'A complete triggering chain is composed of Rule, UseCase, and Domain. Rule and UseCase should all belong to a certain Domain. ' +
                        'A Rule defines triggering pattern, which configs how a data could be formatted. All data is coming from feeds. ' +
                        'A UseCase is used to select data for a template, which will be used for frontend rendering. ' +
                        'A Rule could be used by many UseCases for their data selection.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-mdlg img-center',
                            src: 'image/portfolio/wizardTool/information_organization.png',
                            alt: 'Information Organization'
                        }
                    }
                ]
            },
            {
                title: 'User Workflow',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I anticipated how a user would use this tool for a triggering configuration. '
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-lg img-center',
                            src: 'image/portfolio/wizardTool/user_flow.png',
                            alt: 'User Workflow'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Users would first create or select a Domain, and under this Domain, users will create/edit a UseCase. ' +
                        'For each UseCase, a user should be able to select a Rule under current Domain. If a Rule is not available, ' +
                        'a user could go to Rule page to create a new one. Users could also update an existing Rule. ' +
                        'The tool also have Conflicts section which specify priority of UseCases in same page region. ' +
                        'Once a user finish all the changes, he should be able to publish triggering chain to a dimension.'
                    }
                ]
            },
            {
                title: 'UI Design',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Overview Pages'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span img-center',
                            src: 'image/portfolio/wizardTool/DomainView Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span img-center',
                            src: 'image/portfolio/wizardTool/UseCaseView Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span img-center',
                            src: 'image/portfolio/wizardTool/DispatchConflictsView Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span img-center',
                            src: 'image/portfolio/wizardTool/DisplayConflictsView Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span img-center',
                            src: 'image/portfolio/wizardTool/RuleView Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span img-center',
                            src: 'image/portfolio/wizardTool/Publisher Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Create Entity Pages'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/wizardTool/CreateDomain Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/wizardTool/CreateUC Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/wizardTool/CreateRule Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/wizardTool/CreateDiaplayConflicts Retina.png',
                            alt: 'UI Design'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/wizardTool/CreatePublisher Retina.png',
                            alt: 'UI Design'
                        }
                    }
                ]
            }
        ]
    }
];

const about = {
    subtitle: 'I\'m a Master student of Information Management and System in UC Berkeley. ',
    intro: 'I specialize in Web/Mobile development, with experience in designing, programming and prototyping. ',
    profile: 'image/profilepic-800.png',
    resume: 'src/resume.pdf',
    skills: {
        logo: 'image/about/skill.png',
        design: [
            {
                name: 'Adobe Photoshop',
                level: 'image/about/intermediate.png'
            },
            {
                name: 'Adobe Illustrator',
                level: 'image/about/experienced.png'
            },
            {
                name: 'Adobe XD',
                level: 'image/about/experienced.png'
            },
            {
                name: 'Sketch',
                level: 'image/about/experienced.png'
            }
        ],
        coding: [
            {
                name: 'HTML/CSS',
                level: 'image/about/professional.png'
            },
            {
                name: 'Javascript/Jquery',
                level: 'image/about/professional.png'
            },
            {
                name: 'PHP',
                level: 'image/about/experienced.png'
            },
            {
                name: 'Java',
                level: 'image/about/professional.png'
            }
        ],
        innovation: [
            {
                name: 'Design Thinking'
            },
            {
                name: 'User Interview'
            },
            {
                name: 'Prototyping'
            }
        ]
    },
    education: {
        experience: [
            {
                school: 'University of California - Berkeley',
                year: '2018-2020',
                degree: 'M.I.M.S Master of Information Management and System',
                focus: 'UX Design, UX Research'
            },
            {
                school: 'University of Illinois, Urbana-Champaign',
                year: '2012-2016',
                major: 'B.S. Computer Engineering',
                minor: 'Mathematics'
            }
        ],
        logo: 'image/about/education.png'
    },
    work: {
        experience: [
            {
                company: 'Yahoo, Inc.',
                location: 'Sunnyvale, CA',
                year: '2016-2018',
                position: 'Software Engineer, Assoc.',
                desc: 'Search Middleware & internal tool development.'
            },
            {
                company: 'Quicket Solutions, Inc.',
                location: 'Champaign, IL',
                year: '2015-2016',
                position: 'Software Engineer',
                desc: 'UI design & development.'
            }
        ],
        logo: 'image/about/work.png'
    },
    contact: {
        email: 'jiexinlyu@gmail.com',
        phone: '(669)-246-2810',
        logo: 'image/about/contact.png'
    }
};