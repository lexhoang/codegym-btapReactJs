import { Field, Form, Formik, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import MyField from './MyField'
import * as Yup from "yup";


export default function HealthDeclarationForm() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Vui lòng điền tên"),

        cardID: Yup.string()
            .required("Vui lòng điền CMND/Hộ chiếu"),

        birthYear: Yup.string()
            .required("Vui lòng điền Năm sinh"),

        country: Yup.string()
            .required("Vui lòng điền quốc tịch"),

        city: Yup.string()
            .required("Vui lòng điền tỉnh/thành"),

        district: Yup.string()
            .required("Vui lòng điền quận/huyện"),

        wards: Yup.string()
            .required("Vui lòng điền phường/xã"),

        apartmentNumber: Yup.string()
            .required("Vui lòng điền số nhà"),

        phone: Yup.string()
            .required("Vui lòng điền số điện thoại"),

        email: Yup.string()
            .required("Vui lòng điền email")
            .email("Không đúng định dạng email")
    })

    const [formDeclaration, setDeclaration] = useState({
        name: '', cardID: '', birthYear: '', gender: '', country: '', company: '',
        workingParts: '', cardHealth: false, city: '', district: '', wards: '', apartmentNumber: '', phone: '', email: ''
    })

    const gender = ['Nam', 'Nữ']

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm()
    }
    return (
        <div style={{ width: '800px' }} className='mx-auto'>
            <h3 className='text-center my-4'>Tờ khai y tế</h3>

            <Formik
                validationSchema={validationSchema}
                initialValues={formDeclaration}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="d-flex justify-content-evenly">
                        <div>
                            <MyField type="text" label="Họ tên" name="name" className="form-control" />
                            <MyField type="text" label="CMND/Hộ chiếu" name="cardID" className="form-control" />
                            <MyField type="text" label="Năm sinh" name="birthYear" className="form-control" />

                            <div className="form-group my-3">
                                <label htmlFor="gender"> Giới tính: </label>
                                {
                                    gender.map((gender, index) => (
                                        <div key={index}>
                                            <Field type="radio" name="gender" value={gender} />
                                            <label>{gender}</label>
                                            <ErrorMessage name="gender" component="div" className="text-danger" />
                                        </div>
                                    ))
                                }
                            </div>

                            <MyField type="text" label="Quốc tịch" name="country" className="form-control" />
                            <MyField type="text" label="Công ty làm việc" name="company" className="form-control" />
                            <MyField type="text" label="Bộ phận làm việc" name="workingParts" className="form-control" />

                            <div className="form-group my-3">
                                <label htmlFor="cardHealth"> Có thẻ bảo hiểm y tế </label>
                                <Field type="checkbox" id="cardHealth" name="cardHealth" className="mt-2 mx-3" />
                                <ErrorMessage name="cardHealth" component="div" className="text-danger" />
                            </div>

                        </div>

                        <div>
                            <h4>Địa chỉ liên lạc tại Việt Nam</h4>
                            <MyField type="text" label="Tỉnh thành" name="city" className="form-control" />
                            <MyField type="text" label="Quận/huyện" name="district" className="form-control" />
                            <MyField type="text" label="Phường/xã" name="wards" className="form-control" />
                            <MyField type="text" label="Số nhà" name="apartmentNumber" className="form-control" />
                            <MyField type="number" label="Điện thoại" name="phone" className="form-control" />
                            <MyField type="text" label="Email" name="email" className="form-control" />
                        </div>
                    </div>

                    <div className=' text-center'>
                        <button className="btn btn-primary w-100" type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
