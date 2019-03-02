const container = document.querySelector(".container");
const rotateDiv = document.querySelector(".pleaserotate");
const check = document.getElementById("cbx");
const body = document.querySelector("body");
const header = document.querySelector("header");

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
        const screenOrientation = (window.innerWidth > window.innerHeight) ? 90 : 0;

        // if rotated
        if (screenOrientation != 0) {
            rotateDiv.style.height = "100vh";
            rotateDiv.style.display = 'flex';
            container.style.display = "none";
        } else {
            rotateDiv.style.height = "0";
            rotateDiv.style.display = 'none'
            container.style.display = "block";
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
    document.querySelector('body').style.opacity = '1';
    loader = document.getElementById('loader');
    setTimeout(function () {
        loadNow(1);
    }, 1000);

    if (window.location.pathname === '/') {
        anime.timeline({
                easing: 'easeOutExpo',
                delay: 1000
            })
            .add({
                targets: '.hero .left',
                opacity: [0, 1],
                translateY: [200, 0],
                delay: 1500
            })
            .add({
                targets: '.hero .right',
                opacity: [0, 1],
                translateX: [200, 0]
            }, '-=1600')
            .add({
                targets: header,
                opacity: [0, 1],
                translateY: [-100, 0]
            }, '-=1200')
            .add({
                targets: '#scrolldown',
                opacity: [0, 1],
                translateY: [20, 0],
                rotate: -90
            }, '-=2000')
            .add({
                targets: '.arrow svg',
                opacity: [0, 1],
                translateY: [20, 0],
                rotate: -90
            }, '-=2000')

        setTimeout(() => {
            document.querySelector('.hero .left').classList.add('animation');
            document.querySelector('.hero .right').classList.add('animation');
        }, 4000)
    }
})


// Check if browser supports smooth-scroll property
// if not, use smoothScroll.js
if (!isCssSmoothSCrollSupported()) {
    const scroll = new SmoothScroll('a[href*="#"]');
}

function isCssSmoothSCrollSupported() {
    return 'scrollBehavior' in document.documentElement.style;
}