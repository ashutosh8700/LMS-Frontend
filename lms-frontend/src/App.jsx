import { useEffect, useState } from 'react'
import './App.css'
// import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Notfound from './pages/Notfound'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Contact from './pages/Contact'

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
      <Route path='/signup' element={<Signup/>} />
      <Route path='/contacts' element={<Contact/>} />
      <Route path='/signin' element={<Signin/>} />
    </Routes>

    // <Footer/>
  )
}

export default App
