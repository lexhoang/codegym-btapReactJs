import logo from './logo.svg';
import './App.css';
import { AlertComp } from './components/AlertComp';
import { StudentInfo } from './components/StudentInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <AlertComp text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      <StudentInfo />
    </>
  );
}

export default App;
