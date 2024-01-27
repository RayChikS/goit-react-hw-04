import css from './LoadMore.module.css';

export const LoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      Load More
    </button>
  );
};
