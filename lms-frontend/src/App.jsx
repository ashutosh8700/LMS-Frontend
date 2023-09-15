import { useEffect, useState } from 'react'
import './App.css'
// import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   toast.error("hello");
  // } )

  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Aboutus/>} />
    </Routes>

    // <Footer/>
  )
}

export default App
