import Footer from "./components/Footer"
import Navbar from "./components/navbar"
import Landing from "./pages/Landing"

function App() {


  return (
    <>
     <Navbar></Navbar>
       <div className="main-content">
       <Landing></Landing>
      </div>
     <Footer></Footer>
    </>
  )
}

export default App
