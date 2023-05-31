import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TableBook(props) {
    const { listBook, btnEditBook } = props;
    const navigate = useNavigate();

    const handleEdit = (book) => {
        btnEditBook(book);
        navigate(`/bookManager/formBook/${book.id}`)
    }


    const handleDelete = (IdBook) => {
        axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${IdBook}`)
            .then((response) => {
                console.log('oke');
            }).catch((error) => {
                console.log(error);
            })
    }

   
    return (
        <>
            <h2>Library</h2>

            <button className='btn btn-success'
                onClick={() => navigate('/bookManager/formBook')}
            >Add a new book</button>

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
                                        <button className="btn btn-warning" onClick={() => handleEdit(book)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
