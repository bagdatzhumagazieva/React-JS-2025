import { useState } from 'react'
import { FormikForm } from './components/FormikForm'
import { FormikFormHook } from './components/FormikFormHook'
import './App.css'

function App() {
  const [data, setData] = useState({email: '', password: ''})
  console.log(data)

  const validateEmail = (value) => {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
  }

  const validatePassword = (value) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value)
  }

  return (

    //Third method
    <FormikFormHook/>

    // Second metho
    // <FormikForm/>



    // TODO: First method
    // <form style={{display: 'flex', flexDirection: 'column', gap: '20px', width: 'fit-content'}}>

    // <div style={{display: 'flex', flexDirection: 'column', gap: '5px', width: 'fit-content'}}>
    //   <input placeholder='Email' value={data.email} onChange={event => setData(prev => ({...prev, email: event.target.value}))}  />
    //   <span style={{color: 'red'}}>{!validateEmail(data.email) ? 'Invalid email' : ''}</span> 
    // </div>

    // <div style={{display: 'flex', flexDirection: 'column', gap: '5px', width: 'fit-content'}}>
    //   <input placeholder='Password' value={data.password} onChange={event => setData(prev => ({...prev, password: event.target.value}))}/>
    //   {validatePassword(data.password) ? '' : <ul style={{color: 'red'}}>
    //       <li>  at least 1 capital letter</li>
    //        <li>at least 1 digit</li> 
    //        <li>at least 1 symbol (special character)</li> 
    //         <li>minimum length 8</li>
    //     </ul>
    //     }
    // </div>
      
    // </form>
  )
}

export default App
