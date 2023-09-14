import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Login = styled.a``;

const Register = styled.a``;

const Header = () => {
  return (
    <HeaderContainer>
        <Logo>
          <Link to="/">Blog</Link>
        </Logo>
        <Nav>
          <Login>
            <Link to="/login">Login</Link>
          </Login>
          <Register>
            <Link to="/register">Register</Link>
          </Register>
        </Nav>
      </HeaderContainer>
  );
}

export default Header;