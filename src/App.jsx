import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
