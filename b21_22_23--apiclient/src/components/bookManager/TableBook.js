import axios from 'axios';
import React from 'react'

export default function TableBook(props) {
    const { listBook } = props;

    const handleDelete = (IdBook) => {
        axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${IdBook}`)
            .then((response) => {
                console.log('oke');
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <table className="table table-striped table-inverse table-responsive text-center">
            <thead className="thead-inverse">
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    listBook.map((book) => (
                        <tr key={book.id}>
                            <td> {book.title}</td>
                            <td> {book.quantity}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-warning">Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}
