import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Layout from './components/Layout/Layout'
import Maincategories from './components/Maincategories/Maincategories'
import Users from './components/Users/Users'
import Companies from './components/Companies/Companies'
import Orders from './components/Orders/Orders'

function App() {
  const isAuthenticated = true;
  return (
      <>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/maincategori' element={<Maincategories/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/companies' element={<Companies/>}/>        
        <Route path='/orders' element={<Orders/>}/>      
        
      </Routes>
          </>
  );
}

export default App
