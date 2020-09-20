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
  const template = e.currentTarget.querySelector('template');

  removeNodeContents(lightbox);
  const templateClone = template.content.cloneNode(true);
  lightbox.appendChild(templateClone);

  lightbox.classList.remove('hidden');
  document.body.classList.add('no-overflow');
  setTimeout(() => {
    addLightboxCloseListeners();
  }, 500);
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
