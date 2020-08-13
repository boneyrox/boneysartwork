var typed = new Typed(".type", {
    strings: ["Web Developer.", "Graphic Designer.", "Variable."],
    smartBackspace: true,
    typeSpeed: 90,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});



new fullpage('#fullPage', {
    // Parallax: true,
    // autoScrolling: true,
    // navigation: true
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    menu: '#menu',
    parallax: true,
    // parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    },
    scrollingSpeed: 1000,
    autoScrolling: true,
    navigation: true,
    fitToSection: false
});