// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutComp from './components/LayoutComp';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookManager from './components/bookmanager';
import EmailContactForm from './components/email_contact-form';
import HealthDeclarationForm from './components/healthDeclarationForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutComp />}>
        <Route index element={<ContactForm />} />
        <Route path='bai2' element={<BookManager />} />
        <Route path='bai3' element={<EmailContactForm />} />
        <Route path='bai4' element={<HealthDeclarationForm />} />
      </Route>
    </Routes>
  );
}

export default App;
