import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Login from './components/content/Login';
import Home from './components/content/Home';
import Employees from './components/content/Employees';
import EmployeesDetail from './components/content/EmployeesDetail';

const employees = [
  {
    id: 1,
    name: "Hoa",
    age: 20
  },
  {
    id: 2,
    name: "Khánh",
    age: 25
  },
  {
    id: 3,
    name: "Tú",
    age: 22
  },
]

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/employees' element={<Employees employees={employees} />} />
      <Route path='/employees/:employeesId' element={<EmployeesDetail employees={employees} />} />
    </Routes>
  );
}

export default App;
