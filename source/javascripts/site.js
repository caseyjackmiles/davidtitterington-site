const doWhenReady = function (action) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      action();
    });
  } else {
    action();
  }
}

doWhenReady(function () {
  const paintings = document.querySelectorAll('.gallery .painting');
  paintings.forEach((painting) => {
    painting.addEventListener('click', activateLightbox);
  });
});

const activateLightbox = function (e) {
  const lightbox = document.getElementById('lightbox');

  removeNodeContents(lightbox);
  const figure = createNewFigure(e);
  lightbox.appendChild(figure);

  lightbox.classList.remove('hidden');
  document.body.classList.add('no-overflow');
  setTimeout(() => {
    addLightboxCloseListeners();
  }, 500);
}

const createNewFigure = function (e) {
  // TODO: replace this function with mithril, react, or some other alternative.
  const {
    alt, title, srcset, sizes, src, date, dimensions, medium, sold
  } = e.currentTarget.dataset;

  const imgElement = document.createElement('img');
  imgElement.setAttribute('alt', alt);
  imgElement.setAttribute('title', title);
  imgElement.setAttribute('srcset', srcset);
  imgElement.setAttribute('sizes', sizes);
  imgElement.setAttribute('src', src);

  const pElement = document.createElement('p');
  [title, date, dimensions, medium, sold]
    .filter((attr) => attr.length)
    .forEach((attr) => {
      const span = document.createElement('span');
      const text = document.createTextNode(attr);
      span.appendChild(text);
      pElement.appendChild(span);
    });

  const figCaptionElement = document.createElement('figcaption');
  figCaptionElement.appendChild(pElement);

  const figureElement = document.createElement('figure');
  figureElement.appendChild(imgElement);
  figureElement.appendChild(figCaptionElement);

  return figureElement;
}

const addLightboxCloseListeners = function () {
  // TODO: Add event listener to a 'close' button on lightbox
  document.addEventListener('click', detectClickOutsideFigure);
  document.addEventListener('keydown', handleLightboxEscapeKeypress);
}

const detectClickOutsideFigure = function (e) {
  const figure = document.getElementById('lightbox').querySelector('figure');
  const wasOutside = !figure.contains(e.target);
  if (wasOutside) { deactivateLightbox(); }
}

const removeLightboxCloseListeners = function () {
  document.removeEventListener('keydown', handleLightboxEscapeKeypress);
  document.removeEventListener('click', detectClickOutsideFigure);
}

const handleLightboxEscapeKeypress = function (e) {
  if (e.code !== 'Escape') return;
  deactivateLightbox();
  document.removeEventListener('keydown', handleLightboxEscapeKeypress);
}

const deactivateLightbox = function () {
  const lightbox = document.getElementById('lightbox');
  document.body.classList.remove('no-overflow');
  lightbox.classList.add('hidden');
  setTimeout(() => {
    removeNodeContents(lightbox);
    removeLightboxCloseListeners();
  }, 500);
}

const removeNodeContents = function (node) {
  while (node.firstChild) {
    lightbox.removeChild(node.firstChild);
  }
}
