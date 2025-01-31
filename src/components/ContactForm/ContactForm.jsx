import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


const ContactForm = () => {
    const initValues = { name: "", number: "" };
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        actions.resetForm();
    };
    const schema = Yup.object().shape({
        name: Yup.string().min(3).max(50).required(),
        number: Yup.string().min(3).max(50).required()
    });
    
    return (
        <div className={s.formWrapper}>
            <Formik onSubmit={handleSubmit} initialValues={initValues} validationSchema={schema}>
                <Form className={s.form}>
                    <label className={s.formLable}>
                        <span className={s.formSpan}>Name</span>
                        <Field className={s.input} type='text' name='name'>
                        </Field>
                        <ErrorMessage name='name' className={s.error} component='p'></ErrorMessage>
                    </label>
                    <label className={s.formLable}>
                        <span className={s.formSpan}>Number</span>
                        <Field className={s.input} type='text' name='number'>
                        </Field>
                        <ErrorMessage name='number' className={s.error} component='p'></ErrorMessage>
                    </label>
                    <button className={s.formBtn} type='submit'>Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;