import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TableBook from './TableBook';

export default function BookManager() {
    const [listBook, setListBook] = useState([]);
    const navigate = useNavigate();






    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
            .then((response) => {
                setListBook(response.data)
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h2>Library</h2>

            <button className='btn btn-success'
                onClick={() => navigate('/formBook')}
            >Add a new book</button>

            <TableBook listBook={listBook} />
        </div>
    )
}
