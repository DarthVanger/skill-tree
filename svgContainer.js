import { CategoryBackground } from './CategoryBackground.js';
import { CategoryName } from './CategoryName.js';
import { makeSvgZoom } from './svgZoom.js';
import { LockScreenImg } from './lockScreen.js';

/**
 * Container for the <svg> tag: it's need for zoom.
 */
export const svgContainer = document.createElement("div");
svgContainer.id = 'svgContainer';

/**
 * <svg> element - container for all our stuff :)
 */
const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

/**
 * Array of categories of skills.
 * Each category is object with `name` and `img`.
 */
const lockImg = 'img/lock.png';
const functionLogo = 'img/functionLogo.svg';

const catSkills = [
  {
    img: functionLogo,
    score: 0,
    name: 'functions',
  },
  {
    img: lockImg,
    score: 0,
    name: 'functions',
  },
  {
    img: functionLogo,
    score: 0,
    name: 'functions',
  },
  {
    img: functionLogo,
    score: 0,
    name: 'functions',
  },
  {
    img: lockImg,
    score: 0,
    name: 'functions',
  },
]


const categories = [
  {
    name: 'html',
    img: 'img/panda.jpg',
    skills: catSkills,
  },
  {
    name: 'css',
    img: 'img/orc.jpeg',
    skills: catSkills,
  },
  {
    name: 'javascvirt',
    img: 'img/windrunner.webp',
    skills: catSkills,
  },
  {
    name: 'gamedev',
    img: 'img/orc-druid.jpeg',
    skills: catSkills,
  },
];

/**
 * Append category background img and category name
 * to the `svgElement`.
 */
function appendCategory(category, catagoryIndex) {
  // set background img size for each category
  const backgroundImgSize = 200;
  console.log('appendCatagory', category.name, catagoryIndex);
  // horizontal space between categories
  const backgroundMargin = 50;
  
  // x, y of the category background img
  const catagoryBackgroundX = catagoryIndex * (backgroundImgSize + backgroundMargin);
  const catagoryBackgroundY = 0;
  
  // set lock img size for each lock
  const lockImgSize = 39;
  // horizontal space between locks
  const lockMargin = 1;
  
  // create svg img and svg text elements
  const categoryBackground = CategoryBackground({ x: catagoryBackgroundX, y: catagoryBackgroundY, imgSize: backgroundImgSize, category });
  const categoryNameEl = CategoryName({ x: catagoryBackgroundX, y: catagoryBackgroundY, imgSize: backgroundImgSize, category });
  
  // append svg img and svg text elements
  svgElement.append(categoryBackground);
  svgElement.append(categoryNameEl);
  
  category.skills.forEach(veiwSkill);

  function veiwSkill (skill,skillindex) {
  console.log('viewSkills', skill, skillindex);

    const lockX = skillindex * ( lockImgSize + lockMargin) + catagoryBackgroundX ;
    const lockY = 145;
    const lockScreenImg = LockScreenImg({ lockX,lockY,lockimgSize: lockImgSize, skill });
    svgElement.append(lockScreenImg);
 }
}

// append the <svg> tag to the container <div>
svgContainer.append(svgElement);

// append all categories to the svg tag
categories.forEach(appendCategory);

/**
 * Execute makeSvgZoom() with zero timeout:
 * it means it will run *after* app.js appends svgContainer to body.
 * Without zero timeout, it will run *before* svgContainer is in the body.
 */
setTimeout(function() {
  makeSvgZoom(svgElement, svgContainer);
}, 0);

