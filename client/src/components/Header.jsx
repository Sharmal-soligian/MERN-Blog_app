import React, { useContext, useEffect, useState } from 'react';
import { Link, json } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from './UserContext';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const Logo = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
`;

const Login = styled.a``;

const Register = styled.a``;

const Logout = styled.a`
  
`;

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include'
    }).then(res => {
      res.json().then(info => {
        setUserInfo(info)
      })
    })
  }, []);

  const logout = () => {
    fetch('http://localhost:5000/profile/logout', {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <HeaderContainer>
        <Logo>
          <Link to="/">Blog</Link>
        </Logo>
        <Nav>
          {username && (
            <>
              <Link to={'/create'} >
                Create new article
              </Link>
              <Logout onClick={logout}>Logout</Logout>
            </>
          )}
          {!username && (
            <>
              <Login>
                <Link to="/login">Login</Link>
              </Login>
              <Register>
                <Link to="/register">Register</Link>
              </Register>
            </>
          )}
        </Nav>
      </HeaderContainer>
  );
}

export default Header;