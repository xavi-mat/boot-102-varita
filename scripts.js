'use strict';
// Varita mágica, by xavimat

// TASK 1. Prevent all clicks
document.body.addEventListener('click', (e)=>e.preventDefault());

// TASK 2.1. Change images on click
// Create a randomizer function
const randomInt = (num) => Math.floor(Math.random() * num) + 1;
// Callback for clicks on images
const imageSpell = (e) => {
    const num = randomInt(6);
    e.target.src = `/assets/magic-${num}.gif`;
};
// Get the node list of images
const imgs = document.querySelectorAll('img');
// Add a listener to every image
imgs.forEach(node=>{
    node.addEventListener('click', imageSpell);
});

// TASK 2.2. Change colors on paragraphs
// Get a random hex color
const randomColor = () =>
    '#' + randomInt(255).toString(16) +
    randomInt(255).toString(16) +
    randomInt(255).toString(16);
// Callback for clicks on paragraphs
const paragraphSpell = (e) => {
    e.target.style.color = randomColor();
    e.target.style.backgroundColor = randomColor();
};
// Get node list of paragraphs
const pars = document.querySelectorAll('p');
// Add a listener to every paragraph
pars.forEach(node=>{
    node.addEventListener('click', paragraphSpell);
});


