import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';


const RegisterForm = styled.form``;
const Note = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: end;
  & a {
    color: #1919d8;
  }

  & a:active {
    color: #e70b0b;
    transform: scale(0.95);
  }
`;

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);

  const register = async (e) => {
    // to avoid redirect
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        setNavigate(true);
      } 
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  if(navigate) {
    return <Navigate to={'/login'} />
  }

  return (
    <div>
      <RegisterForm className="register" onSubmit={register}>
        <h1>Register</h1>
        <input type="text" 
        placeholder='Enter username' 
        value={ username } onChange={e => setUsername(e.target.value)} />
        <input type="password" 
        placeholder='Enter password' 
        value={ password } onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Register</button>
      </RegisterForm>
      <Note>
        Already registered? 
        <Link to={'/login'}>Click here</Link>  
      </Note>
    </div>
  );
}

export default RegisterPage;