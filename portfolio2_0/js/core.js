var template = {
    Modal:'<div id="portfolio">{{#each this}}<div class="col-2 portfolio-item"><a href="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div><img src="{{this.image}}" alt="{{this.name}}"></a></div>{{/each}}</div>'
};

var modalList = {
    facepalm: {
        name: 'FACEPALM(打脸)',
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
    }
};

function compileTemplate() {
    for (var key in template) {
        template[key] = Handlebars.compile(template[key]);
    }
}

function init() {
    $('#content').html(template.Modal(modalList));
}

window.onload = function () {
    compileTemplate();
    init();
};