/**
 * Created by jessielyu on 12/12/17.
 */

var thumbnails = {
    facepalm: {
        name: 'DALIAN(facepalm)',
        image: 'image/portfolio/thumbnail/dalian.png',
        href:'#dalian'
    },
    shopping: {
        name: 'LIVE SHOPPING',
        image: 'image/portfolio/thumbnail/shoppingLive.png',
        href:'#shoppingLive'
    },
    smartLock:{
        name: 'SMART LOCKER',
        image: 'image/portfolio/thumbnail/smartLock.png',
        href: '#smartLock'
    },
    educationGame:{
        name: 'EDUCATION GAMES',
        image: 'image/portfolio/thumbnail/educationGame.png',
        href: '#educationGame'
    },
    iEar:{
        name: 'IEAR',
        image: 'image/portfolio/thumbnail/iear.png',
        href: '#iEar'
    },
    movieLog:{
        name: 'MOVIE LOG',
        image: 'image/portfolio/thumbnail/movieLog.png',
        href: '#movieLog'
    },
    lait:{
        name: 'LAIT',
        image: 'image/portfolio/thumbnail/lait.png',
        href: '#lait'
    },
    projecto:{
        name: 'PROJECT(O)',
        image: 'image/portfolio/thumbnail/projecto.png',
        href: '#projecto'
    },
    habitTracker: {
        name: 'HABIT TRACKER',
        image: 'image/portfolio/thumbnail/habitTracker.png',
        href:'#habitTracker'
    },
    graphicDesign:{
        name: 'GRAPHIC DESIGN',
        image: 'image/portfolio/thumbnail/graphicDesign.png',
        href: '#graphicDesign'
    },
    scratch:{
        name: 'SCRATCH',
        image: 'image/portfolio/thumbnail/scratch.png',
        href: '#scratch'
    },
    photography:{
        name: 'PHOTOGRAPHY',
        image: 'image/portfolio/thumbnail/photography.png',
        href: '#photography'
    }
};

var modals = [
    {
        name: 'dalian',
        header: {
            title:'DALIAN',
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
                        '<p>Normally people receive information passively -- by television or internet -- that we people can only read content that has been created for them. </p>' +
                        '<p>Dalian is an App that users could create content themselves, with cited source and users\' own opinion. Other users could comment, thumbs-up/down, or create another post to repute the previous one. The purpose of Dalian is to build a user-generated content news platform, and form a community where everyone could freely express their ideas and thoughts.'
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
                        txt: '"My school work requires some knowledge of the latest news. I want to find a reliable source to get the information with less bias."'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'USER B',
                        subtitle: '24-year old software engineer from Mountain View, California',
                        txt: '"I love to read news while I am not coding. However, many news articles on internet, especially those regarding high-tech, are misleading and full of exaggeration. I want to find a place where information comes from real professionals."'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'USER C',
                        subtitle: '54-year old professor from Beijing, China',
                        txt: '"I think sometimes news content are deliberately misguiding people towards an opinion. I think this is not good for a student to form their critical thinking skills since they need to know different -- even opposite -- opinions to get a more comprehensive understanding."'
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
                        'Users could provide their insight on a recent news, explain some technology term, or repudiate a commonly accepted idea.'
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
                        title: 'Dalian should be a combination of knowledge sharing community and a news digestiong platform, with user-generated content.',
                        subtitle: 'The App need to support following basic functionalities: ',
                        txt: '1. Users could read all the content like a normal news digestion app. All the posts should be categorized and displayed title and abstraction on the main page, according to their content.<br>' +
                        '2. In each post detail page. Users could see: title, author, source(where the information comes from), abstraction, content(the basic content format is images or screenshots). And below the post body, there is a section for all the "dalian-post"(people cite other source to refute this post). User could also like, dislike, or comment on this post.<br>' +
                        '3. Upon click on each "dalian-post", app will direct user to a new post page, with all the information a post needs. So all the post-dalian-dalian again... could form a chain.<br>' +
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
            title:'Shopping Live',
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
                        txt: 'People\'s shopping habits have undergone tremendous changes with globalization and hi-tech. Consumers nowadays could shop for products over the world online or in store.</p>' +
                        '<p>As shopping becomes easier for everyone, doing shopping business also becomes easier. More small parties and individuals get involved in online shopping business, and various type of shopping patterns has emerged.</p>' +
                        '<p>One shopping pattern is the buyers pattern. Generally, for products that is not accessible by either online or real shops, consumers could still buy the products through some third-party -- buyers. They serve as a media or intermediate step since they have access to both goods and consumers. </p>' +
                        '<p>Live shopping is an App for buyers and consumers. By providing a platform with Live Streaming, buyers could post their services for consumers. When doing merchandise, consumers could make choices at real-time. At the same time, the App could make third-party shopping more trustful and reliable.'
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
                        title: 'Since the app also integrates the functionality of live video streaming, so it should also supports: ',
                        txt: '1. There should be a button to direct users to current live video streaming event.<br>' +
                        '2. On the main page, users could find information about upcoming shopping events.<br>' +
                        '3. Users should be able to make purchases inside videa streaming, the screen should have a popup window about the current shopping product.<br>'
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
        name: 'smartLock',
        header: {
            title:'Smart Lock',
            date: 'January.2016 - May.2016',
            txt: 'Wifi, NFC, Knock Enabled Smart Lock Device'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Team members: Yuki Dong, Boyu Li',
                        txt: 'Smart Lock is a lock device that embedded multiple ways of unlock the door. It could be opened using NFC card, knock pattern, or mobile app. Controlled by a microcontroller, it provides convenient ways for people to open the door.</p>' +
                        'The main purpose of Smart Lock is to free people from physical keys and provides them with more backup opening choices.'
                    }
                ]

            },
            {
                title: 'Useage scenarios',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Their are many practical usage scenarios for the device:',
                        txt: '1. When host want to remotely open the door for someone, he/she could open it using web app through Wi-Fi. </p>' +
                        '<p>2. When host want to share/revoke access, he/she could either share the secret knocking pattern, or hand out a set of username and passcode through the web app. </p>' +
                        '<p>3. For host himself, he could use NFC card to open the door fast and conveniently.</p>' +
                        '<p>4. In case that any of the above unlock method is not working, there are always other options, ie, if someone forgets the cellphone, or phone is out of power, or the NFC card is lost, he/she could always unlock by knocking a specific pattern.</p>' +
                        '<p>5. The easy mobile guest management system is benefit to hosts who have multiple properties, ie. the Airbnb hosts.'
                    }
                ]
            },
            {
                title: 'Design Flow Chart',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/smartLock/flowchart.png',
                            alt: 'flowchart'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'We choose Arduino as the microcontroller, with Wifi shield for easy wifi connection and access. We connected NFC chip for card opening and buzzer for knock pattern opening.'
                    }
                ]
            },
            {
                title: 'UI Design',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            src: 'image/portfolio/smartLock/ui_flowchart.png',
                            alt: 'ui_flow',
                            style: 'span'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'UI Flow',
                        txt: 'Through Wi-Fi connection, the user can use their mobile phone to log into the web app to send unlock signal (a special character that will be read by wifi module) to the microcontroller. And as long as the microcontroller reads the matching encoded character, it will set specific digital pin to high and retract the solenoid which unlocks the door. </p>' +
                        '<p>Besides the functionality to control locks, users can also use the app to monitor activities of the lock, for example who has unlocked the door at what time. The app also allows user to manage access of their lock. On the app, if the user is logged in as host, he or she will see an interface where the host can pick any of their friends and families and give them access or revoke their access. It is also possible to schedule the access for specific day and time for extra safety. </p>' +
                        '<p>Once the host adds a guest to list, he/she created a set of username and password for the guest. These information is sent to the guest’s email address automatically through PHP request, and the guest can then use the given username and password in email to log in to the app and control the lock. The web app is built with HTML and PHP, so it can be easily accessed through any web browser on any platform including desktop and mobile phone.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Selected UI'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/smartLock/ui1.png',
                            alt: 'ui1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/smartLock/ui2.png',
                            alt: 'ui2'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'educationGame',
        header: {
            title:'Education Games',
            date: 'January.2015 - December.2015',
            txt: 'Game Serious for Kids'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class :'col-12',
                        txt: 'This was a joint project based in University of Illinois, Urbana-Champaign. The project is aimed at using computer technologies to create educational games for children and teenagers from age 6-16. The project is hold by Education Department and Computer Science Department.'
                    }
                ]
            },
            {
                title: '3D Unity Energy Game',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'This is a 3D game for elementary school kids to understand energy transfer among objects.</p>' +
                            '<p>Started from brainstorming, we first came up with the idea of using a rolling ball to illustrate energy transfer. After implementing a few levels we did the initial testing. However, kids did not really like the boring ball bouncing on the floor or rolling down the ramp. So we changed our game context: A robot escape from factory.'
                    },
                    {
                        type: 'txt',
                        class: 'col-6',
                        txt: 'The basic storyline was: A robot woke up alone in a factory and found everything was on fire. Alarming was going off and he needed to escape the factory in 5 min. There were totally two rooms(levels): in the first room he needed to climb the wall and jump down to a spring to escape; in the second level he needed to roll a boat to cross a room with water and open the door. There was an energy bar on top of the screen to show a direct energy transfer process.</p>' +
                        '<p>Around June we did the second testing and this time seemed all kids liked the "game of robot". We finally displayed the game in Children Museum in Indianapolis.'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/educationalGames/robot.jpg'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Selected UI'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/educationalGames/unity3d.png',
                            alt: 'unity3D'
                        }
                    }
                ]
            },
            {
                title: '2D Unity Puzzle Games',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'These two games were created for kids to practice their logic thinking skills. </p>' +
                            '<p>The first game was called "Tile_puzzle": players needed to control the character to go through all the blocks without repeating path or hitting any obstacles. </p>' +
                            '<p>The second game was called "Ice Block Puzzle": players needed to control three ice blocks to make one of them finally stay at the center position. Ice blocks would continue slipping to the edge until meet some obstacles. '
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/educationalGames/unity2d2.png',
                            alt: 'unity2d2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/educationalGames/unity2d1.png',
                            alt: 'unity2d1'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Playable webversions could be found on my github: '
                    },
                    {
                        type: 'link',
                        class: 'col-12',
                        link: {
                            href: 'https://github.com/jessielyu/Tile_Puzzle/tree/master/Tile_Puzzle/Tile%20Puzzle/WebGame',
                            title: 'Tile Puzzle'
                        }
                    },
                    {
                        type: 'link',
                        class: 'col-12',
                        link: {
                            href: 'https://github.com/jessielyu/ICE_BLOCK_PUZZLE/tree/master/WebVersion2.0',
                            title: 'Ice Block Puzzle'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'iEar',
        header: {
            title:'iEar',
            date: 'January.2015 - May.2015',
            txt: 'UI for Earpods Customization'
        },
        sections: [
            {
                title:'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Team members : Yuki Dong, Emma He, Amy Chen, Bobby Zhang',
                        txt: 'iEar is a class project, and is also the initial website for a startup company called OmniEar. iEar is based on the idea of earpods customization. The website provides an interactive UI for clients to personalized their earpods. Functionalities include: upload photos of ears, choose earpods chip configuration, visual customization, and place an order.</p>' +
                        'The initial version only supports simple customization for earpods, the future enhancement includes: 3D model, and earpods shape construction according to ears.'
                    }
                ]
            },
            {
                title: 'UI Sketch',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/iEar/uisketch1.jpg',
                            alt: 'uicketch1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/iEar/uisketch2.jpg',
                            alt: 'uicketch2'
                        }
                    }
                ]
            },
            {
                title: 'Interface Design',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/iEar/iear.jpg',
                            alt: 'interface'
                        }
                    }
                ]
            },
            {
                title: 'Selected UI',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/iEar/iear1.png',
                            alt: 'iear1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/iEar/iear2.png',
                            alt: 'iear2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/iEar/iear3.png',
                            alt: 'iear3'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/iEar/iear4.png',
                            alt: 'iear4'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'movieLog',
        header: {
            title:'Movie Log',
            date: 'March.2016',
            txt: 'Personalized Movie Journal'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Team member : Tianyilin Zhu',
                        txt: 'MovieLog is a Hackthon project, created in Feb 2016 in Hack Illinois. The website allows users to log their movie watching history. It has a small add-on feature that it could recommend movies based on user movie journal.</p>' +
                        '<p>We want to build a journal webapp to record important life moments by uploading your photos to our website. When uploading your photos, you will add some tags, then our app can recommend movies according to these tags. CSG\'s Ascendon API allows us to get the data for the movies.'
                    }
                ]
            },
            {
                title: 'Selected UI',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/movieLog/movie1.png',
                            alt: 'movie1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/movieLog/movie2.png',
                            alt: 'movie2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/movieLog/movie3.png',
                            alt: 'movie3'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/movieLog/movie4.png',
                            alt: 'movie4'
                        }
                    }
                ]
            },
            {
                title: 'Link to Website',
                data: [
                    {
                        type: 'link',
                        class: 'col-12',
                        link: {
                            href: 'http://web.engr.illinois.edu/~tzhu13/',
                            title: 'Movie for The Moment'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'lait',
        header: {
            title:'LAIT',
            date: 'Sep.2015 - May.2016',
            txt: 'Audience-Performer Interaction App '
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Professor : John Toenjes',
                        txt: 'The Laboratory for Audience Interactive Technologies (LAIT) has been established to research and develop applications for personal mobile devices for use in live performance. The lab is based on National Center for Supercomputing Application(NCSA) in UIUC. I worked as the UI developer for the mobile app from 2015-2016.</p>' +
                        'Hosts could specify some user interactions at certain point, users could get into the event by selecting from the events list. The interaction could be various types, like turn on the light or play some music.'
                    }
                ]
            },
            {
                title: 'Selected UI',
                data: [
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/lait/lait1.png',
                            alt: 'lait1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/lait/lait2.png',
                            alt: 'lait2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/lait/lait3.png',
                            alt: 'lait3'
                        }
                    }
                ]
            },
            {
                title: 'Prototyping',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/lait/menu.gif',
                            alt: 'menu.gif'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/lait/sort.gif',
                            alt: 'sort.gif'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/lait/attend-event.gif',
                            alt: 'attend-event.gif'
                        }
                    }
                ]
            },
            {
                title: 'Reference',
                data: [
                    {
                        type: 'link',
                        class: 'col-12',
                        link: {
                            href: 'http://lait.ncsa.illinois.edu/about_lait/',
                            title: 'LAIT UIUC'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'projecto',
        header: {
            title: 'Poject(o)',
            date: 'Sep.2015 - Dec.2015',
            txt: 'PC Customization'
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Team: Yuki Dong, Guangyuan Wang, Dage Niu',
                        txt: 'Project(o) is a website for computer PC recommendation. Users could specify some customization to their PC, like price range, CPU or Memory, and get a list of recommendation based on their preference. </p>' +
                        '<p>Users could also login to their account to see their build history. </p>' +
                        '<p>The idea of the UI is based on early computer operating systems, which mimic shell and terminal interface.'
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
                            src: 'image/portfolio/projecto/projecto1.jpg',
                            style: 'span',
                            alt: 'projecto1'
                        }
                    }
                ]
            },
            {
                title: 'Link to Website',
                data: [
                    {
                        type: 'link',
                        class: 'col-12',
                        link: {
                            href: 'http://projecto1.web.engr.illinois.edu/',
                            title: 'Project(o)'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'habitTracker',
        header: {
            title:'Habit Tracker',
            date: 'Dec.2017 - Now'
        }
    },
    {
        name: 'graphicDesign',
        header: {
            title:'Graphic Design'
        },
        sections: [
            {
                title: 'Sarah Illenberger',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Sarah Illenberger is a Berlin-based artist, illustrator and designer. These two posters are for the art exhibition in University of Illinois, 2016. The idea of these posters are based on two of her famous art work: trendgemuese.'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/graphicDesign/si1-800.png',
                            alt: 'sli1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/graphicDesign/si2-800.png',
                            alt: 'sli2'
                        }
                    }
                ]
            },
            {
                title: 'UniCal',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Unical is a poster for a campus-wide events schedule app. The poster is calendar-style with important information on selected date.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/graphicDesign/unical-800.png',
                            alt: 'unical'
                        }
                    }
                ]
            },
            {
                title: 'Calendar 2017',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'This calendar is designed for home decor. All the icons are created by myself.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/graphicDesign/calendar2017-800.png',
                            alt: 'calendar2017'
                        }
                    }
                ]
            },
            {
                title: 'Food Quotes',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'This poster is for kitchen decor.'
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/graphicDesign/food-800.png',
                            alt: 'food'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'scratch',
        header: {
            title:'Conceptual Drawings & Illustrations'
        },
        sections: [
            {
                title: 'Ladies',
                data: [
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/scratch/lady1.jpg',
                            alt: 'lady1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/scratch/lady2.jpg',
                            alt: 'lady2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/scratch/lady3.jpg',
                            alt: 'lady3'
                        }
                    }
                ]
            },
            {
                title: 'Couples',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/scratch/couple1.jpg',
                            alt: 'couple1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/scratch/couple2.jpg',
                            alt: 'couple2'
                        }
                    }
                ]
            },
            {
                title: 'Lazy Panda',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/scratch/panda.jpg',
                            alt: 'panda'
                        }
                    }
                ]
            },
            {
                title: 'Icons',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'img-md img-center',
                            src: 'image/portfolio/scratch/iconDesign.jpg',
                            alt: 'iconDesign'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'photography',
        header: {
            title:'Photography'
        },
        sections: [
            {
                title: 'B & W',
                data: [
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/bw1-800.jpg',
                            alt: 'bw1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/bw2-800.jpg',
                            alt: 'bw2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/bw3-800.jpg',
                            alt: 'bw3'
                        }
                    }
                ]
            },
            {
                title: 'Cities',
                data: [
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/ca1-800.jpg',
                            alt: 'ca1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/ca2-800.jpg',
                            alt: 'ca2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/ny1-800.jpg',
                            alt: 'ny1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/ny2-800.jpg',
                            alt: 'ny2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/photography/ny3-800.jpg',
                            alt: 'ny3'
                        }
                    }
                ]
            }
        ]
    }
];

var about = {
    subtitle: 'I am a full-time software engineer and a half-time designer. ',
    intro: 'I specialize in Web/Mobile development, with experience in designing, programming and prototyping. ',
    profile: 'image/profilepic-800.png',
    resume: 'src/JessieResume.pdf',
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
        school: 'University of Illinois, Urbana-Champaign',
        year: '2012-2016',
        major: 'B.S. Computer Engineering',
        minor: 'Mathematics',
        logo: 'image/about/education.png'
    },
    work: {
        experience: [
            {
                company: 'Yahoo, Inc.',
                location: 'Sunnyvale, CA',
                year: '2016-now',
                position: 'Software Engineer, Assoc.',
                desc: 'Search Middleware & internal tool development.'
            },
            {
                company: 'Quicket Solutions, Inc.',
                location: 'Champaign, IL',
                year: '2015-2016',
                position: 'Software Enginner',
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