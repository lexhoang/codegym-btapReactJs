import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutComp from './components/LayoutComp';
import Login from './components/router_1/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/router_1/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComp />} >
        <Route index element={<Login />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
