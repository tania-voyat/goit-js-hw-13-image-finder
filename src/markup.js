import imgTpl from './imgs.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),
};

function galleryMarkup(hits) {
  const markUp = imgTpl(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markUp);
}

export default galleryMarkup;
