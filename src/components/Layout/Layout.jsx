import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar";


export default function Layout({ children }) {
    return (
      <>
      <div className="layoutbox">
       <header >
       <Header/>
      
       </header>
           <Sidebar/>
        
      </div>
      <main  className="mainbox">
        <div className="container">
          {children}
        </div>
        </main>
      </>
    )
  }