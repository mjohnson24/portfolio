// Fade animation

$("body").delay(100).animate({
    "opacity": "1"
}, 1000);

const container = document.querySelector(".container");
const rotateDiv = document.querySelector(".pleaserotate");
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

const html_bar = document.querySelector('.progressred');
const css_bar = document.querySelector('.progressblue');
const js_bar = document.querySelector('.progressorange');
const ui_bar = document.querySelector('.progresspurple');
const fortnite_bar = document.querySelector('.progressfortnite');

document.addEventListener('scroll', function () {
    // Animate progress bars on scroll
    if (window.pageYOffset > (window.innerHeight + window.innerHeight / 3)) {
        html_bar.setAttribute('id', 'progress-html');
        css_bar.setAttribute('id', 'progress-css');
        js_bar.setAttribute('id', 'progress-javascript');
        ui_bar.setAttribute('id', 'progress-design');
        fortnite_bar.setAttribute('id', 'progress-fortnite');
    } else {
        html_bar.removeAttribute('id');
        css_bar.removeAttribute('id');
        js_bar.removeAttribute('id');
        ui_bar.removeAttribute('id');
        fortnite_bar.removeAttribute('id');

    }
})

const menu_button = document.querySelector('label .menu');
const label_menu = document.querySelector('label input');
const menu_li = document.querySelectorAll('.menu ul li');
const menu_ul = document.querySelector('.menu ul');
const dark_overlay = document.querySelector('.dark-overlay');
var clicked = 0;
menu_button.addEventListener('click', function () {
    clicked++;
    if (clicked % 2 === 1) {
        dark_overlay.style.opacity = '1';
        dark_overlay.style.visibility = 'visible';
        for (let i = 0; i < menu_li.length; i++) {
            menu_ul.style.left = '0';
            menu_li[i].addEventListener('click', function () {
                menu_ul.style.left = '-100%';
                label_menu.checked = '';
                menu_ul.style.left = '';
                dark_overlay.style.opacity = '';
                dark_overlay.style.visibility = '';
                clicked = 0;
            })
        }
    } else {
        dark_overlay.style.opacity = '0';
        dark_overlay.style.visibility = 'hidden';
        menu_ul.style.left = '';
    }
})

// Transparent header depending on the scroll position
const header = document.querySelector('header');
const switcher = document.getElementById('cbx');
document.addEventListener('DOMContentLoaded', function () {
    if (window.pageYOffset < window.innerHeight) {
        header.style.background = 'none';
    } else {
        header.style.background = '';
    }
})

switcher.addEventListener('click', function () {
    if (window.pageYOffset < window.innerHeight) {
        header.style.background = 'none';
    } else {
        header.style.background = '';
    }
})
document.addEventListener('scroll', function () {
    if (window.pageYOffset < window.innerHeight) {
        header.style.background = 'none';
    } else {
        header.style.background = '';
    }
})

// Automatically set the theme based on the hour
var mql = window.matchMedia('(min-width: 768px)');
if (mql.matches) {
    const time = new Date()
    const currentHour = time.getHours();
    window.addEventListener('DOMContentLoaded', function () {
        if (currentHour >= 22 || currentHour <= 6) {
            switcher.checked = true;
            body.classList.add("dark-theme");
        }
    })
}