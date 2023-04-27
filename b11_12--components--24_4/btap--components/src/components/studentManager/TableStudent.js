import React from 'react'

export const TableStudent = (props) => {
    const { listStudent, dataStudent, handleEdit, handleDelete } = props;

    return (
        <table className="table mx-auto mt-4 text-center">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    listStudent.map(student => (
                        <tr key={student.id}>
                            <td> {student.id} </td>
                            <td> {student.name} </td>
                            <td> {student.age} </td>
                            <td> {student.address} </td>
                            <td>
                                <div className='btn-group'>
                                    <button className={`btn btn-${dataStudent.id === student.id ? 'warning' : 'info'}`} onClick={() => handleEdit(student)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => handleDelete(student.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
