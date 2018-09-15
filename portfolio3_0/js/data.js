/**
 * Created by jessielyu on 7/10/18.
 */
const thumbnails = {
    taskMate: {
        name: 'Task Mate IOS Application',
        image: 'image/portfolio/thumbnail/taskMate.png',
        href: '#taskMate',
        position: "left",
        time: 'March.2018 - June.2018',
        desc: 'UX Research on Task Tracking Applications'
    },
    laishuati: {
        name: 'Laishuati.com',
        image: 'image/portfolio/thumbnail/laishuati.png',
        href: '#laishuati',
        position: "right",
        time: 'January.2018 - March.2018',
        desc: 'Coding Interview Preparation Platform for Group Practicing'
    },
    dalian: {
        name: 'Dalian News IOS App',
        image: 'image/portfolio/thumbnail/dalian.png',
        href: '#dalian',
        position: "left",
        time: 'June.2017 - August.2017',
        desc: 'User-Generated Content News Digestion IOS APP'
    },
    shoppingLive: {
        name: 'Live Shopping IOS App',
        image: 'image/portfolio/thumbnail/shoppingLive.png',
        href: '#shoppingLive',
        position: "right",
        time: 'April.2017 - June.2017',
        desc: 'Live Streaming Online Shopping IOS APP'
    }
};

const thumbnails_work = {
    vision: {
        name: 'Yahoo! Vision Tool',
        image: 'image/portfolio/thumbnail/vision.png',
        href: '#vision'
    },
    wizard: {
        name: 'Yahoo Wizard Tool',
        image: 'image/portfolio/thumbnail/wizard.png',
        href: '#wizard'
    },
    quicket: {
        name: 'Quicket Solutions',
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
            title: 'Shopping Live',
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
            title: 'laishuati.com',
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
            txt: 'UX Designer | Full-stack Engineer',
            header_img: 'image/portfolio/visionTool/header_img.png'
        },
        sections: [
            {
                title: 'Overview',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Vision tool is an internal tool for debugging whole yahoo search system.I designed and developed this tool while I was working in Yahoo Search middleware team from 2016 to 2018.</p>' +
                        '<p>The application was launched in late 2017 and finished in mid 2018. '
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Yahoo Search System'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Yahoo search system has three major parts: frontend, backend, and middleware. Yahoo Global Search Middleware is the most essential platform which connects search backend and frontend. GSM has two functionalities: parsing incoming queries from frontend to backend, and return triggered data from backend frontend. For both downstream(fe->be) and upstream(be->fe) mechanisms, we used a series of nodes to process the data. Each node will be responsible for one or more sub-tasks, either parse query into different user intents, or organize returned data into renderable page layout. </p>' +
                        '<p>Yahoo Global Search Middleware platform is controlling everything about Yahoo search services. Yahoo search product serves millions of users and billions of traffic everyday, both on Web and Mobile sides.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-md',
                            src: 'image/portfolio/visionTool/gsmFlow.png',
                            alt: 'Yahoo Search Workflow'
                        }
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
                        txt: 'It is very important that we have a reliable and robust system since Yahoo GSM platform is the central hub for all other search functionalities. Over 100 developers in Search team, including engineers, designers, editor, and product managers, more or less work on search middleware system directly or indirectly. As people keep adding new features to search system, the difficulty of debugging increased dramatically. By Q2 2017, our search system has over hundred gigabytes data, more than 20 nodes and numerous sub-tasks. The ratio of bugs has increased steadily as the complexity of system grows.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-nano padding-sm',
                            src: 'image/portfolio/visionTool/interview_quote.png',
                            alt: 'user quote'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'However, the efficiency of troubleshooting was very low. During initial user research, we found that on average people would spend more than 2 hours on debugging. And normally a single bug would have more than one people working on it.</p>' +
                        '<p>Contributors in search team used to rely on very bulky and time-consuming ways of debugging. Some engineers used built-in debugging tool in IDE(Integrated Development Environment), others debugged from system-generated runtime log file. However, as the volume of data and the complexity of system increase, these two methods of debugging became more inconvenient and less useful. Furthermore,since information in these two methods was displayed in machine-language(ie.heap traceback or Java logging messages), for non-technical developers it was hard to understand those information.'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Existing debugging methods'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/current_methods.png',
                            alt: 'debugging methods'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Goals'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-smmd padding-md',
                            src: 'image/portfolio/visionTool/goals.png',
                            alt: 'goals'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-8',
                        txt: 'With all kinds of problems and inconveniences, we received a lot of complaints about heavy debugging processes within and without the team. In Q2 2017, we’ve decided to build an internal debugging tool to debug the whole search system. We named this tool “Vision” since we wanted to keep an eye on the health of our search system. </p>' +
                        '<p>The goal of this project is to build a stand-alone search system debugging tool for users of all levels and various technical backgrounds. The tool should allow users to easily debug problems within the search system, including search frontend, middleware, and backend. The tool should be easily accessed, and should not do any impact on the search system itself.'
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-center img-md padding-md',
                            src: 'image/portfolio/visionTool/vision_logo.png',
                            alt: 'vision_logo'
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
                        txt: 'Throughout the project I worked as researchers, designers, and engineers.</p>' +
                        '<p>At the beginning I did some brief user interviews with few engineers, editors, and designers to learn their pain points of debugging search system.</p>' +
                        '<p>In the first half of the project I worked closely two more engineers on information retrieval and information structure design. We wrote code to extract useful debugging information from search system, according to our user interview result, and reorganize data in a way that could be easily visualized. </p>' +
                        '<p>For the second half I designed and coded the whole tool user interface. Based on backend data structure and user problems collected before, I designed a prototype, did some user testing, perfected the features, and launched the product. During the process I also designed the whole tool frontend architecture and user-data interactions. I had experienced a complete product design process though it was just an internal tool.'
                    }
                ]
            },
            {
                title: 'User Interviews',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'I interviewed three users who more or less need to debug search system through their daily work(for confidential reasons I hide their names). '
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Principal engineer in Search Middleware team'
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-center img-smmd padding-md',
                            src: 'image/portfolio/visionTool/avatar_1.png',
                            alt: 'avatar_1'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-8',
                        txt: '- Worked in Yahoo Search Middleware team for almost 10 years.</p>' +
                        '<p>- Designed and implemented whole search system, knew every part of the system very well.</p>' +
                        '<p>- Normally used runtime logging file for debugging.</p>' +
                        '<p><b>Problems when debugging: </b></p>' +
                        '<p>- Log file is super long and non human-understandable</p>' +
                        '<p>- He used page search to locate information, which was very low-efficient</p>' +
                        '<p>- Even as an expert of search, sometimes he couldn\'t find some information and had to spend more time on debugging.</p>'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Senior engineer in Query Language Processing team'
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-center img-smmd padding-md',
                            src: 'image/portfolio/visionTool/avatar_2.png',
                            alt: 'avatar_2'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-8',
                        txt: '- Worked in Yahoo Search Language Processing team for about 6 years.</p>' +
                        '<p>- Needed to debug search middleware to get query status information for language processing algorithm debugging.</p>' +
                        '<p>- Normally used IDE debugging tool for debugging.</p>' +
                        '<p><b>Problems when debugging: </b></p>' +
                        '<p>- Easily got lost in mixed and unorganized information provided by IDE.</p>' +
                        '<p>- Sometimes broke the whole system because of breakpoint(timeout).</p>' +
                        '<p>- Limited information displayed in programming language level.</p>'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Senior search UI designer/editor'
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'img-center img-smmd padding-md',
                            src: 'image/portfolio/visionTool/avatar_3.png',
                            alt: 'avatar_3'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-8',
                        txt: '- Worked as Search UI editor and designer for at least 4 years.</p>' +
                        '<p>- Needed debugging search system to verify if a frontend module was rendered correctly with appropriate data.</p>' +
                        '<p>- Used all kinds of debugging methods: browser inspector, other tools, etc.</p>' +
                        '<p><b>Problems when debugging: </b></p>' +
                        '<p>- Non-technical background made it hard to understand code and log messages.</p>' +
                        '<p>- Spent more time on debugging because of limited access to debugging data.</p>' +
                        '<p>- Always needed to ask other people for help.</p>'
                    }
                ]
            },
            {
                title: 'First step: Define Information Structure',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'With various inquiries and usage scenarios from users, we need construct comprehensive information to accommodate different user needs. '
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/user_needs.png',
                            alt: 'user_needs'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'After discussion with two other engineers in our team, we had decided that the tool need to support rendering data like: '
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-md',
                            src: 'image/portfolio/visionTool/data_structure.png',
                            alt: 'data structure'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'All of the debugging information above could be retrieved from Search Middleware System. Data will be logged from each task in the search chain, and will be grouped based on tags. After a search process debugging data will be constructed into organized and unified json format, then be handed over to tool frontend for rendering. '
                    }
                ]
            },
            {
                title: 'Visual Design',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Initial round: how did we categorize information?'
                    },
                    {

                    }
                ]
            },
            {
                title: 'Selected UI',
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
            },
            {
                title: 'Impact',
                data: []
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
                title: 'Storyboard',
                data: []
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
            },
            {
                title: 'Feedback',
                data: []
            }
        ]
    },
    {
        name: 'quicket',
        header: {
            title: 'Quicket Solutions',
            date: 'Sep.2015 - June.2016',
            txt: 'Quicket Solutions is a cloud based e-ticket system which faster PD working processes.'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-sm img-center',
                            src: 'image/portfolio/quicket/quicket_logo.png',
                            alt: 'Quicket Solutions logo'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '<a href="https://www.quicketsolutions.com/qs/" target="_blank">Quicket Solutions</a> is a cloud based e-ticket system for Police Department. For many states ' +
                        'in the United States, PD are using hand writing methods to issue traffic violence tickets, ' +
                        'and manually track violence records of citizens and vehicles. However, this way is very low-efficient, ' +
                        'since most of the information are stored in main database in the PD offices. ' +
                        'The motivation of Quicket Solutions is to help police officers speed up their working processes by the leverage of computer technology.</p>' +
                        '<p>Quicket Solutions is a comprehensive cloud platform which keeps all information in one place. ' +
                        'Through mobile/tablet devices, officers could easily find records for vehicles or drivers, ' +
                        'assigning tickets in just a few taps and selections, and immediately upload updates to the system. ' +
                        'All the devices will be paired with a pocket printer which could print ticket on-site.</p>' +
                        '<p>It significantly reduced the efforts of keeping track of records, decreased the time of issuing tickets, ' +
                        'and increased the convenience of finding information. </p>' +
                        '<p>In 2015, Quicket Solutions won the finalist of Amazon\'s "City on the Cloud" award.'
                    }
                ]
            },
            {
                title: 'Contextual Inquiry',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'It is common for PD officers to issue traffic tickets from time to time. ' +
                        'The traditional style is to use paper-based tickets, take photos for evidence, ' +
                        'and manually input the information into database later. Even though officers are used to the old way, ' +
                        'we could easily find many inconveniences by using an example: '
                    },
                    {
                        type: 'txt',
                        class: 'col-1',
                        txt: ''
                    },
                    {
                        type: 'txt',
                        class: 'col-10',
                        txt: 'Suppose policy officer John Doe in Chicago district received a call one day around 9pm, ' +
                        'reporting an car window broken accident at White and 5th St. ' +
                        'He quickly went to the location and found out it was a normal car breaking issue. ' +
                        'A backpack with about $500 cash and a wallet full of Ids and credit cards was stolen. ' +
                        'This case was very common in this area, especially in night time. </p>' +
                        'He needed to record the accident so he took out a booklet and started to fill the information.' +
                        '<p>When he filled the form, he needed the following information: </p>' +
                        '<p>- Driver\'s identity (from driver\'s license)<br>' +
                        '- Vehicle information (license plate, model, etc.)<br>' +
                        '- Case information (date, location, lost value, etc.)<br>' +
                        '- Photos of the scene</p>' +
                        '<p>However, the driver\'s driving license was in the wallet and it was stolen, ' +
                        'and the driver does not have a photo copy of his license. So officer Doe has no way to verify driver\'d identity. </p>' +
                        'Moreover, when officer Doe returned to office and want to input the case information to their system, ' +
                        'he found he has too many scene photos in his camera and it was hard to tell which one was related to today\'s case.'
                    },
                    {
                        type: 'txt',
                        class: 'col-1',
                        txt: ''
                    },
                    {
                        type: 'img',
                        class: 'col-12 center-align',
                        img: {
                            style: 'img-md',
                            src: 'image/portfolio/quicket/difficulties.png',
                            alt: 'officer\'s difficulties'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Quicket Solutions was built to address officer\'s difficulties. ' +
                        'With a cloud-based system and easy-to-use UI, officers could record and sync violence information in just one minute.' +
                        'If we reconsider the above case in a Quicket context:'
                    },
                    {
                        type: 'txt',
                        class: 'col-1',
                        txt: ''
                    },
                    {
                        type: 'txt',
                        class: 'col-8',
                        txt: 'Even without a driver\'s license, officer could easily access driver\'s information because everything was stored in the cloud. ' +
                        'When he filled the information on an Android device, he could lookup for driver\'s information by search for his first and last name, or social security number. ' +
                        'Moreover, he could use the device to take photos for the case and would never confuse these photos with photos for other cases. ' +
                        'Finally, everything will be uploaded to the cloud immediately and he did not need to do anything after returning to the office.'
                    },
                    {
                        type: 'txt',
                        class: 'col-1',
                        txt: ''
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            src: '',
                            style: '',
                            alt: 'officer\'s solutions'
                        }
                    }
                ]
            },
            {
                title: 'Brainstorming',
                data: []
            },
            {
                title: 'Persona',
                data: []
            },
            {
                title: 'Storyboard',
                data: []
            },
            {
                title: 'Design Version_1.0',
                data: [
                    {
                        type: 'txt',
                        class: 'col-6',
                        txt: 'The company was founded in 2014. I joined the team when the product was still at its initial testing stage.' +
                        'I joined as a UI designer and developer, to help improve the e-ticket interface on Android tablet.</p>' +
                        'Before I joined there was already an initial version of the product. The whole application was built on .NET platform. ' +
                        'The first app version was very simple: we supported search, create, and view history functions. ' +
                        'When create ticket, we categorized tickets into different types: accident, over-speed, etc. ' +
                        'The ticket form was also straightforward, with a buch of key-value pairs. '
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-mdlg img-center',
                            src: 'image/portfolio/quicket/old_design.jpg',
                            alt: 'old design'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Even though the UI for the initial design was very straightforward and simple. ' +
                        'The first round of user testing was not going so well. From engineers mind, ' +
                        'a simple UI with necessary functionalists such as input form, drop down list, true-false toggle will be easy enough to use. ' +
                        'However, officers from PD were not satisfied with this design. They had been using paper-based tickets forms for years, ' +
                        'and they are very used to the form layout of paper-based tickets.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: '',
                            src: '',
                            alt: 'problems with the old design'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'After working back and forth with local PD officers in Champaign, ' +
                        'a group of 3-4 engineers had been delegated to work on creating the new design of the e-ticket system. ' +
                        'I was also part of the UI team, helping to redesign ticket input interface based on user feedback. '
                    }
                ]
            },
            {
                title: 'Critiques',
                data: []
            },
            {
                title: 'Design Version_2.0',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'We realize the major difficulties PD officers had when using the application were:'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: '- They found it was hard to navigate between pages, and find the desired tickets they need. <br>' +
                        '- They were not used to the UI layout. <br>' +
                        '- They complained that everything was re-organized and they could not locate information they need.'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-mdlg img-center',
                            src: 'image/portfolio/quicket/electronic_design.jpg',
                            alt: 'electronic design'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-6',
                        txt: 'With the feedback we received, we decided to re-design the UI as traditional paper-based ticket layout. ' +
                        'We tried our best to design the format as similar as possible to paper tickets, and made only tiny changes. ' +
                        'This approach solved the problem of "not used to the new layout". </p>' +
                        '<p>In order to address the problem of locating right kind of tickets they want to use, ' +
                        'we used a centralized navigation menu that made users to select ticket type first and then generate appropriate ticket format accordingly. ' +
                        'This approach solved the problem of "navigation problem". </p>' +
                        '<p>We also held regular knowledge transfer meetings with officers on teaching them the basics of Android devices, ' +
                        'and how to take pictures within the application.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The second round of user testing went very well, just as what we had expected. ' +
                        'It turned out this version was much more welcomed by officers. When I left the company, ' +
                        'our business was rapidly expanded, from Champaign to Chicago, and to some districts in Indiana. ' +
                        'I was so glad of increasing PD officers working proficiency and I was also pound of the work, ' +
                        'time and effort we spent on improving user experiences. </p>' +
                        '<p>My gain from this project was tremendous: I spent so much time directly contacting with users, ' +
                        'learning their feedback and complaints, and addressing their needs. ' +
                        'For the first time I was working on a user-centered product design, and had been through a very complete process of product iteration. ' +
                        'Being in a startup company also gave me a lot of perspectives no initial stage of product management. ' +
                        'The skills I built during this one-year working experience turned to be very useful in my future career.'
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
    'I designed for creativity and love, aiming ar bringing innovation and joy from ordinary. <br>' +
    'Currently I\' pursuing my master\'s degreen of Information Management and Systems in University of California, Berkeley.',
    resume: 'src/resume.pdf',
    path: 'I found my interests in HCI when I was still studying <b>Computer Engineering</b> in <a href="https://ece.illinois.edu/" target="_blank">University of Illinois at Urbana-Champaign</a>. ' +
    'In my junior year I took a class named <b>"User Interface Design"</b>, and that class changed my life. ' +
    'After finished the course I started to do research with my HCI professor, and learned a lot about processes of <b>UX research and UX design.</b></p>' +
    '<p>In <b>2015</b> I joined a startup company <a href="https://www.quicketsolutions.com/qs/" target="_blank">Quicket Solutions, Inc.</a> in Chicago. ' +
    'I worked as a UI engineer and UI designer. ' +
    'In Quicket I firstly applied the HCI knowledge I learned in class and research to real industrial use. ' +
    'I learned a lot about <b>user-centered product design</b> strategies. which aimed at improving user experiences using innovative design thinking skills.</p>' +
    '<p>In <b>2016</b> I joined <a href="https://search.yahoo.com/" target="_blank">Yahoo Inc.</a> and moved to California. ' +
    'I worked in Yahoo Search team as a software engineer, supporting search system development. ' +
    'In Yahoo I worked closely with UX researchers, designers, and product managers. ' +
    'I learned a lot about software design strategies and product iterations from my colleagues. ' +
    'Over the two years I designed and developed two internal tools for editors and engineers to config and debug search output. ' +
    'And I gradually feel my strong enthusiasm in <b>product design and product management</b>. </p>' +
    '<p>In <b>2018</b> I decided to return back to school, and begin pursuing my master\'s degree of <b>Information Management and Systems</b> in <a href="https://www.ischool.berkeley.edu/" target="_blank">Unersity of California, Berkeley</a>. '
};