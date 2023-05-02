/**
 * Create SVG <image> element with given `x`, `y`, `imgSize`, and `category`.
 */
export function CategoryBackground({ x, y, imgSize, category }) {
  const xmlns = "http://www.w3.org/2000/svg";
  const imgElement = document.createElementNS(xmlns, 'image');
  imgElement.setAttribute('href', category.img);
  imgElement.setAttribute('width', imgSize);
  imgElement.setAttribute('height', imgSize);
  imgElement.setAttribute('x', x);
  imgElement.setAttribute('y', y);

  return imgElement;
}
