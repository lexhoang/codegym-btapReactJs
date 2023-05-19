import React from 'react'

export default function TableBook(props) {
    const { bookList, handleEdit, handleDelete } = props;

    return (
        <div className="table-responsive mt-5">
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td> {book.number} </td>
                                <td>
                                    <div className="btn-group">
                                        <button className='btn btn-info' onClick={() => props.handleEdit(book)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => props.handleDelete(book.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
