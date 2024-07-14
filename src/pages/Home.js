import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login';

const Home = () => {
   useEffect(() => {
    localStorage.removeItem('token');
  }, []);
  const token = localStorage.getItem('token');
  if (token) {
    return <Navigate to="/articles" />;
  }
  return <Login />;
};
export default Home;
