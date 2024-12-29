import { Route, Routes } from 'react-router-dom'
import './all.min.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Service from './components/service/Service'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Privacy from './components/privacy/Privacy'
import Terms from './components/terms/Terms'
import ScrollHandler from './components/ScrollHandler'

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <ScrollHandler />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/service/:id' element={<Service />} exact />
          <Route path='/contact' element={<Contact />} exact />
          <Route path='/privacy' element={<Privacy />} exact />
          <Route path='/terms' element={<Terms />} exact />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
