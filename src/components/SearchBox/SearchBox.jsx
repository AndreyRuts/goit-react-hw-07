import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import s from './SearchBox.module.css';


const SearchBox = () => {
    const dispatch = useDispatch();

    return (
        <div className={s.searchBoxWrapper}>
            <p>Find contacts by name</p>
            <input className={s.searchBoxInput}
                onChange={(e) => dispatch(changeFilter(e.target.value))} />
        </div>
    );
};

export default SearchBox;