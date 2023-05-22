import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EmployeesDetail(props) {
    const { employees } = props;
    const { employeesId } = useParams();

    return (
        <div className="col-3 m-5 mx-auto">
            <h1 className="my-4">Employees Details</h1>
            {
                employees.filter(employee => employee.id == employeesId)
                    .map(employee => {
                        console.log(employee.id);
                        return (
                            <ul key={employee.id} className='col-6'>
                                <li className="d-flex justify-content-between">
                                    <h3>Tên: </h3>
                                    <h3> {employee.name} </h3>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <h3>Age: </h3>
                                    <h3>{employee.age} </h3>
                                </li>
                            </ul>

                        )
                    })
            }
        </div>
    );
}