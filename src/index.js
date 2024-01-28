import SlimSelect from "slim-select";
import {fetchBreeds, fetchCatByBreed} from "./cat-api";

const selector = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');


handleBreeds();

function handleBreeds() {
  selector.style.display = 'none';
  fetchBreeds('breeds').then(res => {
    selector.style.display = 'flex';
    initSelect(res)
  })
}

function initSelect(arr) {
  new SlimSelect({
    select: selector,
    settings: {
      showSearch: false,
    },
    data:
      arr.map(({name, id}) => {
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

function handleSelectChange(result) {
  fetchCatByBreed(result[0].id)
    .then(res => {
      catInfo.insertAdjacentHTML('beforeend', createCatDetailMark(res[0]))
    })
}

function createCatDetailMark({url, breeds}) {
  return `
    <img class="cat-info__image" src="${url}" >
    <div class="cat-info__info">
      <h2>${breeds[0].name}</h2>
      <p>${breeds[0].description}</p>
      <p><strong>Temperament</strong>: ${breeds[0].temperament}</p>
    </div>
  `;
}
