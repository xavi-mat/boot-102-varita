'use strict';
// Varita mágica, by xavimat

// TASK 1. Prevent all clicks
document.body.addEventListener('click', (e)=>e.preventDefault());

// TASK 2.1. Change images on click
// Create a randomizer function
const randomInt = (num) => Math.floor(Math.random() * num) + 1;
// Callback for clicks
const imageSpell = (e) => {
    const num = randomInt(6);
    e.target.src = `/assets/magic-${num}.gif`;
};
// Get the node list of images
const imgs = document.querySelectorAll('img');
// Add a listener to every image
imgs.forEach(node=>{
    node.addEventListener('click', imageSpell)});


