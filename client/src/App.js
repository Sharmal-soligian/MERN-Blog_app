import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={ <Home /> } />
      <Route path={'/login'} element={ <LoginPage /> } />
      <Route path={'/register'} element={ <RegisterPage /> } />
      </Route>
    </Routes>
  );
}

export default App;
