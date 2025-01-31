import s from './ContactList.module.css'
import Contact from './Contact/Contact'
import { useSelector } from 'react-redux';
import { selectContact } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';


const ContactList = () => {
    const contacts = useSelector(selectContact);
    const filter = useSelector(selectFilter);
    
    const filteredData = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={s.contactList}>
            {filteredData.map(item => (<Contact
                key={item.id} {...item}
                id={item.id}
            />))}
        </ul>
    );
};

export default ContactList;