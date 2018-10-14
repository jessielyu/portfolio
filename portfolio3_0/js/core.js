/**
 * Created by jessielyu on 7/10/18.
 */
const passcode = 'sde2018';

let curTarget;
let curPage = '#placeholder';

const template = {
    Portfolio: '<div id="portfolio">{{#each this}}<div class="col-4 thumbnail-item">' +
    '<a id="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div>' +
    '<img src="{{this.image}}" alt="{{this.name}}"></a></div>{{/each}}</div>',
    Work: '<div id="work">{{#each this}}<div class="col-4 thumbnail-item">' +
    '<a id="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div>' +
    '<img src="{{this.image}}" alt="{{this.name}}"></a></div>{{/each}}</div>',
    Modal: '{{#each this}}<div id="{{name}}" class="modal"><div class="header"><a class="close-btn" href="#"><i class="fa fa-close"></i></a><div class="title"><h1>{{header.title}}</h1><hr><h4>{{header.date}}</h4><p>{{header.txt}}</p></div></div>' +
    '<div class="sections">{{#if header.header_img}}<div class="col-12 center-align">{{{header.header_img}}}</div>{{/if}}' +
    '{{#each sections}}<div class="section-block"><h2 class="col-12">{{title}}</h2>{{#each data}}' +
    '<div class="{{class}}">{{#ifCond type "===" "img"}}<img class="{{img.style}}" src="{{img.src}}" alt="{{img.alt}}">{{else ifCond type "===" "txt"}}<p>{{{txt}}}</p>{{else ifCond type "===" "header"}}<{{header_class}}>{{header_txt}}</{{header_class}}>' +
    '{{/ifCond}}</div>{{/each}}</div>{{/each}}</div></div>{{/each}}',
    About: '<div id="about"><div class="intro-body"><img src="{{header}}" alt="header background"><div class="center-align intro-text"><h2 class="center-align">Hi, I\'m Jessie Lyu</h2><h3>{{subtitle}}</h3><p>{{{intro}}}</p><a href="{{resume}}" target="_blank"><i class="fa fa-address-card"></i> Resume</a></div></div>' +
    '<div class="section-block"><h2 class="col-12 center-align">PERSISTENT &middot CREATIVITY &middot LOVE</h2>' +
    '<p class="col-12">{{{path}}}</p><h1 class="col-12 center-align"><a href="https://dribbble.com/jessielyu75" target="_blank"><i class="fa fa-dribbble"></i></a> <a href="https://www.facebook.com/jiexin.lu/" target="_blank"><i class="fa fa-facebook"></i></a> <a href="https://www.linkedin.com/in/jessielyu/" target="_blank"><i class="fa fa-linkedin"></i></a> <a href="https://www.pinterest.com/jiexinlu2/" target="_blank"><i class="fa fa-pinterest"></i></a> <a href="mailto:jessie_lyu@berkeley.edu"><i class="fa fa-envelope"></i></a></h1></div></div>'
};

function compileTemplate() {
    for (let key in template) {
        template[key] = Handlebars.compile(template[key]);
    }
}

function passwordPromp(target) {
    let result = window.prompt('Please enter passcode for this project:', '');
    if (result === passcode) {
        $('#portfolio').hide();
        $('#work').hide();
        $('#navigation').hide();
        $(target).addClass('modal-active');
        curTarget = target;
        window.scrollTo(0, 0);
    }
}

function portfolioEvent() {
    const container = $('#content');
    let portfolio = $('#portfolio');
    let work = $('#work');

    work.on('click', 'a', function (e) {
        const target = e.currentTarget.getAttribute('id');
        if (target === '#vision' || target === '#wizard' || target === '#quicket') {
            passwordPromp(target);
            // $('#portfolio').hide();
            // $('#work').hide();
            // $('#navigation').hide();
            // $(target).addClass('modal-active');
            // curTarget = target;
            // window.scrollTo(0, 0);
        } else {
            $('#portfolio').hide();
            $('#work').hide();
            $('#navigation').hide();
            $(target).addClass('modal-active');
            curTarget = target;
            window.scrollTo(0, 0);
        }
    });

    portfolio.on('click', 'a', function (e) {
        const target = e.currentTarget.getAttribute('id');
        if (target === '#vision' || target === '#wizard') {
            passwordPromp(target);
        } else {
            $('#portfolio').hide();
            $('#work').hide();
            $('#navigation').hide();
            $(target).addClass('modal-active');
            curTarget = target;
            window.scrollTo(0, 0);
        }
    });

    container.on('click', '.close-btn', function (e) {
        e.preventDefault();
        $(curTarget).removeClass('modal-active');
        $(curPage.slice(0, -3)).show();
        $('#navigation').show();
        window.scrollTo(0, 0);
    });
}

function menuEvent() {
    $('#menu').on('click', 'a', function (e) {
        const target = e.currentTarget;

        switch (target.getAttribute('id')) {
            case 'portfolio_pg': {
                if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
                $(curPage).removeClass('menu-active');
                curPage = '#portfolio_pg';
                $(curPage).addClass('menu-active');
                $('#about').hide();
                $('#work').hide();
                $('#portfolio').show();
                window.scrollTo(0, 0);
                break;
            }
            case 'work_pg': {
                if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
                $(curPage).removeClass('menu-active');
                curPage = '#work_pg';
                $(curPage).addClass('menu-active');
                $('#about').hide();
                $('#portfolio').hide();
                $('#work').show();
                window.scrollTo(0, 0);
                break;
            }
            case 'about_pg': {
                if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
                $(curPage).removeClass('menu-active');
                curPage = '#about_pg';
                $(curPage).addClass('menu-active');
                $('#portfolio').hide();
                $('#work').hide();
                $('#about').show();
                window.scrollTo(0, 0);
                break;
            }
        }
    });

    $('#logo').on('click', function (e) {
        if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
        $(curPage).removeClass('menu-active');
        curPage = '#placeholder';
        $('#content').hide();
        $('#navigation').hide();
        $('#home').show();
    });
}

function init() {
    const container = $('#content');

    container.hide();

    container.html(template.Portfolio(thumbnails));
    container.append(template.Work(thumbnails_work));
    container.append(template.About(about));
    container.append(template.Modal(modals));

    $('#portfolio_direct').on('click', function (e) {
        $('#home').hide();
        $('#content').show();
        $('#navigation').show();
        $('#about').hide();
        $('#work').hide();
        $('#portfolio').show();

        $(curPage).removeClass('menu-active');
        curPage = '#portfolio_pg';
        $(curPage).addClass('menu-active');
    });

    $('#work_direct').on('click', function (e) {
        $('#home').hide();
        $('#content').show();
        $('#navigation').show();
        $('#about').hide();
        $('#portfolio').hide();
        $('#work').show();

        $(curPage).removeClass('menu-active');
        curPage = '#work_pg';
        $(curPage).addClass('menu-active');
    });

    $('#about_direct').on('click', function (e) {
        $('#home').hide();
        $('#content').show();
        $('#navigation').show();
        $('#portfolio').hide();
        $('#work').hide();
        $('#about').show();

        $(curPage).removeClass('menu-active');
        curPage = '#about_pg';
        $(curPage).addClass('menu-active');
    });

    menuEvent();

    portfolioEvent();
}

window.onload = function () {
    compileTemplate();
    init();
};