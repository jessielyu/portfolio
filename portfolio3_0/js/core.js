/**
 * Created by jessielyu on 7/10/18.
 */
const passcode = 'loveYahoo2016';

let curTarget;
let curPage = '#placeholder';
let windowPosition = 0;

const template = {
    Portfolio: '<div id="portfolio">{{#each this}}<div class="col-12 thumbnail-item">' +
    '{{#ifCond position "===" "right"}}<div class="col-6 thumbnail-desc"><h1>{{name}}</h1><h3>{{time}}</h3><h4>{{desc}}</h4></div>{{/ifCond}}' +
    '<div class="col-6"><a id="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div><img src="{{this.image}}" alt="{{this.name}}"></a></div>' +
    '{{#ifCond position "===" "left"}}<div class="col-6 thumbnail-desc"><h1>{{name}}</h1><h3>{{time}}</h3><h4>{{desc}}</h4></div>{{/ifCond}}' +
    '</div>{{/each}}</div>',
    Work: '<div id="work">{{#each this}}<div class="col-12 thumbnail-item">' +
    '{{#ifCond position "===" "right"}}<div class="col-6 thumbnail-desc"><h1>{{name}}</h1><h3>{{time}}</h3><h4>{{desc}}</h4></div>{{/ifCond}}' +
    '<div class="col-6"><a id="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div><img src="{{this.image}}" alt="{{this.name}}"></a></div>' +
    '{{#ifCond position "===" "left"}}<div class="col-6 thumbnail-desc"><h1>{{name}}</h1><h3>{{time}}</h3><h4>{{desc}}</h4></div>{{/ifCond}}' +
    '</div>{{/each}}</div>',
    Modal: '{{#each this}}<div id="{{name}}" class="modal"><div class="col-3"><div class="header"><a class="close-btn" href="#"><i class="fa fa-close"></i></a><div class="title"><h1>{{header.title}}</h1><h3>{{header.date}}</h3><p>{{header.txt}}</p></div></div></div>' +
    '<div class="col-9 sections">{{#each sections}}<h2>{{title}}</h2><div class="section-block">{{#each data}}' +
    '<div class="{{class}}">{{#ifCond type "===" "img"}}<img class="{{img.style}}" src="{{img.src}}" alt="{{img.alt}}">{{else ifCond type "===" "txt"}}<h3>{{title}}</h3><p><b>{{subtitle}}</b></p><p>{{{txt}}}</p>{{else ifCond type "===" "link"}}<a href="{{link.href}}" target="_blank">{{link.title}}</a>' +
    '{{/ifCond}}</div>{{/each}}</div>{{/each}}</div></div>{{/each}}',
    About: '<div id="about"><div class="section-block"><div class="col-6"><img src="{{profile}}" class="img-center img-md-round"></div><div class="col-6 left-align"><h1 class="center-align">Nice to meet you!</h1><hr><p><b>{{subtitle}}</b></p><p>{{intro}}</p><a href="{{resume}}" target="_blank">Resume</a></div></div>' +
    '<div class="section-block"><div class="col-6 center-align"><h1>My Skills</h1><hr><p>{{#each skills.innovation}} - {{name}} {{/each}} - </p></div><div class="col-6"><img src="{{skills.logo}}" alt="skills logo"></div><div class="col-5 right-align">{{#each skills.design}}<p>{{name}} : <img class="img-inline" src="{{level}}" alt="level"></p>{{/each}}</div><div class="col-1"></div><div class="col-5 right-align">{{#each skills.coding}}<p>{{name}} : <img class="img-inline" src="{{level}}" alt="level"></p>{{/each}}</div><div class="col-1"></div></div>' +
    '<div class="section-block"><div class="col-6"><img src="{{education.logo}}" alt="education logo"></div><div class="col-6 center-align"><h1>Education</h1><hr>{{#each education.experience}}<div class="left-align"><h3>{{year}} : {{school}}</h3>{{#if major}}<p>Major: {{major}}</p>{{/if}}{{#if degree}}<p>Degree: {{degree}}</p>{{/if}}{{#if minor}}<p>Minor: {{minor}}</p>{{/if}}{{#if focus}}<p>Focus: {{focus}}</p>{{/if}}</div>{{/each}}</div></div>' +
    '<div class="section-block"><div class="col-6"><h1>Work Experience</h1><hr></div><div class="col-6"><img src="{{work.logo}}"></div>{{#each work.experience}}<div class="col-1"></div><div class="col-11 left-align"><h3>{{year}} : {{company}}</h3><h5>{{location}}</h5><p><b>{{position}}</b></p><p>{{desc}}</p></div>{{/each}}</div>' +
    '<div class="section-block"><div class="col-6"><img src="{{contact.logo}}" alt="contact logo"></div><div class="col-6"><h1>Contact</h1><hr><h4>{{contact.email}}</h4><h4>{{contact.phone}}</h4></div></div>' +
    '</div>'
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
        windowPosition = window.scrollY;
        if (target === '#vision' || target === '#wizard') {
            passwordPromp(target);
        } else {
            $('#portfolio').hide();
            $('#work').hide();
            $(target).addClass('modal-active');
            curTarget = target;
            window.scrollTo(0, 0);
        }
    });

    portfolio.on('click', 'a', function (e) {
        const target = e.currentTarget.getAttribute('id');
        windowPosition = window.scrollY;
        if (target === '#vision' || target === '#wizard') {
            passwordPromp(target);
        } else {
            $('#portfolio').hide();
            $('#work').hide();
            $(target).addClass('modal-active');
            curTarget = target;
            window.scrollTo(0, 0);
        }
    });

    container.on('click', '.close-btn', function (e) {
        e.preventDefault();
        $(curTarget).removeClass('modal-active');
        $(curPage.slice(0, -3)).show();
        window.scrollTo({
            top: windowPosition,
            behavior: "smooth"
        });
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