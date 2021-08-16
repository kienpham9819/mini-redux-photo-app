import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label, FormGroup, Input } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}


function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
        imageUrl: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('title is is requred'),
        categoryId: Yup.number().nullable().required('category field is is requred'),
        imageUrl: Yup.string().url().required('url is is requred')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log('submit: ', values)}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps;

                return (
                    <Form>
                        <FastField
                            name='title'
                            component={InputField}

                            type='text'
                            label='Title'
                            placeholder='enter your title'
                        />

                        <FastField
                            name='categoryId'
                            component={SelectField}

                            label='Category'
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name='imageUrl'
                            component={RandomPhotoField}

                            label='Photo'
                        />


                        <FormGroup>
                            <Button type='submit' color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
