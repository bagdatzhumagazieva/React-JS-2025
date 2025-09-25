import { Formik, Field, ErrorMessage } from 'formik';

export const FormikForm = () => {


    return (
        <div>
             <Formik
                initialValues={{email: '', password: ''}}
                validate={values => {
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
                }}
                onSubmit={values => {
                    console.log(values)
                }}
             >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" />
                        <button type='submit'>Send</button>
                    </form>
                )}
             </Formik>
        </div>
    )
}