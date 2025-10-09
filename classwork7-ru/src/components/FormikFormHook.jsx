import { useFormik } from 'formik'
import * as yup from 'yup'


const schema = () => yup.object({
    email: yup.string().required('Email is required').email('Incorrect email'),
    password: yup.string().min(6, 'Password is too short').required('Required').max(10, 'Password is too long'),
})

export const FormikFormHook = () => {

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: schema,
        onSubmit: (values) => {
            alert(JSON.stringify(values,null, 2))
        }
    })

    const { values, handleChange, errors, touched, handleSubmit } = formik;

    console.log(formik.values, formik.errors);

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