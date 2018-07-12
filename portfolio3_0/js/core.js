/**
 * Created by jessielyu on 7/10/18.
 */
const passcode = 'loveYahoo2016';

let curTarget;
let curPage;

const template = {
    Portfolio:'<div id="portfolio"><h1 class="col-12">Hi, I\'m Jessie Lyu!</h1>{{#each this}}<div class="col-2 thumbnail-item"><a id="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div><img src="{{this.image}}" alt="{{this.name}}"></a></div>{{/each}}</div>',
    Modal: '{{#each this}}<div id="{{name}}" class="modal"><div class="col-3"><div class="header"><a class="close-btn" href="#"><i class="fa fa-close"></i></a><div class="title"><h1>{{header.title}}</h1><h3>{{header.date}}</h3><p>{{header.txt}}</p></div></div></div>' +
    '<div class="col-9 sections">{{#each sections}}<h2>{{title}}</h2><div class="section-block">{{#each data}}' +
    '<div class="{{class}}">{{#ifCond type "===" "img"}}<img class="{{img.style}}" src="{{img.src}}" alt="{{img.alt}}">{{else ifCond type "===" "txt"}}<h3>{{title}}</h3><p><b>{{subtitle}}</b></p><p>{{{txt}}}</p>{{else ifCond type "===" "link"}}<a href="{{link.href}}" target="_blank">{{link.title}}</a>' +
    '{{/ifCond}}</div>{{/each}}</div>{{/each}}</div></div>{{/each}}',
    About: '<div id="about"><div class="section-block"><div class="col-6"><img src="{{profile}}" class="img-center img-md-round"></div><div class="col-6 left-align"><h1 class="center-align">Jessie Lyu</h1><hr><p><b>{{subtitle}}</b></p><p>{{intro}}</p><a href="{{resume}}" target="_blank">Resume</a></div></div>' +
    '<div class="section-block"><div class="col-6 center-align"><h1>My Skills</h1><hr><p>{{#each skills.innovation}} - {{name}} {{/each}} - </p></div><div class="col-6"><img src="{{skills.logo}}" alt="skills logo"></div><div class="col-5 right-align">{{#each skills.design}}<p>{{name}} : <img class="img-inline" src="{{level}}" alt="level"></p>{{/each}}</div><div class="col-1"></div><div class="col-5 right-align">{{#each skills.coding}}<p>{{name}} : <img class="img-inline" src="{{level}}" alt="level"></p>{{/each}}</div><div class="col-1"></div></div>' +
    '<div class="section-block"><div class="col-6"><img src="{{education.logo}}" alt="education logo"></div><div class="col-6 center-align"><h1>Education</h1><hr><div class="left-align"><h4>{{education.year}} : {{education.school}}</h4><p>Major: {{education.major}}</p><p>Minor: {{education.minor}}</p></div></div></div>' +
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
        $(target).addClass('modal-active');
        curTarget = target;
    }
}

function init() {
    const container = $('#content');
    let portfolio;

    container.html(template.Portfolio(thumbnails));
    container.append(template.About(about));
    container.append(template.Modal(modals));
    curPage = '#portfolio_pg';

    $('#about').hide();

    portfolio = $('#portfolio');
    portfolio.on('click', 'a', function (e) {
        const target = e.currentTarget.getAttribute('id');
        if (target === '#vision' || target === '#wizard') {
            $('#portfolio').hide();
            $(target).addClass('modal-active');
            curTarget = target;
            // passwordPromp(target);
        } else {
            $('#portfolio').hide();
            $(target).addClass('modal-active');
            curTarget = target;
        }
    });

    container.on('click', '.close-btn', function (e) {
        $(curTarget).removeClass('modal-active');
        portfolio.show();
    });

    $('#menu').on('click', 'a', function (e) {
        const target = e.currentTarget;

        switch (target.getAttribute('id')) {
            case 'portfolio_pg': {
                if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
                $(curPage).removeClass('menu-active');
                curPage = target;
                $(curPage).addClass('menu-active');
                $('#about').hide();
                $('#portfolio').show();
                break;
            }
            case 'about_pg': {
                if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
                $(curPage).removeClass('menu-active');
                curPage = target;
                $(curPage).addClass('menu-active');
                $('#portfolio').hide();
                $('#about').show();
                break;
            }
        }
    });

    $('#logo').on('click', function (e) {
        if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
        curPage = '#portfolio_pg';
        $(curPage).addClass('menu-active');
        $('#about').hide();
        $('#portfolio').show();
    })
}

window.onload = function () {
    compileTemplate();
    init();
};