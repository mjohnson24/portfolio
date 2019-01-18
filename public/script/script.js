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

// Typewriter animation


// document.addEventListener("DOMContentLoaded", function () {
//     // The Typewriter
//     var textArray = ["HELLO. "];
//     var typeWriterElement = document.getElementById('typewriter');

//     function delWriter(text, i, cb) {
//         if (i >= 0) {
//             typeWriterElement.innerHTML = text.substring(0, i--);
//             // generate a random Number to emulate backspace hitting.
//             var rndBack = 10 + Math.random() * 100;
//             setTimeout(function () {
//                 delWriter(text, i, cb);
//             }, rndBack);
//         } else if (typeof cb == 'function') {
//             setTimeout(cb, 200);
//         }
//     };

//     function typeWriter(text, i, cb) {
//         if (i < text.length) {
//             typeWriterElement.innerHTML = text.substring(0, i++);
//             // generate a random Number to emulate Typing on the Keyboard.
//             var randomTyping = 200 - Math.random() * 100
//             setTimeout(function () {
//                 typeWriter(text, i++, cb)
//             }, randomTyping);
//         } else if (i === text.length) {
//             setTimeout(function () {
//                 delWriter(text, i, cb)
//             }, 1000);
//         }
//     };

//     function StartWriter(i) {
//         if (typeof textArray[i] == "undefined") {
//             setTimeout(function () {
//                 StartWriter(0)
//             }, 1000);
//         } else if (i < textArray[i].length) {
//             typeWriter(textArray[i], 0, function () {
//                 StartWriter(i + 1);
//             })
//         }

//     }

//     setTimeout(function () {
//         StartWriter(0);
//     }, 1000);
// });

// var menuToggle = document.querySelector('label .menu');
// var menu = document.querySelector('label ul');
// var menu_li = document.querySelectorAll('label ul li');
// var input = document.querySelector('label input');
// var clicked = 0;

// menuToggle.addEventListener('click', function () {
//     clicked++;
//     if (clicked % 2 !== 0) {
//         for (let i = 0; i < menu_li.length; i++) {
//             menu_li[i].addEventListener('click', function (e) {
//                 // menu.classList.toggle("closed");
//                 menu.style.left = '-100%';
//                 input.checked = '';
//             })
//         }
//     } else {
//         menu.style.left = '';
//         input.checked = '';
//     }
// })



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