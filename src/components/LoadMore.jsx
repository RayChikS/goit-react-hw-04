import css from './LoadMore.module.css';

export const LoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.button} type="module">
      Load More
    </button>
  );
};
