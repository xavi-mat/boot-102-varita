'use strict';
// Varita mágica, by xavimat

// TASK 1. Prevent all clicks
document.body.addEventListener('click', (e)=>e.preventDefault());

// TASKS 2. On click
// TASK 2.1. Change images on click
// Create a randomizer function
const randomInt = (num) => Math.floor(Math.random() * num) + 1;
// Callback for clicks on images
const imageSpell = (e) => {
    const num = randomInt(6);
    e.currentTarget.src = `/assets/magic-${num}.gif`;
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
    e.currentTarget.style.color = randomColor();
    e.currentTarget.style.backgroundColor = randomColor();
};
// Get node list of paragraphs
const pars = document.querySelectorAll('p');
// Add a listener to every paragraph
pars.forEach(node=>{
    node.addEventListener('click', paragraphSpell);
});

// TASK 2.3. Change background color on `section` and `article` nodes
// Callback for clicks on sections and articles
const sectionSpell = (e) => {
    e.currentTarget.style.backgroundColor = randomColor();
};
// Get node lists of articles and sections
const arts = document.querySelectorAll('article');
const sects = document.querySelectorAll('section');
// Add a listener to every article and section
arts.forEach(node=>{node.addEventListener('click', sectionSpell)});
sects.forEach(node=>{node.addEventListener('click', sectionSpell)});

// TASKS 3. mouseenter and mouseleave
// TASK 3.1 Images: change to abracadabra.gif
// Callback on mouseenter
const imageCharmIn = (e) => {
    const img = e.currentTarget;
    // Save old image in data- attribute
    img.dataset.olderImage = img.src;
    // Change to new image
    img.src = '/assets/abracadabra.gif';
};
// Callback on mouseleave
const imageCharmOut = (e) => {
    const img = e.currentTarget;
    // Change to older image
    img.src = img.dataset.olderImage;
};
// Add two listeners to every image
imgs.forEach(node=>{
    node.addEventListener('mouseenter', imageCharmIn);
    node.addEventListener('mouseleave', imageCharmOut);
});

// TASK 3.2 Paragraphs: Change text and background colors
// Calbacks on mouseenter & mouseleave
const parCharmIn = (e) => {
    const par = e.currentTarget;
    // Save old colors
    par.dataset.olderColor = par.style.color;
    par.dataset.olderBgColor = par.style.backgroundColor;
    paragraphSpell(e);
};
const parCharmOut = (e) => {
    const par = e.currentTarget;
    // Save old colors
    par.style.color = par.dataset.olderColor;
    par.style.backgroundColor = par.dataset.olderBgColor;
};
// Add listeners to every paragraph
pars.forEach(node=>{
    node.addEventListener('mouseenter', parCharmIn);
    node.addEventListener('mouseleave', parCharmOut);
});
// TASK 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
