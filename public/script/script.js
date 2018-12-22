// Fade animation
$("body").delay(100).animate({
    "opacity": "1"
}, 1000);

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

document.addEventListener('readystatechange', function () {

    if (document.readyState === 'complete') {
        // The Typewriter
        var textArray = ["Welcome dude ", "I'm Edoardo Lunardi ", "nice to see you here. "];
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
                setTimeout(cb, 1000);
            }
        };

        function typeWriter(text, i, cb) {
            if (i < text.length) {
                typeWriterElement.innerHTML = text.substring(0, i++);
                // generate a random Number to emulate Typing on the Keyboard.
                var randomTyping = 250 - Math.random() * 100
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

    }
});

// GRADIENT

// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = '../gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
    .map((item, i) => `${item} ${arrTwo[i]}`)
    .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
    elms.forEach(el => {
        el.style.backgroundImage = color;
    });
}
// 4. Function to get data from API
const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async (url, callback) => {
    const data = await getData(url);
    const gradient = buildGradient(data[randNumInRange(data.length)]);
    callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);