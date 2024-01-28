import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_Q0VNADEy32RTi0X0eKuhYCfTRuaBwaRjJYXAI9dpQx4K9UpiqQs3veVx8O0mXCjR';

const loader = document.querySelector('.loader');

async function fetchBreeds() {
  try {
    loader.style.display = 'block';
    const { data } = await axios.get('breeds');
    return data;
  } catch (error) {
    iziToast.error({
      timeout: 10000,
      position: 'topRight',
      message: 'Oops! Something went wrong! Try reloading the page!',
    });
    throw new Error(`${error.code} ${error.message}`);
  } finally {
    loader.style.display = 'none';
  }
}

async function fetchCatByBreed(breedId) {
  try {
    loader.style.display = 'block';
    const { data } = await axios.get('images/search', {
      params: {
        breed_ids: breedId,
      },
    });

    return data;
  } catch (error) {
    iziToast.error({
      timeout: 10000,
      position: 'topRight',
      message: 'Oops! Something went wrong! Try reloading the page!',
    });
    throw new Error(`${error.code} ${error.message}`);
  } finally {
    loader.style.display = 'none';
  }
}

export {
  fetchBreeds,
  fetchCatByBreed
}
