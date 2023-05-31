import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

import TableBook from './TableBook';
import FormBook from './FormBook';

export default function BookManager() {
    const [listBook, setListBook] = useState([]);
    const [loadFormById, setLoadFormById] = useState(null);

    const navigate = useNavigate();

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
                <Route path="/" element={<TableBook listBook={listBook} btnEditBook={btnEditBook} />} />
                <Route path="/formBook" element={<FormBook />} />
                <Route path="/formBook/:bookId" element={<FormBook loadFormById={loadFormById} />} />
            </Routes>
        </div>
    );
}