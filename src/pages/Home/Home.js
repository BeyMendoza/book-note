import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container } from '../../Components/Container';
import { Navbar } from '../../Components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar title="Chater Page" />
      <Container style={{ padding: '1rem', marginTop: '1rem' }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Home;
