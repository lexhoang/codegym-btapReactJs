import axios from 'axios';
import React, { useState } from 'react'

export default function FormBook() {
    const [form, setForm] = useState({ title: '', quantity: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', form)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <form className="form-inline col-3 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor='title' >Title</label>
                    <input type="text" name='title' id='title' className="form-control"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor='quantity' >Quantity</label>
                    <input type="number" name='quantity' id='quantity' className="form-control"
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    />
                </div>

                <button className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
