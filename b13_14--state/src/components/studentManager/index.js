import React, { Component } from 'react'

export default class StudentManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            form: { name: "", phone: "", email: "" },
            isValid: false,
            indexSelected: -1,
        };
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return { form }
        }, () => this.checkInvalidForm())
    }

    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }

    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = [...this.state.studentList]
            // if (this.state.indexSelected > -1) {
            // } else {
            newList.push(this.state.form)
            // }
            this.setState({
                studentList: newList
            })

        }
    }

    handleDelete = (index) => {
    }

    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name && phone && email
        this.setState({
            isValid: value
        })
    }

    render() {
        const { studentList, form } = this.state
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={form.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={form.email} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <table className="table">
                        <thead>
                            <tr>
                                {/* Tạo Table header Name, Phone, Email, Action */}
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sử dụng phương thức map() để in danh sách student
                        Tạo button Edit với onClick gọi tới hàm handleSelect
                        Tạo button Delete với onClick gọi tới hàm handleDelete
                    */ }
                            {
                                studentList.map((student, index) => {
                                    <tr key={index}>
                                        <td> {student.name} </td>
                                        <td> {student.phone} </td>
                                        <td> {student.email} </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
