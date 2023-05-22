import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Employees(props) {
  const { employees } = props
  const navigate = useNavigate();

  const [listEmployees, setListEmployees] = useState(employees);

  const btnDetail = (item) => {
    navigate(`/employees/${item.id}`);
  }


  return (
    <div className="col-4 mx-auto mt-5">
      <h1 className="my-5 text-center">Employees</h1>
      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              listEmployees.map(employee => (
                <tr key={employee.id} >
                  <td> {employee.id} </td>
                  <td> {employee.name} </td>
                  <td> {employee.age} </td>
                  <td>
                    <button className='btn btn-info' onClick={() => btnDetail(employee)}>Chi tiết</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div >
  )
}
