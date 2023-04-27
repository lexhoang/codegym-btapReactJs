import React from 'react'

const listStudent = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 30,
    address: "Hà Nội"
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    age: 24,
    address: "Hà Nội"
  },
  {
    id: 3,
    name: "Nguyễn Thị C",
    age: 18,
    address: "Hà Nội"
  },
  {
    id: 4,
    name: "Nguyễn Thị D",
    age: 16,
    address: "Hà Nội"
  },
]
export const StudentInfo = () => {
  return (
    <>
      <h1 className="text-center">Student Info</h1>
      <table class="table mx-auto" style={{ width: '50%' }}>
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
                <td scope="row"> {student.id} </td>
                <td> {student.name} </td>
                <td> {student.age} </td>
                <td> {student.address} </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}


