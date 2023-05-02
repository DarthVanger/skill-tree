import { CategoryBackground } from './CategoryBackground.js';
import { CategoryName } from './CategoryName.js';
import { makeSvgZoom } from './svgZoom.js';

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
const categories = [
  {
    name: 'html',
    img: 'img/panda.jpg',
  },
  {
    name: 'css',
    img: 'img/orc.jpeg',
  },
  {
    name: 'javascvirt',
    img: 'img/windrunner.webp',
  },
  {
    name: 'gamedev',
    img: 'img/orc-druid.jpeg',
  },
];

/**
 * Append category background img and category name
 * to the `svgElement`.
 */
function appendCategory(category, index) {
  // set background img size for each category
  const imgSize = 250;
  // horizontal space between categories
  const margin = 50;

  // x, y of the category background img
  const x = index * (imgSize + margin);
  const y = 0;

  // create svg img and svg text elements
  const categoryBackground = CategoryBackground({ x, y, imgSize, category });
  const categoryNameEl = CategoryName({ x, y, imgSize, category });

  // append svg img and svg text elements
  svgElement.append(categoryBackground);
  svgElement.append(categoryNameEl);
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

