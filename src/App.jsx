import Navbar from './components/Navbar/Navbar'
import Cv from './pages/Cv'
import Landing from './pages/Landing'

import {Routes, Route, useLocation} from  'react-router-dom';
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation();

  return (
    <div className="App text-gray bg-black">
      
      <Navbar/>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Landing/>} />
          <Route path='/Curriculum-Vitae' element={<Cv/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
