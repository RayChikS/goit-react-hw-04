import axios from 'axios';
import toast from 'react-hot-toast';

const unsplashAccessKey = 'FZtDx_Pci4ZIFVDU0oHeKgOQd6E7sSWQ8zNoYyarCQk';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common[
  'Authorization'
] = `Client-ID ${unsplashAccessKey}`;

export const fetchData = async topic => {
  try {
    const response = await axios.get(`/search/photos?query=${topic}`);
    return response.data.results;
  } catch (error) {
    toast.error("This didn't work.");
  }
};
