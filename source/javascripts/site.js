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

    show(event) {
      const {
        alt, title, srcset, sizes, src, date, dimensions, medium, sold
      } = event.currentTarget.dataset;

      const imgAttrs = { alt, title, srcset, sizes, src };
      const caption = this.createCaption(title, date, dimensions, medium, sold);

      this.createNewFigure(imgAttrs, caption);
      this.lightboxTarget.classList.remove('hidden');
      this.data.delete('hidden');
    }

    createNewFigure(imgAttrs, caption) {
      setMultipleAttributes(this.imgTarget, imgAttrs);
      removeNodeContents(this.captionTarget);
      this.captionTarget.appendChild(caption);
    }

    createCaption(title, date, dimensions, medium, sold) {
      const caption = document.createElement('p');
      [title, date, dimensions, medium, sold]
        .filter(attr => attr.length)
        .forEach(attr => {
          const span = document.createElement('span');
          span.appendChild(document.createTextNode(attr));
          caption.appendChild(span);
        });
      return caption;
    }
  });
})();
