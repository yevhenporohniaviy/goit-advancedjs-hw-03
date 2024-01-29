import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const selector = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

handleBreeds();

async function handleBreeds() {
  selector.style.display = 'none';
  loader.style.display = 'block';
  try {
    const response = await fetchBreeds();
    selector.style.display = 'flex';
    initSelect(response);
  } catch (error) {
    iziToast.error({
      timeout: 5000,
      position: 'topRight',
      message: 'Oops! Something went wrong! Try reloading the page!',
    });
  } finally {
    loader.style.display = 'none';
  }
}

function initSelect(arr) {
  new SlimSelect({
    select: selector,
    settings: {
      showSearch: false,
    },
    data: arr.map(({ name, id }) => {
      return {
        text: name,
        value: name,
        id: id,
      };
    }),
    events: {
      beforeChange: () => catInfo.replaceChildren(),
      afterChange: handleSelectChange,
    },
  });
}

async function handleSelectChange(result) {
  loader.style.display = 'block';
  try {
    const response = await fetchCatByBreed(result[0].id);

    if (!response.length) throw new Error('Please, select another breed!');

    catInfo.insertAdjacentHTML('beforeend', createCatDetailMark(response[0]));
  } catch (error) {
    iziToast.error({
      timeout: 10000,
      position: 'topRight',
      message: error.message,
    });
  } finally {
    loader.style.display = 'none';
  }
}

function createCatDetailMark({ url, breeds }) {
  return `
    <img class="cat-info__image" src="${url}" >
    <div class="cat-info__info">
      <h2>${breeds[0].name}</h2>
      <p>${breeds[0].description}</p>
      <p><strong>Temperament</strong>: ${breeds[0].temperament}</p>
    </div>
  `;
}
