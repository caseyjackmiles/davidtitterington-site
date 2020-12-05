function setMultipleAttributes(element, attributes) {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function removeNodeContents(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function createImageNode(imgAttrs) {
  const image = document.createElement('img');
  setMultipleAttributes(image, imgAttrs);
  return image;
}

function createCaptionNode(imageDetails) {
  const caption = document.createElement('p');
  imageDetails.filter(detail => detail.length).forEach(detail => {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(detail))
    caption.appendChild(span);
  });
  return caption;
}


(() => {
  document.documentElement.classList.remove('no-js');

  const application = Stimulus.Application.start();

  application.register('lightbox', class extends Stimulus.Controller {
    static get targets() {
      return ['img', 'caption', 'painting', 'lightbox', 'figure'];
    }

    dismiss() {
      this.lightboxTarget.classList.add('hidden');
      this.data.set('hidden', true)
    }

    dismissWithKey(event) {
      if (this.data.get('hidden')) return;
      if (event.code !== 'Escape') return;
      this.dismiss();
    }

    dismissWithClick(event) {
      if (this.data.get('hidden')) return;
      const clickedOutsideFigure = !this.figureTarget.contains(event.target);
      if (clickedOutsideFigure) this.dismiss();
    }

    showLightbox(event) {
      this.index = event.currentTarget.dataset.lightboxIndex;
      this.displayImage();
    }

    displayImage() {
      const {
        alt, title, srcset, sizes, src, date, dimensions, medium, sold
      } = this.paintingTargets[this.index].dataset;

      const imgAttrs = { alt, title, srcset, sizes, src };
      const captionDetails = [title, date, dimensions, medium, sold];

      const imageNode = createImageNode(imgAttrs);
      const captionNode = createCaptionNode(captionDetails);

      this.replaceImageAndCaption(imageNode, captionNode)
      this.lightboxTarget.classList.remove('hidden');
      this.data.delete('hidden');
    }

    replaceImageAndCaption(imageNode, captionNode) {
      // Set target attrs so lightbox continues to work correctly.
      imageNode.setAttribute('data-target', 'lightbox.img');
      captionNode.setAttribute('data-target', 'lightbox.caption');

      this.imgTarget.replaceWith(imageNode);
      this.captionTarget.replaceWith(captionNode);
    }
  });
})();
