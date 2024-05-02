import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './views/Contact'
import Home from './views/Home'
import Pricing from './views/Pricing'
import Partner from './views/Partner'

function App() {

  return (
    <div className='bg-Background'>
      <Header />
      <Routes>
        <Route
        
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route
          path="/pricing"
          element={
            <>
              <Pricing />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Contact />
            </>
          }
        />
         <Route
          path="/partner"
          element={
            <>
              <Partner />
            </>
          }
        />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
