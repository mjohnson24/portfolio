// Fade animation

$("body").delay(100).animate({
    "opacity": "1"
}, 1000);

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

    const container = document.querySelector(".container");
    const change = document.querySelector(".change-browser");
    const rotateDiv = document.querySelector(".pleaserotate");

    if (isIE || isEdge || isOpera) {
        container.style.display = "none";
        change.style.display = "flex"
    } else {
        container.style.display = "";
        change.style.display = "none"
    }
}




if (/Android|webOS|iPhone|iPod|Opera Mini/i.test(navigator.userAgent)) {
    var mql = window.matchMedia("(orientation: portrait)");
    if (!mql.matches) {
        rotateDiv.style.height = "100vh";
        container.style.display = "none";
    } else {
        rotateDiv.style.height = "0";
        container.style.display = "initial"
    }
    mql.addEventListener('change', function () {
        if (!mql.matches) {
            rotateDiv.style.height = "100vh";
            container.style.display = "none";
        } else {
            rotateDiv.style.height = "0";
            container.style.display = "initial"
        }
    })

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

document.addEventListener("DOMContentLoaded", function () {
    // The Typewriter
    var textArray = ["Welcome! ", "I'm Edoardo Lunardi. ", "nice to see you here. "];
    var typeWriterElement = document.getElementById('typewriter');

    function delWriter(text, i, cb) {
        if (i >= 0) {
            typeWriterElement.innerHTML = text.substring(0, i--);
            // generate a random Number to emulate backspace hitting.
            var rndBack = 10 + Math.random() * 100;
            setTimeout(function () {
                delWriter(text, i, cb);
            }, rndBack);
        } else if (typeof cb == 'function') {
            setTimeout(cb, 200);
        }
    };

    function typeWriter(text, i, cb) {
        if (i < text.length) {
            typeWriterElement.innerHTML = text.substring(0, i++);
            // generate a random Number to emulate Typing on the Keyboard.
            var randomTyping = 200 - Math.random() * 100
            setTimeout(function () {
                typeWriter(text, i++, cb)
            }, randomTyping);
        } else if (i === text.length) {
            setTimeout(function () {
                delWriter(text, i, cb)
            }, 1000);
        }
    };

    function StartWriter(i) {
        if (typeof textArray[i] == "undefined") {
            setTimeout(function () {
                StartWriter(0)
            }, 1000);
        } else if (i < textArray[i].length) {
            typeWriter(textArray[i], 0, function () {
                StartWriter(i + 1);
            })
        }

    }

    setTimeout(function () {
        StartWriter(0);
    }, 1000);
});



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

var footer = $("footer h2");
footer.hide();

$(window).on("scroll", function () {
    // Show footer only at the bottom of the page
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight < 0.030) {
        footer.fadeIn();
    } else {
        footer.fadeOut();
    }
    // Animate progess bars on scroll
    if ($(window).scrollTop() > 900) {
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

    var about_position = $(".about").offset().top;
    var about_height = $(".about").height();
    // var skills_position = $(".skills").offset().top;
    // var skills_height = $(".skills").height();
    var portfolio_position = $(".portfolio").offset().top;
    var portfolio_height = $(".portfolio").height();
    var about_position = $(".about").offset().top;
    var about_height = $(".about").height();

    var menu_pos = $("#menu-text").offset().top;

    // Change color of menu label on scroll
    if (menu_pos > about_position && menu_pos < (about_position + about_height)) {
        $("#menu-text").css({
            "color": "black"
        })

    } else if (menu_pos > portfolio_position && menu_pos < (portfolio_position + portfolio_height)) {
        $("#menu-text").css({
            "color": "black"
        })
    } else {
        $("#menu-text").css({
            "color": "white"
        })
    }
});