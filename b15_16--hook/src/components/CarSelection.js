import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function CarSelection() {
    const [cars, setCars] = useState([]);
    const [selectCar, setSelectCar] = useState({ brand: '', color: '' });

    useEffect(() => {
        setCars([{ ...selectCar }])
    }, [selectCar])

    return (
        <div style={{ width: "500px" }}>
            <Row className="mx-5 my-4 align-items-center">
                <Col xs={3}>
                    <Form.Label>Select A Car</Form.Label>
                </Col>

                <Col xs={9}>
                    <Form.Select
                        value={selectCar.brand}
                        onChange={(e) => setSelectCar({ ...selectCar, brand: e.target.value })}
                    >
                        <option value="">Chọn hãng ô tô</option>
                        <option value="Toyota" >Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Accent">Accent</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row className="mx-5 my-4 align-items-center">
                <Col xs={3}>
                    <Form.Label>Select A Color</Form.Label>
                </Col>

                <Col xs={9}>
                    <Form.Select
                        value={selectCar.color}
                        onChange={(e) => setSelectCar({ ...selectCar, color: e.target.value })}
                    >
                        <option value="">Chọn màu xe ô tô</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                    </Form.Select>
                </Col>
            </Row>

            <div className='text-center'>
                {
                    cars.map((car, index) => (
                        <div key={index}>Results:
                            <h3>{car.brand} - {car.color}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}