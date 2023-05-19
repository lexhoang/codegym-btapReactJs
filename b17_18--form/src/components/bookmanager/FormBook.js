import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';

export default function FormBook(props) {
    const { editingBook, handleSubmit } = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        number: Yup.string().required('Author is required'),
    });
    const initialValues = {
        title: "",
        number: ""
    }

    return (
        <Formik
            initialValues={editingBook || initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
        >
            <Form>
                <div className="form-group my-3">
                    <label htmlFor="title">Tiêu đề</label>
                    <Field type="text" id="title" name="title" className="form-control" />
                    <ErrorMessage style={{ color: 'red' }} name="title" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="number">Số lượng</label>
                    <Field type="text" id="number" name="number" className="form-control" />
                    <ErrorMessage style={{ color: 'red' }} name="number" />
                </div>

                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </Form>
        </Formik>

    )
}
