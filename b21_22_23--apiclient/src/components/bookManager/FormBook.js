import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    title: Yup.string().required('Vui lòng nhập title'),
    quantity: Yup.string().required('Vui lòng nhập quantity')
})
export default function FormBook(props) {
    const { listBook, setListBook, loadFormById } = props;
    const [form, setForm] = useState({ title: '', quantity: '' });

    const navigate = useNavigate()


    const handleSubmit = (values, { resetForm }) => {
        if (loadFormById) {
            axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${values.id}`, values)
                .then((response) => {
                    console.log(values.id);
                    console.log(response.data);
                    const index = listBook.findIndex(item => item.id === values.id);
                    const updateBook = [...listBook];
                    updateBook[index] = response.data;
                    alert('Status: ' + response.status + ' Sửa thành công');
                    navigate('/bookManager')
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', values)
                .then((response) => {
                    console.log(response.data);
                    const bookNew = [...listBook];
                    bookNew.push(response.data);
                    setListBook(bookNew);
                    alert('Status: ' + response.status + ' Thêm mới thành công');
                    navigate('/bookManager')
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        setForm({ title: '', quantity: '' })
        resetForm();
    }

    useEffect(() => {
        if (loadFormById) {
            setForm(loadFormById);
        } else {
            setForm({ title: '', quantity: '' })
        }
    }, [loadFormById])

    return (
        <div className='col-3 mx-auto'>
            <Formik
                validationSchema={validationSchema}
                initialValues={form}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                <Form>
                    <div className="form-group my-3">
                        <label htmlFor='title' >Title</label>
                        <Field type="text" name='title' id='title'
                            className="form-control"
                        />
                        <ErrorMessage name='title' component='div' className="text-danger" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor='quantity' >Quantity</label>
                        <Field type="number" name='quantity' id='quantity'
                            className="form-control"
                        />
                        <ErrorMessage name='quantity' component='div' className="text-danger" />
                    </div>

                    <button type='submit' className="btn btn-success">Add New</button>
                </Form>
            </Formik>
        </div>
    )
}
