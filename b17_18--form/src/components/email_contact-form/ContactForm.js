import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import MyField from './MyField'
import * as Yup from 'yup';

export default function ContactForm() {
    const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '' });

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Vui lòng điền tên'),
        email: Yup.string()
            .required('Vui lòng điền tên')
            .email('Không đúng định dạng email'),
        phone: Yup.string()
            .required('Vui lòng điền số điện thoại'),

    })

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    }
    return (
        <div style={{ width: '300px' }}>
            <h2>Contact form</h2>
            <Formik
                validationSchema={validationSchema}
                initialValues={contactForm}
                onSubmit={onSubmit}
            >
                <Form>
                    <MyField type="text" name="name" label='Name' id='name' placeholder='name' />

                    <MyField type="email" name="email" label='Email' id='email' placeholder='email' />

                    <MyField type="number" name="phone" label='phone' id='phone' placeholder='phone' />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
