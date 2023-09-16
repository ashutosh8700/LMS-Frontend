import { useEffect, useState } from 'react'
import './App.css'
// import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Notfound from './pages/Notfound'

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   toast.error("hello");
  // } )

  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='*' element={<Notfound/>} />
    </Routes>

    // <Footer/>
  )
}

export default App
