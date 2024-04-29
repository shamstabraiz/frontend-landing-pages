import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './views/Contact'
import Home from './views/Home'
import Pricing from './views/Pricing'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
