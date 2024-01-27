import toast from 'react-hot-toast';
import axios from 'axios';

const unsplashAccessKey = 'FZtDx_Pci4ZIFVDU0oHeKgOQd6E7sSWQ8zNoYyarCQk';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common[
  'Authorization'
] = `Client-ID ${unsplashAccessKey}`;

export const fetchData = async (topic, page) => {
  try {
    const response = await axios.get(
      `/search/photos?page=${page}&query=${topic}&per_page=${20}`
    );
    return response.data;
  } catch (error) {
    toast.error("This didn't work.");
    throw error;
  }
};
