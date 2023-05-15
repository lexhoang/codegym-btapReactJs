import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LayoutComp from './components/LayoutComp';
import CarSelection from './components/CarSelection';
import Timer from './components/Timer';
import ComponentCounter from './components/ComponentCounter';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComp />}>
        <Route index element={<CarSelection />} />
        <Route path="bai2" element={<Timer />} />
        <Route path="bai3" element={<ComponentCounter />} />
      </Route>
    </Routes>
  );
}

export default App;
