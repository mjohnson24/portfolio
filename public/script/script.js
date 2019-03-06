(() => {
    const container = document.querySelector(".container");
    const rotateDiv = document.querySelector(".pleaserotate");
    const check = document.getElementById("cbx");
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const content = document.getElementById("content");
    const hero = document.querySelector(".hero");
    // Loader gif
    const loader = document.getElementById('loader');
    // Change browser variables
    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;
    // Opera 8.0+
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    const change = document.querySelector(".change-browser");

    // Check if browser supports smooth-scroll property
    // if not, use smoothScroll.js
    const isCssSmoothSCrollSupported = () => {
        return 'scrollBehavior' in document.documentElement.style;
    }

    if (!isCssSmoothSCrollSupported()) {
        const scroll = new SmoothScroll('a[href*="#"]');
    }

    // Change theme
    check.addEventListener('click', () => {
        if (check.checked) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    });

    // Check browser
    if (isIE || isEdge || isOpera) {
        container.style.display = "none";
        change.style.display = "flex"
    } else {
        container.style.display = "";
        change.style.display = "none"
    }

    // If mobile, check if device is rotated
    if (/Android|webOS|iPhone|iPod|Opera Mini/i.test(navigator.userAgent)) {
        window.addEventListener("resize", () => {
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

    // Handle the loader gif
    const loadNow = (opacity) => {
        if (opacity <= 0) {
            displayContent();
        } else {
            loader.style.opacity = opacity;
            setTimeout(() => {
                loadNow(opacity - 0.05)
            }, 20);
        }
    }

    const displayContent = () => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-cubic',
            anchorPlacement: 'top-bottom'
        });
        body.style.opacity = '1';
        setTimeout(() => {
            loadNow(1);
        }, 1000);

        if (window.location.pathname !== '/') {
            document.querySelector('header').classList.add('animation');
        }

        if (window.location.pathname === '/') {
            if (window.matchMedia("(min-width: 500px)").matches) {
                anime.timeline({
                        easing: 'easeOutExpo',
                        delay: 1000
                    })
                    .add({
                        targets: '.hero',
                        opacity: [0, 1],
                        translateY: [200, 0],
                        delay: 1500
                    })
                    .add({
                        targets: header,
                        opacity: [0, 1],
                        translateY: [-100, 0]
                    }, '-=1200')

                setTimeout(() => {
                    header.classList.add('animation');
                    hero.classList.add('animation');
                }, 3000)
            }
        }
    });
})();