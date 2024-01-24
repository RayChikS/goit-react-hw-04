import { FaSearch } from 'react-icons/fa';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    onSearch(form.elements.topic.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};
