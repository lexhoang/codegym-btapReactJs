import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import TodoList from './components/TodoList';
import BookManager from './components/bookManager';
import FormBook from './components/bookManager/FormBook';


function App() {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path='/bai2' element={<BookManager />} />
        <Route path='/formBook' element={<FormBook />} />
      </Routes>
    </>
  );
}

export default App;
