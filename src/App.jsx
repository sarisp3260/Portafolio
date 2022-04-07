import Navbar from './components/Navbar/Navbar'
import Footer from './components/Sections/Footer'
import Cv from './pages/Cv'
import Landing from './pages/Landing'

function App() {

  return (
    <div className="App text-gray bg-black">
      
      <Navbar/>
        {/* <Landing/> */}
        <Cv/>
      <Footer/>
    
    </div>
  )
}

export default App
