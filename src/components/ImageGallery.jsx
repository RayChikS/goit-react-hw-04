import React, { useState } from 'react';
import { ImageCard } from './ImageCard';
import css from './ImageGallery.module.css';
import { ImageModal } from './ImageModal';

export const ImageGallery = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.gallery}>
      <ul className={css.galleryList}>
        {items.map((item, index) => (
          <li className={css.galleryItem} key={`${item.id}_${index}`}>
            <ImageCard item={item} onClick={openModal} />
          </li>
        ))}
      </ul>
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
};
