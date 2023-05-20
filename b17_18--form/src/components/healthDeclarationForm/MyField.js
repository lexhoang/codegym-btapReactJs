import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function MyField(props) {
    return (
        <div className="form-group my-3">
            <label htmlFor={props.id} > {props.label}</label>
            <Field type={props.type} name={props.name} id={props.id} className={props.className} />
            <ErrorMessage name={props.name} component="div" className="text-danger" />
        </div>
    )
}
