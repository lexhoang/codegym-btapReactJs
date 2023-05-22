import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import LayoutComp from './components/LayoutComp';
import Login from './components/router-1_2/Login';
import Home from './components/router-1_2/Home';
import Employees from './components/router-1_2/Employees';
import EmployeesDetail from './components/router-1_2/EmployeesDetail';

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
      <Route path="/" element={<LayoutComp />} >
        <Route index element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='employees' element={<Employees employees={employees} />} />
        <Route path='employees/:employeesId' element={<EmployeesDetail employees={employees} />} />
      </Route>
    </Routes>
  );
}

export default App;
