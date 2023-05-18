import React, { useState } from 'react'
import { useFormik } from 'formik';


const validate = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = "Required"
    }

    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email không hợp lệ!!!"
    }

    if (!values.phone) {
        errors.phone = "Required"
    }
    return errors
}

export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });


    return (
        <>
            <form className="form-inline col-3 mx-auto" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name='name' className="form-control"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.name && formik.touched.name ?
                            <p className='text-danger'>{formik.errors.name}</p> : null
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name='email' className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.email && formik.touched.email ?
                            <p className='text-danger'>{formik.errors.email}</p> : null
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name='phone' className="form-control"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.phone && formik.touched.phone ?
                            <p className='text-danger'>{formik.errors.phone}</p> : null
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input type="text" id="message" name='message' className="form-control"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.message && formik.touched.message ?
                            <p className='text-danger'>{formik.errors.message}</p> : null
                    }
                </div>

                <button className="mt-4 btn btn-info" type="submit">Submit</button>
            </form>
        </>
    )
}
