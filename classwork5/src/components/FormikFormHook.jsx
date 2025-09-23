import { useFormik } from 'formik'

export const FormikFormHook = () => {

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validate: value=> {
            const error = {};
            if(!value.email) {
                error.email = 'Email is required'
            } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)){
                error.email = 'Email is not correct'
            }

            if(!value.password) {
                error.password = 'Password is required'
            } else if(!/^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(value.password)){
                error.password = <ul style={{color: 'red'}}>
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
              </ul> 
            }
            return error
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values,null, 2))
        }
    })

    const { values, handleChange, errors, touched, handleSubmit } = formik;

    console.log(formik.values, touched);

    return (
        <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
            <input name="email" value={values.email} onChange={handleChange} />
            <span style={{color: 'red'}}>{errors.email && touched.email && errors.email}
                </span>
            </div>
           
            <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
            <input name="password" value={values.password} onChange={handleChange} />
            <span style={{color: 'red'}}>{errors.password && touched.password && errors.password}
                </span> 
            </div>

            <button type='submit'> Submit</button>
        </form>
    )
}