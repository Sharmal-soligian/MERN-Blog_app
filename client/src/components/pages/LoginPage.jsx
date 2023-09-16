import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const LoginForm = styled.form``;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
      });

      if((await res).ok) {
        res.json().then(info => {
          setUserInfo(info);
          setRedirect(true);
        })
      }
    } catch(err) {
      console.error('Error: ', err.message);
    }
  }

  if(redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <LoginForm className="login" onSubmit={login}>
        <h1>Login</h1>
        <input type="text" 
                placeholder='Enter username' 
                value={username} 
                onChange={e => setUsername(e.target.value)} />
        <input type="password" 
                placeholder='Enter password' 
                value={password} 
                onChange={e => setPassword(e.target.value)}/>
        <button>Login</button>
    </LoginForm>
  )
}

export default LoginPage;