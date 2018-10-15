/**
 * Created by jessielyu on 7/10/18.
 */
const thumbnails = {
    dmvRedesign: {
        name: 'DMV Schedule System Redesign',
        image: 'image/portfolio/thumbnail/dmvRedesign.png',
        href: '#dmvRedesign'
    },
    taskMate: {
        name: 'Task Mate IOS Application',
        image: 'image/portfolio/thumbnail/taskMate.png',
        href: '#taskMate'
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
        name: 'Yahoo! Wizard Tool',
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
            txt: 'Creative News Digestion APP'
        },
        sections: [
            {
                title: 'Coming Soon >_<'
            }
        ]
        // sections: [
        //     {
        //         title: 'Introduction',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'Dalian App is used to change the traditional way people digest news everyday. </p>' +
        //                 '<p>Normally people receive information passively -- by television or internet -- that ' +
        //                 'we people can only read content that has been created for them. </p>' +
        //                 '<p>Dalian is an App that users could create content themselves, with cited source and users\' ' +
        //                 'own opinion. Other users could comment, thumbs-up/down, or create another post to repute the ' +
        //                 'previous one. The purpose of Dalian is to build a user-generated content news platform, and form ' +
        //                 'a community where everyone could freely express their ideas and thoughts.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Our Team',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'img-sm-round img-center',
        //                     src: 'image/portfolio/dalianApp/Jessie_profile.jpg',
        //                     alt: 'jessie profile'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'img-sm-round img-center',
        //                     src: 'image/portfolio/dalianApp/Qi_profile.jpg',
        //                     alt: 'qi profile'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-6 center-align',
        //                 title: 'Jessie Lyu',
        //                 subtitle: 'Designer & Prototyping'
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-6 center-align',
        //                 title: 'Qi Liu',
        //                 subtitle: 'Programmer & Product Management'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'User Interview',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'USER A',
        //                 subtitle: '13-year old student from Chengdu, China',
        //                 txt: '"My school work requires some knowledge of the latest news. I want to find a reliable source ' +
        //                 'to get the information with less bias."'
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'USER B',
        //                 subtitle: '24-year old software engineer from Mountain View, California',
        //                 txt: '"I love to read news while I am not coding. However, many news articles on internet, especially ' +
        //                 'those regarding high-tech, are misleading and full of exaggeration. I want to find a place where ' +
        //                 'information comes from real professionals."'
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'USER C',
        //                 subtitle: '54-year old professor from Beijing, China',
        //                 txt: '"I think sometimes news content are deliberately misguiding people towards an opinion. I ' +
        //                 'think this is not good for a student to form their critical thinking skills since they need to ' +
        //                 'know different -- even opposite -- opinions to get a more comprehensive understanding."'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Competitors',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'img-sm img-center',
        //                     src: 'image/portfolio/dalianApp/zhihu.png',
        //                     alt: 'zhihu logo'
        //                 }
        //
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-9',
        //                 title: 'Zhihu',
        //                 txt: 'Zhihu is a community for users to share their knowledge.<br>' +
        //                 'Users could provide their insight on a recent news, explain some technology term, or repudiate ' +
        //                 'a commonly accepted idea.'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     src: 'image/portfolio/dalianApp/wangyi.png',
        //                     alt: 'wangyi logo',
        //                     style: 'img-sm img-center'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-9',
        //                 title: 'Wangyi',
        //                 txt: 'Wangyi News is the most popular news app in China. <br>' +
        //                 'The content covers various areas from politics to entertainment.<br>' +
        //                 'Content continues to refresh 24/7.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Brainstorming',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/wireframe.jpg',
        //                     alt: 'wireframe'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Dalian should be a combination of knowledge sharing community and a news digestion platform, ' +
        //                 'with user-generated content.',
        //                 subtitle: 'The App need to support following basic functionality: ',
        //                 txt: '1. Users could read all the content like a normal news digestion app. All the posts should be ' +
        //                 'categorized and displayed title and abstraction on the main page, according to their content.<br>' +
        //                 '2. In each post detail page. Users could see: title, author, source(where the information comes from), ' +
        //                 'abstraction, content(the basic content format is images or screenshots). And below the post body, ' +
        //                 'there is a section for all the "dalian-post"(people cite other source to refute this post). ' +
        //                 'User could also like, dislike, or comment on this post.<br>' +
        //                 '3. Upon click on each "dalian-post", app will direct user to a new post page, with all the information a post needs. ' +
        //                 'So all the post-dalian-dalian again... could form a chain.<br>' +
        //                 '4. User should login to create post or respond to an existing post.<br>' +
        //                 '5. On user profile page, we should list this user post history, dalian history, comments number, etc.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'UI Sketch',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/uisketch.jpg',
        //                     alt: 'UI sketch'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Revision History',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Version 1.0'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version1.1.jpg',
        //                     alt: 'vision1.1.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version1.2.jpg',
        //                     alt: 'vision1.2.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Version 2.0'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version2.1.jpg',
        //                     alt: 'vision2.1.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version2.2.jpg',
        //                     alt: 'vision2.2.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Version 3.0'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version3.1.jpg',
        //                     alt: 'vision3.1.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version3.2.jpg',
        //                     alt: 'vision3.2.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Version 4.0'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version4.1.jpg',
        //                     alt: 'vision4.1.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/version4.2.jpg',
        //                     alt: 'vision4.2.jpg'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Selected UI',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img0.png',
        //                     alt: 'img0'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img1.png',
        //                     alt: 'img1'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img2.png',
        //                     alt: 'img2'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img3.png',
        //                     alt: 'img3'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img4.png',
        //                     alt: 'img4'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img5.png',
        //                     alt: 'img6'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img6.png',
        //                     alt: 'img6'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img7.png',
        //                     alt: 'img7'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img8.png',
        //                     alt: 'img8'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img9.png',
        //                     alt: 'img9'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img10.png',
        //                     alt: 'img10'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/dalianApp/img11.png',
        //                     alt: 'img11'
        //                 }
        //             }
        //         ]
        //     }
        // ]
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
                title: 'Coming Soon >_<'
            }
        ]
        // sections: [
        //     {
        //         title: 'Introduction',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'People\'s shopping habits have undergone tremendous changes with globalization and hi-tech. ' +
        //                 'Consumers nowadays could shop for products over the world online or in store.</p>' +
        //                 '<p>As shopping becomes easier for everyone, doing shopping business also becomes easier. ' +
        //                 'More small parties and individuals get involved in online shopping business, and various type of shopping patterns has emerged.</p>' +
        //                 '<p>One shopping pattern is the buyers pattern. Generally, for products that is not accessible by either online or real shops, ' +
        //                 'consumers could still buy the products through some third-party -- buyers. ' +
        //                 'They serve as a media or intermediate step since they have access to both goods and consumers. </p>' +
        //                 '<p>Live shopping is an App for buyers and consumers. By providing a platform with Live Streaming, ' +
        //                 'buyers could post their services for consumers. When doing merchandise, consumers could make choices at real-time. ' +
        //                 'At the same time, the App could make third-party shopping more trustful and reliable.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Brainstorming',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/shoppingApp/brainstorming.jpg',
        //                     alt: 'brainstorm.jpg'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Our app should have functions of a normal shopping App:',
        //                 txt: '1. Users could browse product lists and see product description, price, style, etc. <br>' +
        //                 '2. Users could add products to shopping cart, fill address form, make payment, etc. <br>' +
        //                 '3. Users could login to see order history, saved payment methods, address book, etc. <br>'
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Since the app also integrates the functionality of live video streaming, so it should ' +
        //                 'also supports: ',
        //                 txt: '1. There should be a button to direct users to current live video streaming event.<br>' +
        //                 '2. On the main page, users could find information about upcoming shopping events.<br>' +
        //                 '3. Users should be able to make purchases inside video streaming, the screen should have a ' +
        //                 'popup window about the current shopping product.<br>'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'UI Sketch',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/shoppingApp/uisketch.jpg',
        //                     alt: 'uisketch.jpg'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Wireframe',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/shoppingApp/wireframe.png',
        //                     alt: 'wireframe'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Prototyping',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/shoppingApp/img1.gif',
        //                     alt: 'img1'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/shoppingApp/img3.gif',
        //                     alt: 'img3'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/shoppingApp/img4.gif',
        //                     alt: 'img4'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/shoppingApp/img6.gif',
        //                     alt: 'img6'
        //                 }
        //             }
        //         ]
        //     }
        // ]
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
                title: 'Coming Soon >_<'
            }
        ]
        // sections: [
        //     {
        //         title: 'Project Proposal',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'We face so many distractions when we trying to finish a task. Various attractions such as cell-phone, ' +
        //                 'computer games, fast food...make it harder to reach goals like study for an hour, or lose 10 pounds, etc.</p>' +
        //                 '<p>I figured out that goal/task accomplishing difficulty has became a major problem in people from all ages, ' +
        //                 'especially young people from 15 - 40. However, it’s critical for everybody to set up different ' +
        //                 'type of goals and try to reach them, in order to improve his own skill set and abilities. ' +
        //                 'So it’s important to find a way to help people finishing tasks and accomplishing goals efficiently.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'User Research',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'I’ve conducted comprehensive surveys to people from 20 - 50, and among 50 responses I received, I found most people prefer to:</p>' +
        //                 '<p>1. Setup medium-detailed plan such as: lose 10 pounds in a month(not as detailed as daily diet menu), or study CFA 3 times/week.<br>' +
        //                 '2. Adjust the goals according to the progress. For example, if the initial goal is to study CFA 3 times/week but the person is too busy, ' +
        //                 'then he will change the goal to 2 times/week.</p>' +
        //                 '<p>And their major reasons for “goal/task accomplishing difficulty” are:'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-mini img-center',
        //                     src: 'image/portfolio/taskMate/difficulties.png',
        //                     alt: 'difficulties'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'Most people is willing to try a mobile/desktop application to help them increase their task performing efficiency and goal accomplishing rate. ' +
        //                 'Based on the result of user surveys, I think it would be helpful if an application could support the following functionalities:'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-center img-mdlg',
        //                     src: 'image/portfolio/taskMate/research_result.png',
        //                     alt: 'user research result'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'So I propose to build an mobile application to help people accomplishing their goals and finishing their tasks with the above functionalities.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Competitive Analysis',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'img-sm-round img-center',
        //                     src: 'image/portfolio/taskMate/streaks.png',
        //                     alt: 'streaks'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'img-sm-round img-center',
        //                     src: 'image/portfolio/taskMate/strides.png',
        //                     alt: 'strides'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'img-sm-round img-center',
        //                     src: 'image/portfolio/taskMate/wunderlist.png',
        //                     alt: 'wunderlist'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-3',
        //                 img: {
        //                     style: 'img-sm-round img-center',
        //                     src: 'image/portfolio/taskMate/today.png',
        //                     alt: 'today'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-3 center-align',
        //                 subtitle: 'Streaks'
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-3 center-align',
        //                 subtitle: 'Strides'
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-3 center-align',
        //                 subtitle: 'Wunderlist'
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-3 center-align',
        //                 subtitle: 'Today'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-mdlg img-center',
        //                     src: 'image/portfolio/taskMate/compare_table.png',
        //                     alt: 'comparison table'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Brainstorming',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-center img-mdlg',
        //                     src: 'image/portfolio/taskMate/page_relationship.png',
        //                     alt: 'page relationship'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12 center-align',
        //                 subtitle: 'Page Relationship'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Information Organization',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 subtitle: 'Task Page Organization'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-center img-mdlg',
        //                     src: 'image/portfolio/taskMate/task_page_organization.png',
        //                     alt: 'Task Page Organization'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 subtitle: 'Community Page Organization'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-center img-md',
        //                     src: 'image/portfolio/taskMate/community_page_organization.png',
        //                     alt: 'Community Page Organization'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 subtitle: 'Profile Page Organization'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-center img-md',
        //                     src: 'image/portfolio/taskMate/profile_page_organization.png',
        //                     alt: 'Profile Page Organization'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Prototyping',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'img-lg',
        //                     src: 'image/portfolio/taskMate/prototype1.gif',
        //                     alt: 'prototype 1'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'img-lg',
        //                     src: 'image/portfolio/taskMate/prototype2.gif',
        //                     alt: 'prototype 1'
        //                 }
        //             }
        //         ]
        //     }
        // ]
    },
    {
        name: 'laishuati',
        header: {
            title: 'laishuati',
            date: 'Jan.2018 - Mar.2018',
            txt: 'UX design'
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
            title: 'DMV Schedule System Redesign',
            date: 'September.2018',
            txt: 'UX Researcher | UX Designer',
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
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center',
                            src: 'image/portfolio/dmvRedesign/task_analysis.png',
                            alt: 'task_analysis'
                        }
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
            txt: 'UX Designer | Full-stack Engineer',
            header_img: '<img src="image/portfolio/visionTool/header_img.png" class="header_img">'
        },
        sections: [
            {
                title: 'Overview',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Vision tool is an internal tool built for debugging Yahoo search system. The debugging process of Yahoo search system was overly complicated before the tool was launched. The goal of Vision tool was to build a stand-alone web application that facilitates debugging speed and debugging convenience for Yahoo search developers.'
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
                        txt: 'Before Vision tool was introduced, people picked up different methods of debugging based on their technical backgrounds. Debugging processes varies from designers to engineers, and there was no unified debugging platform that could be used by everyone.</p>' +
                        '<p>The difficulty of debugging had increased dramatically as the complexity of the search system grew. According to early project survey, on average people needed to spend too much time and effort on debugging.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-sm padding-sm',
                            src: 'image/portfolio/visionTool/old_data.png',
                            alt: 'old data'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The most common ways for debugging were leveraging on browser inspector (like Chrome inspector), using built-in IDE debugging tool, and reading runtime logging files. None of them had complete debugging dataset which could be used by everyone, and some of them required in-depth knowledge on technical aspects of the search system, which was not applicable to non-tech people like PMs.'
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
                        type: 'txt',
                        class: 'col-8',
                        txt: 'The goals of Vision tool were simple -- build a unified debugging platform accommodating people of various background.'
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
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Target users'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Everyone in Search team who need to debug the system, including UI designer, content editors, system engineers, and product managers.'
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
                        txt: 'User Researcher | Information Architecture | UX Designer | Full-stack Engineer'
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
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/visionTool/persona_1.png',
                            alt: 'avatar_1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/visionTool/persona_2.png',
                            alt: 'avatar_1'
                        }
                    }
                ]
            },
            {
                title: 'Interface Design',
                data: [
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Page layout'
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
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Theme color'
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
                        txt: 'I designed three types of data visualization, based on the purpose of debugging:'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Json Format'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/json_format.png',
                            alt: 'json format'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-6',
                        txt: '<b>Pros:</b><br>' +
                        '&middot Easy to process and render (no need for 2nd-time data parsing)<br>' +
                        '&middot Indicate information structure<br>' +
                        '&middot Could display a large quantity of data</p>' +
                        '<p><b>Cons:</b><br>' +
                        '&middot Machine level language<br>' +
                        '&middot Require system familiarity and technical knowledge<br>' +
                        '&middot Information overload</p>' +
                        '<p><b>Usage Scenarios:</b><br>' +
                        '&middot Work as a complete data reference'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Table Format'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/table_format.png',
                            alt: 'table format'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-6',
                        txt: '<b>Pros:</b><br>' +
                        '&middot Straightforward view of overall search status, used different colors to indicate the condition<br>' +
                        '&middot Details will be hidden by default, and expanded upon click, reducing page information overload</p>' +
                        '<p><b>Cons:</b><br>' +
                        '&middot Limited information displayed<br>' +
                        '&middot Information overload</p>' +
                        '<p><b>Usage Scenarios:</b><br>' +
                        '&middot Display relatively independent node information'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h4',
                        header_txt: 'Graph Format'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'img-center img-md padding-sm',
                            src: 'image/portfolio/visionTool/graph_format.png',
                            alt: 'graph format'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-6',
                        txt: '<b>Pros:</b><br>' +
                        '&middot Succinct and intuitive<br>' +
                        '&middot Very human readable<br>' +
                        '&middot Good to show relationships, flow, percentage, etc.</p>' +
                        '<p><b>Cons:</b><br>' +
                        '&middot Limited information displayed<br>' +
                        '&middot Requires more data processing time before rendering, causing display delay</p>' +
                        '<p><b>Usage Scenarios:</b><br>' +
                        '&middot System overall performance<br>' +
                        '&middot Search flow<br>' +
                        '&middot Latencies, time and storage consumptions<br>' +
                        '&middot Error rate'
                    }
                ]
            },
            {
                title: 'Selected UI',
                data: [
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
                        txt: 'With the function of query update and header update. This will also be the landing page of the tool.'
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
                        txt: 'With information on individual output modules on the search result page.'
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
                        txt: 'With a column chart to indicate relative latencies of each search method.'
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
                        txt: 'Shows overall search flow and data transformation.'
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
                title: 'Impact',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'The tool was quickly been used by a large number of developers among the search team after it was released.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-smmd img-center padding-md',
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
                        txt: 'Through this project, I learned how to study users and design product addressing user needs. My user research skills were greatly improved through the project. I also learned different methods of data visualization, and their pros and cons. This experience was also one of my major motivations to study HCI in the future.'
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
                title: 'Coming Soon >_<'
            }
        ]
        // sections: [
        //     {
        //         title: 'Introduction',
        //         data: [
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'img-sm',
        //                     src: 'image/portfolio/visionTool/yahoo_logo.png',
        //                     alt: 'Yahoo! logo'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'img-sm',
        //                     src: 'image/portfolio/visionTool/yahoo_logo.png',
        //                     alt: 'Yahoo! logo'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'Wizard Tool is an internal configuration tool for Yahoo Search. It is widely used by both developers and editors. ' +
        //                 'The main purpose of Wizard Tool is to transform raw data to UI output with text, title, images, etc. ' +
        //                 'I designed and developed Wizard Triggering Tool, which is focus on user intent to data source, and to output template mapping.</p>' +
        //                 '<p>Every user request from Search frontend will be analyzed through Yahoo NLP algorithm, ' +
        //                 'then each query will be reduced to a list of Intents. An Intent could trigger one or more backends, ' +
        //                 'which will then return data for frontend to render. Most of the Intent->Backend mapping is done by developers and editors, ' +
        //                 'who manually define a certain intent could trigger some specific backends. ' +
        //                 'Triggering Tool could help users easily config those mappings.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Information Organization',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'A complete triggering chain is composed of Rule, UseCase, and Domain. Rule and UseCase should all belong to a certain Domain. ' +
        //                 'A Rule defines triggering pattern, which configs how a data could be formatted. All data is coming from feeds. ' +
        //                 'A UseCase is used to select data for a template, which will be used for frontend rendering. ' +
        //                 'A Rule could be used by many UseCases for their data selection.'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-mdlg img-center',
        //                     src: 'image/portfolio/wizardTool/information_organization.png',
        //                     alt: 'Information Organization'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'User Workflow',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'I anticipated how a user would use this tool for a triggering configuration. '
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'img-lg img-center',
        //                     src: 'image/portfolio/wizardTool/user_flow.png',
        //                     alt: 'User Workflow'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 txt: 'Users would first create or select a Domain, and under this Domain, users will create/edit a UseCase. ' +
        //                 'For each UseCase, a user should be able to select a Rule under current Domain. If a Rule is not available, ' +
        //                 'a user could go to Rule page to create a new one. Users could also update an existing Rule. ' +
        //                 'The tool also have Conflicts section which specify priority of UseCases in same page region. ' +
        //                 'Once a user finish all the changes, he should be able to publish triggering chain to a dimension.'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Storyboard',
        //         data: []
        //     },
        //     {
        //         title: 'UI Design',
        //         data: [
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Overview Pages'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span img-center',
        //                     src: 'image/portfolio/wizardTool/DomainView Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span img-center',
        //                     src: 'image/portfolio/wizardTool/UseCaseView Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span img-center',
        //                     src: 'image/portfolio/wizardTool/DispatchConflictsView Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span img-center',
        //                     src: 'image/portfolio/wizardTool/DisplayConflictsView Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span img-center',
        //                     src: 'image/portfolio/wizardTool/RuleView Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-6',
        //                 img: {
        //                     style: 'span img-center',
        //                     src: 'image/portfolio/wizardTool/Publisher Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'txt',
        //                 class: 'col-12',
        //                 title: 'Create Entity Pages'
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/wizardTool/CreateDomain Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/wizardTool/CreateUC Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/wizardTool/CreateRule Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/wizardTool/CreateDiaplayConflicts Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             },
        //             {
        //                 type: 'img',
        //                 class: 'col-12',
        //                 img: {
        //                     style: 'span',
        //                     src: 'image/portfolio/wizardTool/CreatePublisher Retina.png',
        //                     alt: 'UI Design'
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Feedback',
        //         data: []
        //     }
        // ]
    },
    {
        name: 'quicket',
        header: {
            title: 'Quicket Solutions',
            date: 'Sep.2015 - June.2016',
            txt: 'UX Designer | Frontend Developer',
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
                            style: 'img-center img-lg padding-sm',
                            src: 'image/portfolio/quicket/persona.png',
                            alt: 'Persona'
                        }
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Storyboard'
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
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'User Testing'
                    },
                    {
                        type: 'header',
                        class: 'col-12',
                        header_class: 'h3',
                        header_txt: 'Final Design'
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