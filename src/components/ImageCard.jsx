import React from 'react';
import css from './ImageCard.module.css';

export const ImageCard = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <div className={css.photoCard} onClick={handleClick}>
      <img
        className={css.photo}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};
