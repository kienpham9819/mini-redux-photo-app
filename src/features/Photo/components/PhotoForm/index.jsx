import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object,
    isAddmode: PropTypes.bool
};

PhotoForm.defaultProps = {
    onSubmit: null,
    initialValues: {},
    isAddmode: true
};


function PhotoForm(props) {
    const { initialValues, onSubmit } = props;
    let { isAddmode } = props;
    const history = useHistory();
    const { photoId } = useParams();
    if (initialValues
        && Object.keys(initialValues).length === 0
        && initialValues.constructor === Object
        && photoId) {
        isAddmode = true;
        history.push('/photos/add');
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('title is is requred'),
        categoryId: Yup.number().nullable().required('category field is is requred'),
        imageUrl: Yup.string().url().required('url is is requred')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formikProps => {
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
                            <Button type='submit' color="primary">
                                {
                                    isAddmode ?
                                        'Add photo'
                                        : 'Save Edited'
                                }
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
