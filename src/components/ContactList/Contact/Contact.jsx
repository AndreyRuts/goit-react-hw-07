import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';


const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    
    return (
        <>
            <li className={s.listItem}>
                <div>
                    <p className={s.text}>{name}</p>
                    <p className={s.text}>{number}</p>
                </div>
                <button className={s.delBtn} type='button' onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </li>
        </>
    );
}; 

export default Contact;
