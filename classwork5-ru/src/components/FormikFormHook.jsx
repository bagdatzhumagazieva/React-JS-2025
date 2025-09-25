import { useFormik } from 'formik';

export const FormikFormHook = () => {

    const formik = useFormik({
        initialValues: {
            email: '', password: ''
        },
        validate: (values) => {
            const errors = {}
            if(values.email === '') {
                errors.email = 'Email is required'
            } else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)) {
                errors.email = 'Invalid email'
            }

            if(!values.password) {
                errors.password = 'Password is required'
            } else if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(values.password)) {
                errors.password = 'Invalid password'
            } 
            return errors;                    
        },
        onSubmit: (values)=>{
            console.log(values)
        }
      });

      const { handleSubmit, values, errors, handleChange } = formik;

      console.log(values)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                      
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px', width: 'fit-content'}}>
                    <input placeholder='Email' name='email' value={values.email} onChange={handleChange}  />
                    {errors.email}
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '5px', width: 'fit-content'}}>
                    <input placeholder='Password' name='password' value={values.password} onChange={handleChange}/>
                    {errors.password}
                </div>
                <button type='submit'>send</button>
            </form>
        </div>
    )
}