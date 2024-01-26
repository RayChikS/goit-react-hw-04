import { ImageCard } from './ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {
  return (
    <div className={css.gallery}>
      <ul className={css.galleryList}>
        {items.map((item, index) => (
          <li className={css.galleryItem} key={`${item.id}_${index}`}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
