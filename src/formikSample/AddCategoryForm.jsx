import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function AddCategoryForm() {

    const categoryValidationSchema = Yup.object({
        name: Yup.string().required('Name alanı boş geçilemez'),
        description: Yup.string().required('Description alanı boş geçilemez!')
    })


    const formik = useFormik({
        initialValues: {
            name: '',
            description:''
        },
        validationSchema: categoryValidationSchema,
        onSubmit: values => {
            console.log('Values ', values);
        }
    })

    return (<>
        <form
            onSubmit={formik.handleSubmit}
        >
            {
                formik.errors.name ? <span style={{color:'tomato'}}>{formik.errors.name}</span> : <></>
            }
            <div>
                <label>Category Name:</label>
                <input
                    type='text'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type='text'
                    name='description'
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>

        </form>
    </>
    )
}

export default AddCategoryForm