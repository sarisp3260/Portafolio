import Cv from './pages/Cv'
import Hero from './pages/Hero'
import About from './pages/About'
import Branding from './components/Sections/Branding'
import Projects from './components/Sections/Projects'
import Work from './pages/Work'
import Contact from './pages/Contact'

import {Routes, Route, useLocation} from  'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <div className="App text-gray bg-black">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>

          <Route path='/' element={<Hero/>} />
          <Route path='/Curriculum-Vitae' element={<Cv/>} />
          <Route path='/About' element={<About/>} />

          <Route path='/Work' element={<Work/>}>
            <Route path='/Work/Branding' element={<Branding/>} />
            <Route path='/Work/Projects' element={<Projects/>} />
          </Route>
          
          <Route path='/Contact' element={<Contact/>} />
  
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
