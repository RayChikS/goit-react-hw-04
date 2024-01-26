import { ImageCard } from './ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {
  return (
    <div className={css.gallery}>
      <ul className={css.galleryList}>
        {items.map(item => (
          <li className={css.galleryItem} key={item.id}>
            <ImageCard key={item.id} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
