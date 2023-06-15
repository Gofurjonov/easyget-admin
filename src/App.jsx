
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Layout from './components/Layout/Layout'
import Maincategories from './components/Maincategories/Maincategories'
import Errormodal from './components/Errormodal/Errormodal'
import Editmodal from './components/Editmodal/Editmodal'
import NewsubModal from './components/NewsubModal/NewsubModal'
import Subcategory from './pages/Subcategory/Subcategory';
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
const PrivateRoute = ({ element: Element, ...rest}) => {
const token = localStorage.getItem('token');

  return token ? <Element /> : < Navigate to="/" replace/>;
}

function App() {
  return (
    <>
    <Layout>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={Home} />} />
      <Route path="/maincategory" element={<PrivateRoute element={Maincategories} />} />
      <Route path="/errormodal" element={<PrivateRoute element={Errormodal} />} />
      <Route path="/editmodal" element={<PrivateRoute element={Editmodal} />} />
      <Route path="/newsubmodal" element={<PrivateRoute element={NewsubModal} />} />
      <Route path="/subcategory" element={<PrivateRoute element={Subcategory} />} />
    </Routes>
    </Layout>
  </>
  );
}

export default App;