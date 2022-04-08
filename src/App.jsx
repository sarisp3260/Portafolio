import Navbar from './components/Navbar/Navbar'
import Cv from './pages/CV'
import Landing from './pages/Landing'

import {Routes, Route} from  'react-router-dom';

function App() {

  return (
    <div className="App text-gray bg-black">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Curriculum-Vitae' element={<Cv/>} />
      </Routes>
    
    </div>
  )
}

export default App
