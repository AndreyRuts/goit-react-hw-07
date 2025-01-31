import s from './ContactList.module.css'
import Contact from './Contact/Contact'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';


const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    

    return (
        <ul className={s.contactList}>
            {contacts.map(item => (<Contact
                key={item.id} {...item}
                
            />))}
        </ul>
    );
};

export default ContactList;