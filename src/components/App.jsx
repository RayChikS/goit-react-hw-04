// app.js
import { useState } from 'react';
import { fetchData } from './fetch-data';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
import { ErrorMassage } from './ErrorMassage';
import { ImageGallery } from './ImageGallery';
import { LoadMore } from './LoadMore';
import css from './App.module.css';

let page = 1;
let totalPages = 0;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [newSearch, setNewSearch] = useState(true);
  const perPage = 20;

  const handleSearch = async topic => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchData(topic);
      setImages(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {images.length > 0 && <ImageGallery items={images} />}
      <div className={css.centered}>
        <LoadMore />
      </div>
    </div>
  );
};
