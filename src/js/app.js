const { forEach } = require('lodash');

const CONTAINERS = document.querySelectorAll('.snap-container');
const WRAPPER = document.querySelector('.snap-wrapper');
const CONTENT = document.querySelector('#content');
const SCROLL = document.querySelector('#scroll-down');
const LEGAL = document.querySelector('#legal');
const LOGO = document.querySelector('#logo');

document.querySelectorAll('.scroll-bottom').forEach(el => {
    el.addEventListener('click', () => {
        console.log('scroll-to-bottom');
        CONTAINERS[CONTAINERS.length - 1].scrollIntoView({
            behavior: 'smooth',
        });
    });
});

let activeIndex = 0;

WRAPPER.addEventListener('scroll', event => {
    // show legal links if scrolled to bottom
    let c = CONTENT.getBoundingClientRect();
    if (c.height + c.top - window.innerHeight == 0) {
        SCROLL.classList.add('hidden');
        LEGAL.classList.remove('hidden');
    } else {
        SCROLL.classList.remove('hidden');
        LEGAL.classList.add('hidden');
    }

    // show hide logo
    if (c.top < -100) {
        LOGO.classList.add('w-10');
        LOGO.classList.remove('w-32');
    } else {
        LOGO.classList.remove('w-10');
        LOGO.classList.add('w-32');
    }

    // gradient animation
    let scrollRelative = Math.ceil(
        ((c.height + c.top - window.innerHeight) /
            (c.height - window.innerHeight)) *
            100
    );
    document.body.style.background = `linear-gradient(45deg, #fe2736 ${scrollRelative /
        -2 +
        25}%, #4e125a ${scrollRelative / -2 + 125}%)`;

    CONTAINERS.forEach((element, i) => {
        let top = element.getBoundingClientRect().top;
        let opacity = 1 - Math.sqrt(top * top) / (window.innerHeight / 2);

        element.style.opacity = opacity;

        if (opacity == 1) {
            activeIndex = i;
        }
    });
});

SCROLL.addEventListener('click', () => {
    if (activeIndex < CONTAINERS.length - 1) {
        CONTAINERS[activeIndex + 1].scrollIntoView({
            behavior: 'smooth',
        });
    }
});
