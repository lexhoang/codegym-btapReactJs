import React from 'react'
import { TableStudent } from './TableStudent'
import { FormControl } from './FormControl'

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

var dataStudent = {}

export const StudentInfo = (props) => {
  const { render } = props

  const getDataStudent = (value) => {
    if (value.id === dataStudent.id) {
      dataStudent = {}
    } else {
      dataStudent = { ...value }
    }
    render()
  }

  const handleChangeInput = (e) => {
    if (e.target.name === 'name') {
      dataStudent.name = e.target.value;
    }
    else if (e.target.name === 'age') {
      dataStudent.age = e.target.value;
    }
    else if (e.target.name === 'address') {
      dataStudent.address = e.target.value;
    }
    render()
  }
  if (!("name" in dataStudent)) dataStudent.name = ""
  if (!("age" in dataStudent)) dataStudent.age = ""
  if (!("address" in dataStudent)) dataStudent.address = ""

  const openAddNew = () => {
    dataStudent.id = undefined;
    dataStudent.name = '';
    dataStudent.age = '';
    dataStudent.address = '';
    render()
  }


  const submitForm = (e) => {
    e.preventDefault();
    if (dataStudent.id === undefined) {

      let newStudent = {
        id: Math.floor(Math.random() * 10000),
        name: dataStudent.name,
        age: dataStudent.age,
        address: dataStudent.address
      }
      listStudent.push(newStudent);
      console.log(newStudent);
    } else {
      let index = listStudent.findIndex(student => student.id === dataStudent.id);
      listStudent[index].name = dataStudent.name;
      listStudent[index].age = dataStudent.age
      listStudent[index].address = dataStudent.address;
      delete dataStudent.id
    }
    dataStudent.name = ''
    dataStudent.age = ''
    dataStudent.address = ''
    render()
  }

  const handleEdit = (book) => {
    getDataStudent(book);
  }

  const handleDelete = (idBook) => {
    let index = listStudent.findIndex(student => student.id === idBook);
    listStudent.splice(index, 1);
    render();
  }

  return (
    <>
      <h1 className="text-center">Student Info</h1>

      <div className="col-7 mx-auto my-5">
        <FormControl dataStudent={dataStudent} openAddNew={openAddNew}
          handleChangeInput={handleChangeInput} submitForm={submitForm} />

        <TableStudent listStudent={listStudent} dataStudent={dataStudent}
          handleEdit={handleEdit} handleDelete={handleDelete} />
      </div >

    </>
  )
}


