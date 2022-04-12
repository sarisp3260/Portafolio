import Navbar from './components/Navbar/Navbar'
import Cv from './pages/Cv'
import Landing from './pages/Landing'

import {Routes, Route, useLocation} from  'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from "react-scroll-to-top";
import ProjectView from './pages/ProjectView';

function App() {

  const location = useLocation();

  return (
    <div className="App text-gray bg-black">
      
      <Navbar/>
      <ScrollToTop smooth 
      width="40"
      height='32'
      />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Landing/>} />
          <Route path='/Curriculum-Vitae' element={<Cv/>} />
          <Route path='/ProjectsView/:title' element={<ProjectView/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
