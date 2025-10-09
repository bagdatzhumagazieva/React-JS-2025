import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/about/About';
import { Header } from './components/header/Header';
import { FormikForm } from './components/FormikForm'
import { FormikFormHook } from './components/FormikFormHook'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({email: '', password: ''})
  console.log(data)

  const validateEmail = (email) => {
    return  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  }

  const validatePswd = (password) =>{
    return /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(password)
  }


  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header/>} >
        <Route path="*" element={<h1>404 not fount</h1>} />
        <Route path="about" element={<About/>} />
        <Route path="menu" element={<h1>menu</h1>} />
        <Route path="home" element={<div>home</div>} />
    </Route>
    </Routes>

  </BrowserRouter>
   
  )
}

export default App
