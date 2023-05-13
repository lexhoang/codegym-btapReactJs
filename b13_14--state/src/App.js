import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/LoginLogout.css';

import LoginLogout from './components/loginLogout';
import StudentManager from './components/studentManager';
import { Route, Routes } from 'react-router-dom';
import { LayoutComp } from './components/LayoutComp';
import ExpandCollapseContent from './components/expandCollapseContent';
import Calculator from './components/calculator';
import TodoList from './components/todolist';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LayoutComp />} >
          <Route index element={<ExpandCollapseContent />} />
          <Route path='bai2' element={<Calculator />} />
          <Route path='bai3' element={<LoginLogout />} />
          <Route path='bai4' element={<TodoList />} />
          <Route path='bai5' element={<StudentManager />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
