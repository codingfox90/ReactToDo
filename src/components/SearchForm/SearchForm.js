import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder='Search...' />
      <Button>
        <span className='fa fa-search' />
      </Button>
      <TextInput placeholder='Add new column' />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchForm;
