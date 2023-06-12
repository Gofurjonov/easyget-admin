import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Layout from './components/Layout/Layout'
import Maincategories from './components/Maincategories/Maincategories'
import Errormodal from './components/Errormodal/Errormodal'
import Editmodal from './components/Editmodal/Editmodal'
import NewsubModal from './components/NewsubModal/NewsubModal'

function App() {
  const isAuthenticated = true;
  return (
      <>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/maincategori' element={<Maincategories/>}/>
        <Route path='/errormodal' element={<Errormodal/>}/>
        <Route path='/editmodal' element={<Editmodal/>}/>
        <Route path='/newsubmodal' element={<NewsubModal/>}/>
      </Routes>
          </>
  );
}

export default App
