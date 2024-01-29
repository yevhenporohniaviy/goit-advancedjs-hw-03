import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_Q0VNADEy32RTi0X0eKuhYCfTRuaBwaRjJYXAI9dpQx4K9UpiqQs3veVx8O0mXCjR';

async function fetchBreeds() {
  const { data } = await axios.get('breeds');
  return data;
}

async function fetchCatByBreed(breedId) {
  const { data } = await axios.get('images/search', {
    params: {
      breed_ids: breedId,
    },
  });
  return data;
}

export { fetchBreeds, fetchCatByBreed };
