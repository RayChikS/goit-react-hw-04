import { useState, useEffect } from 'react';
import { fetchData } from './fetch-data';
import { SearchBar } from './SearchBar';
import { Loader } from './Loader';
import { ErrorMassage } from './ErrorMassage';
import { ImageGallery } from './ImageGallery';
import { LoadMore } from './LoadMore';
import css from './App.module.css';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearch = async topic => {
    try {
      setLoading(true);
      const data = await fetchData(topic, page, perPage);
      setImages(prevImages => [...prevImages, ...data.results]);
      setTotalPages(Math.ceil(data.total / perPage));
      setLoadedImages(prev => prev + data.results.length);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loadedImages < totalPages * perPage && (
        <div className={css.centered}>
          <LoadMore onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
};
