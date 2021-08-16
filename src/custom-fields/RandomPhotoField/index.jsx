import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

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
            />
        </FormGroup>
    );
}

export default RandomPhotoField;
