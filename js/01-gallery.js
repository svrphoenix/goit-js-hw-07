import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const galleryItemsMarkup =
  galleryItems
    .map(
      ({preview, original, description}) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
galleryRef.innerHTML = galleryItemsMarkup;

galleryRef.addEventListener('click', onGalleryClick);

  function onGalleryClick(event) {
    event.preventDefault();

    const { target } = event;
    if (target.nodeName !== 'IMG') {
      return;
    }
    const { source } = target.dataset;

    const modal = basicLightbox.create(`<img src="${source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener('keydown', onCloseModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', onCloseModal);
      },
      });
    
    modal.show();

    function onCloseModal(event) {
      if (event.code === 'Escape') {
        modal.close();
      }
    }
  }

