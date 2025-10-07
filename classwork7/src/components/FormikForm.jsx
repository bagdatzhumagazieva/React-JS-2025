import { Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const schema = () => yup.object({
  email: yup.string()
    .required('Email is required')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Email is invalid'),
  password: yup.string().min(6, 'Password is too short'),
  address: yup.object({
    city: yup.string().required('City is required'),
    street: yup.string().required('Street is required')
  })
})

export const FormikForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '', address: { city: '', street: '' } }}
        validationSchema={schema()}   // ✅ call the schema function
        onSubmit={value => {
          console.log(value)
          alert(JSON.stringify(value, null, 2))
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Field type="email" name="email" style={{ width: 200 }} />
              <ErrorMessage name="email" component="div" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Field type="password" name="password" style={{ width: 200 }} />
              <ErrorMessage name="password" component="div" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Field name="address.city" style={{ width: 200 }} />
              <ErrorMessage name="address.city" component="div" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Field name="address.street" style={{ width: 200 }} />
              <ErrorMessage name="address.street" component="div" />
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}
