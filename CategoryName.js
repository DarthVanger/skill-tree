/**
 * Create SVG <text> element with given `x`, `y`, `imgSize`, and `category`.
 */
export function CategoryName({ x, y, imgSize, category }) {
  // center of the category background
  const textX = x + imgSize / 2;
  const textY = y + imgSize / 2;

  // create SVG text element
  const xmlns = "http://www.w3.org/2000/svg";
  const categoryNameEl = document.createElementNS(xmlns, 'text');

  // set text content to cateogry name
  categoryNameEl.textContent = category.name;

  // set text align to center both vertically and horizontally
  categoryNameEl.setAttribute('text-anchor', 'middle');
  categoryNameEl.setAttribute('dominant-baseline', 'middle');

  // set x, y
  categoryNameEl.setAttribute('x', textX);
  categoryNameEl.setAttribute('y', textY);

  // set size, color
  categoryNameEl.setAttribute('font-size', '40');
  categoryNameEl.setAttribute('fill', 'yellowgreen');
  categoryNameEl.setAttribute('stroke', 'black');
  categoryNameEl.setAttribute('stroke-width', '2');

  return categoryNameEl;
}
