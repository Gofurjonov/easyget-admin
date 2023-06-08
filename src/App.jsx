import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const isAuthenticated = true;
  return (
      <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <PrivateRoute
          path="/"
          element={<Home />}
          isAuthenticated={isAuthenticated}
          />
      </Routes>
          </>
  );
}

export default App
