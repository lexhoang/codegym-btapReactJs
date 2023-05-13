import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/LoginLogout.css';

import LoginLogout from './components/loginLogout';
import StudentManager from './components/studentManager';
import { Route, Routes } from 'react-router-dom';
import { LayoutComp } from './components/LayoutComp';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LayoutComp />} >
          <Route index element={<LoginLogout />} />
          <Route path='bai2' element={<StudentManager />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
