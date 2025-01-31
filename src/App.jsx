import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactsSlice';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());   
    }, [dispatch]);

    const isError = useSelector(selectError);
    const isLoading = useSelector(selectLoading);

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isError && <h2>Something went wrong...</h2>}
            {isLoading && <h2>Loading...</h2>}
        </>
    );
};
export default App;