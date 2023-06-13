import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Login from './../src/pages/Login/Login';
const PrivateRoute = ({ element: Element, ...rest}) => {
const token = localStorage.getItem('token');

  return token ? <Element /> : < Navigate to="/" replace/>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={Home} />} />
    </Routes>
  );
}

export default App;