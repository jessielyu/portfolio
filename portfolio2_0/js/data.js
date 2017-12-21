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
            title:'DALIAN(faceplam)',
            date: 'June.2017 - August.2017',
            txt: 'Creative News Digestion APP'
        },
        sections: [
            {
                title: 'Project Idea',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'We see a lot of fake information everyday, from various sources including: internet, news, television, etc. Sometimes we want to find a place that we could post these false and misleading information, and rebuke them.<br>' +
                        'Dalian is an app based on this idea. We want to build such a platform that people could post specious information and dismay them. While other users could advocate or rebut the original post by either citing other sources or commenting.<br>' +
                        'The app is currently in reviewing process by Apple App store.'
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
                        title: 'Jessie Lyu'
                    },
                    {
                        type: 'txt',
                        class: 'col-6 center-align',
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
                        txt: 'Zhihu is an app for users to share their knowledge to something.<br>' +
                        'Users could provide their insight on a recent news, explain some technology term, or repudiate a commonly accepted idea.<br>' +
                        'It is like a knowledge share community.'
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
                        txt: 'Wangyi News is a news digesting app. <br>' +
                        'It is news content are of various aspects, from politics to entertainments. And they are of diffrent forms including articles, videos, or images.<br>' +
                        'Users could read, share or comment on those news.'
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
                            src: 'image/portfolio/dalianApp/wireframe.jpg',
                            alt: 'wireframe'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Our app need to support following basic functionalities: ',
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
                title: 'Prototyping',
                data: [
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img0.png',
                            alt: 'img0'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img1.png',
                            alt: 'img1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img2.png',
                            alt: 'img2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img3.png',
                            alt: 'img3'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img4.png',
                            alt: 'img4'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img5.png',
                            alt: 'img6'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img6.png',
                            alt: 'img6'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img7.png',
                            alt: 'img7'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img8.png',
                            alt: 'img8'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img9.png',
                            alt: 'img9'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/dalianApp/img10.png',
                            alt: 'img10'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
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
                title: 'Project Idea',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Nowadays we see more and more "buyers" emerging among traditional online shopping. Buyers could be a person or a team. Normally they are the third party agency that help clients get their stuff. Besides just doing merchandise, they will recommend products to clients based on clients\' preference and need, and based buyers\' own insights.<br>' +
                        'Buyers are especially common in fashion industry, including clothes, bags, shoes, etc. Normally they own a website and clients could make orders through that website, then buyers will go shopping per clients\' requests.<br>' +
                        'However, clients never know how buyers get their stuff. They never know if there is special discount, or if buyers are faking the price, or if buyers don\'t tell the truth about the product. The only way clients know the product is through their online description and upon receiving the product. The process of purchasing is like a blackbox.<br>' +
                        'The idea of this project is to create a mobile shopping app that integrates live video streaming in it. By making the process more reliable and clear, clients could watch how buyers get their stuff. This is win-win for both parties, since clients will be more willing to give their money to buyers, and buyers could earn more trust by showing how they do shopping'
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
                        title: 'Our app should address to suit the following use cases:',
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
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img1.gif',
                            alt: 'img1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img2.gif',
                            alt: 'img2'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img3.gif',
                            alt: 'img3'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img4.gif',
                            alt: 'img4'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/shoppingApp/img5.gif',
                            alt: 'img5'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-4',
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
            txt: ''
        },
        sections: [
            {
                title: 'Description',
                data: {
                    type: 'txt',
                    class: 'col-12',
                    txt: 'Wifi, NFC, knock sequence enabledlock device'
                }
            },
            {
                title: 'Project Proposal',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'Home security and privacy matters more and more in modern life. Carrying multiple keys around, or be present when giving access are sometimes inconvenient, especially when you have many guests coming in and out or have multiple rental properties. We want to solve this problem by designing a set of lock and key (your smartphone) that allows user to remotely lock and unlock the doors/drawers from their smartphone and manage user access, track usage activity.</p> ' +
                        '<p>This project intends to realize a smart lock device that allow users to open their door without a physical key in multiple ways, and ensures safety and convenience at the same time. For this device, we have three different methods for users to unlock. First one is to unlock with the NFC chip built in user’s smartphone, and user can unlock the door by placing their NFC enabled smartphone within 10 cm (4 inches) of the lock. The second method is unlock with wifi connection and mobile app. The mobile app allows user to manage user access, track usage activity, and unlock their lock with wifi connection. When the mobile app connects to the network and sends a data pack to the microcontroller, the microcontroller will check whether the encryption matches and decide whether to unlock the door. Finally, user can also unlock by knocking a preset knock sequence, the vibration is determined by piezo buzzer and the time intervals between each knock are processed by microcontroller. There is also LED indication whether the user has knocked correct sequence, If there are multiple failed attempts, the lock will produce alarm sound with piezo buzzer.'
                    }
                ]

            },
            {
                title: 'Useage scenarios',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'With our device users could open the door in three different ways without a physical key. All of the unlock method are relatively independent so users have more options of unlocking the door. There are many scenarios where this device could be practical:',
                        txt: '1. When host want to remotely open the door for someone, he/she could open it using web app through Wi-Fi.' +
                        '2. When host want to share/revoke access, he/she could either share the secret knocking pattern, or hand out a set of username and passcode through the web app.' +
                        '3. For host himself, he could use NFC card to open the door fast and conveniently.' +
                        '4. In case that any of the above unlock method is not working, there are always other options, ie, if someone forgets the cellphone, or phone is out of power, or the NFC card is lost, he/she could always unlock by knocking a specific pattern.' +
                        '5. Easy for host to manage several rental properties, the Airbnb hosts for example.'
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
                    }
                ]
            },
            {
                title: 'Circuit Design Snippet',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/smartLock/circuitDiagram.png',
                            alt: 'circuit Diagram'
                        }
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'PCB Schematics',
                        txt: 'The device is small and could be implemented inside a normal house door easily. The system consists of mainly six physical parts: power supply, microcontroller, sensor, alert, LED and locking solenoid, and a user interface which is the web application. The physical unit should be inserted inside a door. More specifically, microcontroller (except the switch button) and power supply should be invisible to the user; LED, alert and sensor unit (including buzzer, Wi-Fi sensor, NFC sensor) should be implemented either inside or outside the door depending on functionalities of each component; lock solenoid should be placed partially outside the door to perform locking mechanism.'
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
                        txt: 'Through Wi-Fi connection, the user can use their mobile phone to log into the web app to send unlock signal (a special character that will be read by wifi module) to the microcontroller. And as long as the microcontroller reads the matching encoded character, it will set specific digital pin to high and retract the solenoid which unlocks the door. Besides the functionality to control locks, users can also use the app to monitor activities of the lock, for example who has unlocked the door at what time. As illustrated in Figure 6 below. The app also allows user to manage access of their lock. On the app, if the user is logged in as host, he or she will see an interface where the host can pick any of their friends and families and give them access or revoke their access. It is also possible to schedule the access for specific day and time for extra safety. As shown in Figure 7 below, once the host adds a guest to list, he/she created a set of username and password for the guest. These information is sent to the guest’s email address automatically through PHP request, and the guest can then use the given username and password the in email to log in to the app and control the lock. The web app is built with HTML and PHP, so it can be easily accessed through any web browser on any platform including desktop and mobile phone.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'UI Prototyping'
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
            },
            {
                title: 'Product Implementation',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Circuit Wiring'
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/smartLock/circuit1.jpg',
                            alt: 'circuit1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-6',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/smartLock/circuit2.jpg',
                            alt: 'circuit2'
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
            txt: ''
        },
        sections: [
            {
                title: 'Prject Summary',
                data: [
                    {
                        type: 'txt',
                        class :'col-12',
                        txt: 'This was a joint project based in University of Illinois, Urbana-Champaign. The project is aimed at using computer technologies to create educational games for children and teenagers from age 6-16. The project is hold by Educationa Department and Computer Science Department.'
                    }
                ]
            },
            {
                title: '3D Unity Energy Game',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        txt: 'This is a 3D game for elementary school kids to understand energy transger among objects.</p>' +
                            '<p>Started from brainstorming, we first came up with the idea of using a rolling ball to illustrate energy transfer. After implementing a few levels we did the initial testing. However, kids did not really like the boring ball bouncing on the floor or rolling down the ramp. So we changed our game context: A robot escape from factory. </p>' +
                            '<p>The basic storyline was: A robot woke up alone in a factory and found everything was on fire. Alarming was going off and he needed to escape the factory in 5 min. There were totally two rooms(levels): in the first room he needed to climb the wall and jump down to a spring to escape; in the second level he needed to roll a boat to cross a room with water and open the door. There was an energy bar on top of the screen to show a direct energy transfer process.</p>' +
                            '<p>Around June we did the second testing and this time seemed all kids liked the "game of robot". We finally displayed the game in Children Museum in Indianapolis.'
                    },
                    {
                        type: 'txt',
                        class: 'col-12',
                        title: 'Game Design'
                    },
                    {
                        type: 'txt',
                        class: 'col-6',
                        txt: ''
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
                        title: 'Prototyping'
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
                            '<p>The second game was called "Ice Block Puzzle": players needed to control three ice blocks to make one of them finally stay at the center position. Ice blocks would continue slipping to the edge until meet some obstables. '
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
                        type: 'img',
                        class: 'col-12',
                        img: {
                            style: 'span',
                            src: 'image/portfolio/educationalGames/unity2d2.png',
                            alt: 'unity2d2'
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
            txt: ''
        },
        sections: [
            {
                title:'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Team members : Yuki Dong, Emma He, Amy Chen, Bobby Zhang',
                        txt: 'iEar is a class project, and is also the initial website for a startup company called OmniEar. iEar is based on the idea of earpods customization. The website provides an interactive UI for clients to personalized their earpods. Functionalities include: upload photos of ears, choose earpods chip configuration, visual customization, and place an order.'
                    }
                ]
            },
            {
                title:'User Evaluation',
                data: []
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
                title: 'Prototyping',
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
            txt: ''
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Team member : Tianyilin Zhu',
                        txt: 'MovieLog is a Hackthon project, created in Feb 2016 in Hack Illinois. The website allows users to log their movie watching history. It has a small add-on feature that it could recommend movies based on user movie journal.'
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
            txt: ''
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Professor : John Toenjes',
                        txt: 'The Laboratory for Audience Interactive Technologies (LAIT) has been established to research and develop applications for personal mobile devices for use in live performance. The lab is based on National Center for Supercomputing Application(NCSA) in UIUC. I worked as the UI developer for the mobile app from 2015-2016.'
                    }
                ]
            },
            {
                title: 'UI Snippet',
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
            txt: ''
        },
        sections: [
            {
                title: 'Introduction',
                data: [
                    {
                        type: 'txt',
                        class: 'col-12',
                        subtitle: 'Team: Yuki Dong, Guangyuan Wang, Dage Niu',
                        txt: 'Project(o) is a website for computer PC recommendation.'
                    }
                ]
            },
            {
                title: 'UI Snippet',
                data: [
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            src: 'image/portfolio/projecto/projecto1.jpg',
                            style: 'span',
                            alt: 'projecto1'
                        }
                    },
                    {
                        type: 'img',
                        class: 'col-12',
                        img: {
                            src: 'image/portfolio/projecto/projecto2.jpg',
                            style: 'span',
                            alt: 'projecto2'
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
                        txt: 'Unical is a poster for a campus-wide events schedule app.'
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
    intro: 'I am a full-time software engineer and a half-time designer.',
    profile: 'image/profilepic-800.png',
    resume: 'src/JessieResume.pdf',
    skills: {
        design: [
            {
                name: 'Adobe Photoshop',
                level: 'Intermediate'
            },
            {
                name: 'Adobe Illustrator',
                level: 'Experienced'
            },
            {
                name: 'Sketch',
                level: 'Experienced'
            },
            {
                name: 'Sketch',
                level: 'Experienced'
            }
        ],
        coding: [
            {
                name: 'HTML/CSS',
                level: 'Professional'
            },
            {
                name: 'Javascript/Jquery',
                level: 'Professional'
            },
            {
                name: 'PHP',
                level: 'Experienced'
            },
            {
                name: 'Java',
                level: 'Professional'
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
    work: [
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
    contact: {
        email: 'jiexinlyu@gmail.com',
        phone: '(669)-246-2810',
        logo: 'image/about/contact.png'
    }
};