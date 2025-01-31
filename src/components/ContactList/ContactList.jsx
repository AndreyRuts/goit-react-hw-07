import s from './ContactList.module.css'
import Contact from './Contact/Contact'
import { useSelector } from 'react-redux';
import { selectContact } from '../../redux/contactsSlice';


const ContactList = () => {
    const contacts = useSelector(selectContact);
    

    return (
        <ul className={s.contactList}>
            {contacts.map(item => (<Contact
                key={item.id} {...item}
                id={item.id}
            />))}
        </ul>
    );
};

export default ContactList;