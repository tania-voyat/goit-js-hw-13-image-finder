import './styles.css';
import fetchImg from './apiService';
import galleryMarkup from './markup';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let searchQuery = '';
let page = 1;

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  searchQuery = form.elements.query.value;
  refs.gallery.innerHTML = '';
  refs.loadMoreBtn.classList.add('is-hidden');
  page = 1;
  fetchImg(searchQuery, page).then(hits => {
    galleryMarkup(hits);
    page += 1;
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  fetchImg(searchQuery, page).then(hits => {
    galleryMarkup(hits);
    page += 1;
    window.scrollTo({
      //   top:
      behavior: 'smooth',
    });
  });
});
