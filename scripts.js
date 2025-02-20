'use strict';
// Varita mágica, by xavimat


////////////////////////////////////////////////////////////////////////////////
// UTILS

// Create a random integers function
const randomInt = (num) => Math.floor(Math.random() * num) + 1;

// Get a random hex color
const randomColor = () =>
    '#' + randomInt(255).toString(16) +
    randomInt(255).toString(16) +
    randomInt(255).toString(16);


////////////////////////////////////////////////////////////////////////////////
// TASKS

// TASK 1. Prevent all clicks //////////////////////////////////////////////////
document.body.addEventListener('click', (e) => {e.preventDefault();});

// TASKS 2. On click ///////////////////////////////////////////////////////////

// TASK 2.1. Change images on click

// Callback for clicks on images
const imageSpell = (e) => {

    const img = e.currentTarget;

    // OLD CODE:
    // I was using this code before the functions of exercises 4, 5, and 6
    // const num = randomInt(6);
    // img.src = `/assets/magic-${num}.gif`;

    // NEW CODE:
    // Now I use this code:
    img.src = getMagicImage();

    // Save image in data- attribute
    img.dataset.oldImage = img.src;
};

// Get the node list of images
const imgs = document.querySelectorAll('img');

// Add a listener to every image
imgs.forEach(node => {
    node.addEventListener('click', imageSpell);
});


// TASK 2.2. Change colors on paragraphs

// Callback for clicks on paragraphs
const paragraphSpell = (e) => {
    const par = e.currentTarget;

    // Save new colors in data- attributes
    par.dataset.oldColor = par.style.color;
    par.dataset.oldBgColor = par.style.backgroundColor;
};

// Get node list of paragraphs
const pars = document.querySelectorAll('p');

// Add a listener to every paragraph
pars.forEach(node => {
    node.addEventListener('click', paragraphSpell);
});

// TASK 2.3. Change background color on `section` and `article` nodes

// Callback for clicks on sections and articles
const sectionSpell = (e) => {
    const elem = e.currentTarget;

    // Change bg color
    // OLD VERSION: elem.style.backgroundColor = randomColor();
    elem.style.backgroundColor = getRandomColors();

    // Save color
    elem.dataset.oldBgColor = elem.style.backgroundColor;
};

// Get node lists of articles and sections
const arts = document.querySelectorAll('article');
const sects = document.querySelectorAll('section');

// Add a listener to every article and section
arts.forEach(node => { node.addEventListener('click', sectionSpell); });
sects.forEach(node => { node.addEventListener('click', sectionSpell); });


// TASKS 3. mouseenter and mouseleave //////////////////////////////////////////

// TASK 3.1 Images: change to abracadabra.gif

// Callback on mouseenter
const imageCharmIn = (e) => {
    const img = e.currentTarget;

    // Save old image in data- attribute
    img.dataset.oldImage = img.src;

    // Change to new image
    img.src = '/assets/abracadabra.gif';
};

// Callback on mouseleave
const imageCharmOut = (e) => {
    const img = e.currentTarget;

    // Change to old image
    img.src = img.dataset.oldImage;
};

// Add two listeners to every image
imgs.forEach(node => {
    node.addEventListener('mouseenter', imageCharmIn);
    node.addEventListener('mouseleave', imageCharmOut);
});


// TASK 3.2 Paragraphs: Change text and background colors

// Calbacks on mouseenter & mouseleave
const parCharmIn = (e) => {
    const par = e.currentTarget;

    // Save old colors
    par.dataset.oldColor = par.style.color;
    par.dataset.oldBgColor = par.style.backgroundColor;

    // Change to ephemeral colors
    // OLD VERSION: par.style.color = randomColor();
    // OLD VERSION: par.style.backgroundColor = randomColor();
    par.style.color = getRandomColors();
    par.style.backgroundColor = getRandomColors();
};

const parCharmOut = (e) => {
    const par = e.currentTarget;

    // Restore old colors
    par.style.color = par.dataset.oldColor;
    par.style.backgroundColor = par.dataset.oldBgColor;
};

// Add listeners to every paragraph
pars.forEach(node => {
    node.addEventListener('mouseenter', parCharmIn);
    node.addEventListener('mouseleave', parCharmOut);
});


// TASK 3.3 article or section: bg color distinct from paragraph

// Callbacks
const artCharmIn = (e) => {
    const elem = e.currentTarget;

    // Save old bg color
    elem.dataset.oldBgColor = elem.style.backgroundColor;

    // Change to ephemeral bg color
    // OLD VERSION: elem.style.backgroundColor = randomColor();
    elem.style.backgroundColor = getRandomColors();
};

const artCharmOut = (e) => {
    const elem = e.currentTarget;

    // Restore old bg color
    elem.style.backgroundColor = elem.dataset.oldBgColor;
};

// Add listeners to every article and section
arts.forEach(node => {
    node.addEventListener('mouseenter', artCharmIn);
    node.addEventListener('mouseleave', artCharmOut);
});

sects.forEach(node => {
    node.addEventListener('mouseenter', artCharmIn);
    node.addEventListener('mouseleave', artCharmOut);
});


// TASK 4. Create randomizer ///////////////////////////////////////////////////
const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    return array[randomInt(array.length-1)];
}

const getRandom2 = (array) => array[Math.floor(Math.random()*array.length)];

console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'


// TASK 5. Random from color palette ///////////////////////////////////////////
const palette = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"];

const getRandomColors = () => getRandom(palette);


// TASK 6. Random magic image //////////////////////////////////////////////////
const magicImages = ["magic-1.gif", "magic-2.gif", "magic-3.gif", "magic-4.gif",
    "magic-5.gif", "magic-6.gif"];

const getMagicImage = () => '/assets/' + getRandom(magicImages);
