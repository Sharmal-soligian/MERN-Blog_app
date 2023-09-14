import React from 'react'
import Header from './Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Main = styled.section`
  padding: 10px;
  max-width: 700px;
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <Main>
        <Header />
        <Outlet />
    </Main>
  )
}

export default Layout;