const slideSeventhPageRows = document.querySelectorAll('.seventh-page');

slideSeventhPageRows.forEach((row) => {
    const elements = row.querySelectorAll('h1');

    row.addEventListener('mouseenter', () => {
        elements.forEach((element) => {
            element.style.animationPlayState = 'paused';
        });
    });

    row.addEventListener('mouseleave', () => {
        elements.forEach((element) => {
            element.style.animationPlayState = 'running';
        });
    });
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-container'),
    smooth: true
});

const time = gsap.timeline()

time.to('.main-container', {
    y: '100vh',
    scale: 0.6,
    duration: 0
})

time.from('.main-container', {
    y: '30vh',
    duration: 1,
    delay: 1
})

time.to('.main-container', {
    y: '0vh',
    rotate: 360,
    scale: 1,
    duration: 1.5
})