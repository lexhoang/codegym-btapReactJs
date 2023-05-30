import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState({ id: '', title: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/todos', todo)
            .then((response) => {
                setTodoList([todo, ...todoList])
                alert('Status: ' + response.status)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTodoList(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <form className="form-inline col-4 my-4" onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <input type="text" name='todo' className="form-control"
                        value={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            <ul>
                {
                    todoList.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    )
}
