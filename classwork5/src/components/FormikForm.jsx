import { Formik, Field, ErrorMessage } from 'formik'

export const FormikForm = () => {

    return (
        <div>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={value=> {
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
                }}
                onSubmit={value => {
                    console.log(value)
                    alert(JSON.stringify(value,null, 2))
                }}
            >
                {({handleSubmit})=> (
                    <form onSubmit={handleSubmit}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                            <Field type="email" name="email"  style={{width: 200}}  />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        
                        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                            <Field type="password" name="password"  style={{width: 200}}  />
                            <ErrorMessage name="password" component="div" />

                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                )}
               
            </Formik>
        </div>
    )
}