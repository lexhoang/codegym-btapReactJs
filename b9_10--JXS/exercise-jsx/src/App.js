import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Bai1 from './excercise/Bai1'
import Bai2 from './excercise/Bai2';
import Bai3 from './excercise/Bai3';
import Bai4 from './excercise/Bai4';
import Header from './excercise/Header';

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Bai1 />} />
        <Route path='/bai2' element={<Bai2 />} />
        <Route path='/bai3' element={<Bai3 />} />
        <Route path='/bai4' element={<Bai4 />} />
      </Route>
    </Routes>

  );
}

export default App;
