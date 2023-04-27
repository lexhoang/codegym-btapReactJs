import logo from './logo.svg';
import './App.css';
import { AlertComp } from './components/AlertComp';
import { StudentInfo } from './components/studentManager';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const { render } = props;
  return (
    <>
      <AlertComp text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      <StudentInfo render={render} />
    </>
  );
}

export default App;
