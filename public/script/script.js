// Fade animation

$("body").delay(100).animate({
    "opacity": "1"
}, 1000);

const container = document.querySelector(".container");
const rotateDiv = document.querySelector(".pleaserotate");

if (window.location.pathname === '/') {
    const check = document.getElementById("cbx");
    const body = document.querySelector("body");

    check.addEventListener('click', function () {
        if (check.checked) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    });

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;


    const change = document.querySelector(".change-browser");

    if (isIE || isEdge || isOpera) {
        container.style.display = "none";
        change.style.display = "flex"
    } else {
        container.style.display = "";
        change.style.display = "none"
    }
}


if (/Android|webOS|iPhone|iPod|Opera Mini/i.test(navigator.userAgent)) {
    window.addEventListener("resize", function () {
        var screenOrientation = ($(window).width() > $(window).height()) ? 90 : 0;

        // if rotated
        if (screenOrientation != 0) {
            rotateDiv.style.height = "100vh";
            container.style.display = "none";
        } else {
            rotateDiv.style.height = "0";
            container.style.display = "initial";
        }
    });
}

// Loader gif
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.05)
        }, 20);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    setTimeout(function () {
        loadNow(1);
    }, 1500);

})

// Smooth scrolling
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, function () {
        window.location.hash = target;
    });

});



var html = $(".progressred");
var css = $(".progressblue");
var js = $(".progressorange");
var ui = $(".progresspurple");

$(window).on("scroll", function () {
    // Animate progess bars on scroll
    if ($(window).scrollTop() > 1000) {
        html.attr("id", "progress-html");
        css.attr("id", "progress-css");
        js.attr("id", "progress-javascript");
        ui.attr("id", "progress-design");
    } else {
        html.attr("id", "");
        css.attr("id", "");
        js.attr("id", "");
        ui.attr("id", "");
    }
});

const buttons = document.querySelectorAll(`button[data-modal-trigger]`);

for (let button of buttons) {
    modalEvent(button);
}

function modalEvent(button) {
    button.addEventListener('click', (e) => {
        const trigger = button.getAttribute('data-modal-trigger');
        const modal = document.querySelector(`[data-modal=${trigger}]`);
        const contentWrapper = modal.querySelector('.content-wrapper');
        const close = modal.querySelector('.close');

        if (event.target.tagName === 'BUTTON') {
            document.body.style.overflow = 'hidden';
        }

        close.addEventListener('click', () => {
            modal.classList.remove('open')
            document.body.style.overflow = '';
        });
        modal.addEventListener('click', () => {
            modal.classList.remove('open')
            document.body.style.overflow = '';
        });
        contentWrapper.addEventListener('click', (e) => e.stopPropagation());

        modal.classList.toggle('open');
    });
}

const menu_button = document.querySelector('label .menu');
const label_menu = document.querySelector('label input');
const menu_li = document.querySelectorAll('label ul li');
const menu_ul = document.querySelector('label ul');
var clicked = 0;
menu_button.addEventListener('click', function () {
    clicked++;
    if (clicked % 2 === 1) {
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < menu_li.length; i++) {
            menu_li[i].addEventListener('click', function () {
                menu_ul.style.left = '-100%';
                label_menu.checked = '';
                menu_ul.style.left = '';
                document.body.style.overflow = '';
            })
        }
        menu_ul.style.left = '';
    } else {
        document.body.style.overflow = '';
    }
})