import { ImageCard } from './ImageCard';

export const ImageGallery = ({ items }) => {
  return (
    <ul className="gallery">
      <li className="gallery-item">
        {items.map(item => {
          <ImageCard key={item.id} item={item} />;
        })}
      </li>
    </ul>
  );
};
