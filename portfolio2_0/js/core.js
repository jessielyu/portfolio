/**
 * Created by jessielyu on 12/12/17.
 */

var curTarget;
var curPage;

var template = {
    Portfolio:'<div id="portfolio">{{#each this}}<div class="col-2 thumbnail-item"><a id="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div><img src="{{this.image}}" alt="{{this.name}}"></a></div>{{/each}}</div>',
    Modal: '{{#each this}}<div id="{{name}}" class="modal"><div class="col-3"><div class="header"><a class="close-btn" href="#"><i class="fa fa-close"></i></a><div class="title"><h1>{{header.title}}</h1><h3>{{header.date}}</h3><p>{{header.txt}}</p></div></div></div>' +
    '<div class="col-9 sections">{{#each sections}}<h2>{{title}}</h2><div class="section-block">{{#each data}}' +
    '<div class="{{class}}">{{#ifCond type "===" "img"}}<img class="{{img.style}}" src="{{img.src}}" alt="{{img.alt}}">{{else ifCond type "===" "txt"}}<h3>{{title}}</h3><p><b>{{subtitle}}</b></p><p>{{{txt}}}</p>{{else ifCond type "===" "link"}}<a href="{{link.href}}" target="_blank">{{link.title}}</a>' +
    '{{/ifCond}}</div>{{/each}}</div>{{/each}}</div></div>{{/each}}',
    About: '<div id="about"><div class="section-block"><div class="col-6"><img src="{{profile}}" class="img-sm-round"></div><div class="col-6"><h1>Hi, I\'m Jessie Lyu</h1><h2>{{intro}}</h2><a href="{{resume}}">Resume</a></div></div>' +
    '<div class="section-block"><h1 class="col-12">My Skills</h1><div class="col-4"><h2>Design Skills</h2>{{#each skills.design}}<p>{{name}}:{{level}}</p>{{/each}}</div><div class="col-4"><h2>Coding Skills</h2>{{#each skills.coding}}<p>{{name}}:{{level}}</p>{{/each}}</div><div class="col-4"><h2>Innovation Skills</h2>{{#each skills.innovation}}<p>{{name}}</p>{{/each}}</div></div>' +
    '<div class="section-block"><h1 class="col-12">Education</h1><div class="col-4"><img src="{{education.logo}}" alt="school icon"></div><div class="col-8"><h2>{{education.school}}</h2><h3>{{education.year}}</h3><h4>{{education.major}}</h4><h4>{{education.minor}}</h4></div></div>' +
    '<div class="section-block"><h1 class="col-12">Work Experiences</h1>{{#each work}}<div class="col-8"><h2>{{company}}</h2><h3>{{location}}, {{year}}</h3><h4>{{position}}</h4><h5>{{desc}}</h5></div><div class="col-4"><img src="work.logo" alt="company1"></div>{{/each}}</div>' +
    '<div class="section-block"><h1 class="col-12">Contact</h1><div class="col-12"><h3>{{contact.email}}</h3><h3>{{contact.phone}}</h3></div></div>' +
    '</div>'
};

function compileTemplate() {
    for (var key in template) {
        template[key] = Handlebars.compile(template[key]);
    }
}

function init() {
    var container = $('#content'),
        portfolio;

    container.html(template.Portfolio(thumbnails));
    container.append(template.About(about));
    container.append(template.Modal(modals));
    curPage = '#portfolio_pg';

    $('#about').hide();

    portfolio = $('#portfolio');
    portfolio.on('click', 'a', function (e) {
        var target = e.currentTarget.getAttribute('id');
        $('#portfolio').hide();
        $(target).addClass('modal-active');
        curTarget = target;
    });

    container.on('click', '.close-btn', function (e) {
        $(curTarget).removeClass('modal-active');
        portfolio.show();
    });

    $('#menu').on('click', 'a', function (e) {
        var target = e.currentTarget;

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
    })
}

window.onload = function () {
    compileTemplate();
    init();
};