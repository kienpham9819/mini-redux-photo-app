import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
    form: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,

    label: PropTypes.string
};

RandomPhotoField.defaultProps = {
    label: ''
};

function RandomPhotoField(props) {
    const { form, field, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const isShowError = errors[name] && touched[name];

    const handChangeValue = (newValue) => {
        form.setFieldValue(name, newValue);
    }

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>

            <RandomPhoto
                id={name}
                imageUrl={value}
                onRandomButtonBlur={onBlur}
                onImageUrlChange={handChangeValue}
                cname={isShowError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default RandomPhotoField;
