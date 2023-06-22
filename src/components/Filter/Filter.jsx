import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { setFilter } from 'redux/action';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };
return (

  
  <div>
    <label className={css.filterLabel}>Find contacts by Name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);
}

