export function LockScreenImg({ lockX, lockY,lockimgSize, skill }) {
    const xmlns = "http://www.w3.org/2000/svg";
    const imgElement = document.createElementNS(xmlns, 'image');
    imgElement.setAttribute('href', skill);
    imgElement.setAttribute('width', lockimgSize);
    imgElement.setAttribute('height', lockimgSize);
    imgElement.setAttribute('x', lockX);
    imgElement.setAttribute('y', lockY);
    return imgElement;
  }
  