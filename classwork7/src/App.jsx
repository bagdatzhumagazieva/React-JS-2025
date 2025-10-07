import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Header } from './components/Header/Header';
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
      <Route path='/' element={<Header/>} >
        <Route path='*' element={<h1>404 page is not found</h1>} />
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
      
    </Routes>
   </BrowserRouter>
   
  )
}

export default App
