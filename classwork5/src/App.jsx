import { useState } from 'react'
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
    <>
     {/* <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}> */}
      {/* <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <input placeholder='Email' value={data.email} onChange={e => setData(prev => ({...prev, email: e.target.value}))} style={{width: 200}} />
      <span style={{color: 'red'}}>
        {!validateEmail(data.email) ? 'Incorrect email' : ''}
        </span>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <input placeholder='password' value={data.password} onChange={e => setData(prev => ({...prev, password: e.target.value}))}style={{width: 200}} />
      {!validatePswd(data.password) ? <ul style={{color: 'red'}}>
        <li> ✅ Contains at least 1 symbol (e.g., @#$%&*!)</li>
        <li>
          ✅ Contains at least 1 capital letter
        </li>
        <li>
          ✅ Contains at least 2 numbers
        </li>
        <li>
         ✅ Has minimum length of 8
        </li>
      </ul> :''}
      </div>
    </form> */}


    {/* <FormikForm/> */}
    <FormikFormHook/>
    </>
   
  )
}

export default App
