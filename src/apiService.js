const apiKey = '17731769-f1a805891ae81f5c258c77c7a';

function fetchImg(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => alert(error));
}

export default fetchImg;
