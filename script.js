// Scroll Animations //

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sectionTwo',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: false,
    },
});

tl.to(
    '#fanta',
    {
        top: '120%',
        left: '0%',
    },
    'orange'
);

tl.to(
    '#cut-orange',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
);

tl.to(
    '#orange',
    {
        width: '15%',
        top: '160%',
        right: '10%',
    },
    'orange'
);

tl.to(
    '#leaf',
    {
        top: '110%',
        rotate: '600deg',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#leaf2',
    {
        top: '110%',
        rotate: '530deg',
        left: '0%',
    },
    'orange'
);

// Second Timeline //

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sectionThree',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: false,
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#cut-orange',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '213%',
    },
    'ca'
);
