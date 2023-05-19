import React, { useEffect, useState } from 'react';
import FormBook from './FormBook';
import TableBook from './TableBook';

export default function BookManager() {
    const [bookList, setBookList] = useState([]);
    const [editingBook, setEditingBook] = useState(null);

    const handleEdit = (book) => {
        setEditingBook(book);
    };

    const handleSubmit = (values, { resetForm }) => {
        if (editingBook == null) {
            const newBook = { ...values, id: Math.floor(Math.random() * 1000) };
            setBookList([...bookList, newBook]);
        } else {
            setBookList((prevBook) =>
                prevBook.map((book) => (
                    book.id === editingBook.id ? { ...book, ...values } : book
                ))
            )
            setEditingBook(null);
        }
        setEditingBook(null);

        resetForm();
    }


    const handleDelete = (id) => {
        let bookListAfterDelete = bookList.filter((book) => book.id !== id);
        setBookList(bookListAfterDelete);
    };


    return (
        <div className="mx-5" style={{ width: '500px' }}>
            <h2>Library</h2>

            <FormBook editingBook={editingBook} handleSubmit={handleSubmit} />

            <TableBook bookList={bookList} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div >
    )
}
