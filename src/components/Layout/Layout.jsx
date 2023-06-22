import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar";


export default function Layout({ children }) {
  const token = window.localStorage.getItem("token")
    return (
      <>
      <div className="layoutbox">
       {token ? 
        <>
        <header >
          <Header/>
          
          </header>
              <Sidebar/>
        </> : null
       }
        
      </div>
      <main  className="mainbox">
        <div className="container">
          {children}
        </div>
        </main>
      </>
    )
  }