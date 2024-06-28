const DATA = {
  src: "https://www.elespectador.com/resizer/gRSKpXuibFQjUTSHk8ZfqwdBuok=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/UOKYHW4KKFANRIHHOVUSR5HX5Y.jpg",
  alt: "Un plato con aborrajados junto a tres plátanos maduros",
  title: "Delicioso plato de Aborrajado!!!",
};

/**
 *
 * Write image properties
 * @param {HTMLImageElement} image
 * @returns {HTMLImageElement}
 */

const set_image_properties = function (image) {
  const clone = image.cloneNode(true);
  return Object.assign(clone, DATA);
};

/**
 * Creates picture and image elements
 * @returns {HTMLPictureElement}
 */
const create_picture = function () {
  const picture = document.createElement("picture");
  const image = document.createElement("img");

  picture.appendChild(set_image_properties(image));

  return picture;
};

const loadPicture = function () {
  const [header] = document.getElementsByClassName("header");
  const [title] = header.getElementsByTagName("h1");
  const picture = create_picture();

  header.insertBefore(picture, title);
};

document.addEventListener("DOMContentLoaded", loadPicture);
