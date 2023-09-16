import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import UserContextProvider from './components/UserContext';
import CreatePost from './components/pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={ <Home /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/register' element={ <RegisterPage /> } />
        <Route path='/create' element={ <CreatePost /> } />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
