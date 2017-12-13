/**
 * Created by jessielyu on 12/12/17.
 */

var curTarget;
var curPage;

var template = {
    Portfolio:'<div id="portfolio">{{#each this}}<div class="col-2 thumbnail-item"><a id="{{this.href}}" class="portfolio-link"><div class="caption"><p>{{this.name}}</p></div><img src="{{this.image}}" alt="{{this.name}}"></a></div>{{/each}}</div>',
    Experiences: '<div id="experiences">Hello</div>',
    About: '<div id="about">Hello Again</div>',
    Modal: '{{#each this}}<div id="{{name}}" class="modal"><div class="col-3 header"><a class="close-btn" href="#"><i class="fa fa-close"></i></a><h2>{{header.title}}</h2><h4>{{header.date}}</h4><p>{{header.txt}}</p></div>' +
    '<div class="col-9 sections">{{#each sections}}<h3>{{title}}</h3>{{/each}}</div></div>{{/each}}'
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
    container.append(template.Experiences);
    container.append(template.About);
    container.append(template.Modal(modals));
    curPage = '#portfolio_pg';

    $('#experiences').hide();
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
                $('#experiences').hide();
                $('#about').hide();
                $('#portfolio').show();
                break;
            }
            case 'experiences_pg': {
                if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
                $(curPage).removeClass('menu-active');
                curPage = target;
                $(curPage).addClass('menu-active');
                $('#portfolio').hide();
                $('#about').hide();
                $('#experiences').show();
                break;
            }
            case 'about_pg': {
                if ($(curTarget).hasClass('modal-active')) $(curTarget).removeClass('modal-active');
                $(curPage).removeClass('menu-active');
                curPage = target;
                $(curPage).addClass('menu-active');
                $('#experiences').hide();
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