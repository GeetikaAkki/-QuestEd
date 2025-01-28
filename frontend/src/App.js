import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import AuthForm from './components/StudSign'
import LogIn from './components/Login';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path ='/sign-in' element={<AuthForm/>}></Route>
      <Route path ='/log-in' element={<LogIn/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
