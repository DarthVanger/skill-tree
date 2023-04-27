import { makeSvgZoom } from './svgZoom.js';

export const svgContainer = document.createElement("div");
svgContainer.id = 'svgContainer';

const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

svgElement.innerHTML = `
  <image href="img/windrunner.webp" height="100" width="100" />
`;

svgContainer.append(svgElement);

/**
 * Execute makeSvgZoom() with zero timeout:
 * it means it will run *after* app.js appends svgContainer to body.
 * Without zero timeout, it will run *before* svgContainer is in the body.
 */
setTimeout(function() {
  makeSvgZoom(svgElement, svgContainer);
}, 0);

