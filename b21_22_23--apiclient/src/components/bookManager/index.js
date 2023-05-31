import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

import TableBook from './TableBook';
import FormBook from './FormBook';

export default function BookManager() {
    const [listBook, setListBook] = useState([]);
    const [loadFormById, setLoadFormById] = useState(null);

    const btnEditBook = (bookEdit) => {
        setLoadFormById(bookEdit);
        console.log(bookEdit);
    };

    useEffect(() => {
        axios
            .get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
            .then((response) => {
                setListBook(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<TableBook listBook={listBook} btnEditBook={btnEditBook} setListBook={setListBook} />} />
                <Route path="/formBook" element={<FormBook listBook={listBook} setListBook={setListBook} />} />
                <Route path="/formBook/:bookId" element={<FormBook loadFormById={loadFormById} listBook={listBook} setListBook={setListBook} />} />
            </Routes>
        </div>
    );
}