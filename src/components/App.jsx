import React, { useState, useEffect } from 'react';
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
  const [totalPage, setTotalPage] = useState(0);
  const [topic, setTopic] = useState('');
  const [warning, setWarning] = useState('');

  const handleSearch = async () => {
    try {
      if (!topic.trim()) {
        setWarning('Please enter a valid search term');
        return;
      }

      setLoading(true);
      const data = await fetchData(topic, page);
      if (data.results.length === 0) {
        setWarning('No results found. Please try another search term.');
        return;
      }

      setWarning('');
      if (page === 1) {
        setImages(data.results);
      } else {
        setImages(prevImages => [...prevImages, ...data.results]);
      }
      setTotalPage(data.total_pages);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (topic || page > 1) {
      handleSearch();
    }
  }, [topic, page]); // Вызовется при изменении topic или page

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchInputChange = newTopic => {
    setTopic(newTopic);
    setPage(1); // Сбрасываем страницу на первую при изменении темы
    setWarning(''); // Очищаем предупреждение при изменении запроса
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchInputChange} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {warning && <div className={css.warning}>{warning}</div>}
      {images.length > 0 && <ImageGallery items={images} />}

      <div className={css.centered}>
        {page < totalPage && <LoadMore onClick={loadMore} />}
      </div>
    </div>
  );
};
