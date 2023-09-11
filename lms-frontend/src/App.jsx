import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   toast.error("hello");
  // } )

  return (
    <h1 className='text-3xl font-bold underline' >
      Hello World 
    </h1>
  )
}

export default App
