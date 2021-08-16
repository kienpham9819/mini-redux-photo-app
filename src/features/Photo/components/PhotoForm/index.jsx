import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label, FormGroup, Input } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

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
        imageUrl: null
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log('submit: ', values)}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps;
                // console.log({ values, errors, touched });
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
