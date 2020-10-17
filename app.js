const home_content = document.querySelector('.home-content');
const slider = document.querySelector('.slider');
const navbar_brand = document.querySelector('.navbar-brand');
const navbar_nav = document.querySelector('.navbar-nav');
const headline = document.querySelector('.headline');

const t1 = new TimelineMax();

t1.fromTo(
    home_content, 
    1,
    { height: "0%" }, 
    { height:"80%" , ease: Power2.easeInOut }
).fromTo(
    home_content,
    1.2,
    { width:"100%" },
    { width: "80%",ease: Power2.easeInOut }
).fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
).fromTo(
    navbar_brand,
    0.5,
    { opacity: 0, x: 30}, 
    { opacity: 1, x: 0 },
    "-=0.5"
).fromTo(
    navbar_nav,
    0.5,
    { opacity: 0, x: 30}, 
    { opacity: 1, x: 0 },
    "-=0.5"
).fromTo(
    headline,
    0.5,
    { opacity: 0, x: 30}, 
    { opacity: 1, x: 0 },
    "-=0.5"
);