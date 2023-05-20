import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import MyField from './MyField';

function EmailForm() {
    const [formEmail, setFormEmail] = useState({ to: '', title: '', message: '', file: '' })

    const validationSchema = Yup.object().shape({
        to: Yup.string()
            .required('Vui lòng điền email')
            .email('không đúng định dạng email'),
        title: Yup.string()
            .required('Vui lòng điền title'),
        message: Yup.string()
            .required("Vui lòng điền message")
    })
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm()
    }

    return (
        <div style={{ width: '300px' }}>
            <h2>Mail form</h2>

            <Formik
                validationSchema={validationSchema}
                initialValues={formEmail}
                onSubmit={onSubmit}
            >
                <Form>
                    <MyField type="text" name='to' id='to' label="To" placeholder='to' />

                    <MyField type="text" name='title' id='title' label="Title" placeholder='title' />

                    <MyField type="text" name='message' id='message' label="message" placeholder='message' />

                    <MyField type="file" name='file' />

                    <button className='btn btn-success' type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default EmailForm