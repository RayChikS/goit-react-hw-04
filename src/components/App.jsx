import { useState } from 'react';
import { fetchData } from './fetch-data';
import { ImageModal } from './ImageModal';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
import { ErrorMassage } from './ErrorMassage';
import { ImageGallery } from './ImageGallery';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchData(topic);
      console.log(data);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {images.length > 0 && <ImageGallery items={images} />}
      <ImageModal />
    </>
  );
};
