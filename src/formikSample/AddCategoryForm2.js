import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


function AddCategoryForm2() {

    // function validateName(values) {
    //     let error;
    //     if (values == 'cagatay')
    //         error = 'ERROR!!'
    //     return error;
    // }

    const categoryValidationSchema = Yup.object({
        name: Yup.string().required('Name alanı boş geçilemez')
    })


    return (<>
        <Formik
            initialValues={
                {
                    name: ''
                }
            }
            onSubmit={values => {
                console.log(values);
            }}
            validationSchema={categoryValidationSchema}
        >
            {({ errors }) => (
                <Form>
                    <Field name="name" />
                    {errors.name && <div>{errors.name}</div>}
                    <button type="submit">Submit</button>
                </Form>

            )}


        </Formik>
    </>
    )
}

export default AddCategoryForm2