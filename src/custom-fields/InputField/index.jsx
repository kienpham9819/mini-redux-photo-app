import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
};

function InputField(props) {
    const { field, form, type, label, placeholder, disabled } = props;
    const { name, value, onBlur, onChange } = field;

    return (
        <div>
            <FormGroup>
                {
                    label &&
                    <Label for={name}>{label}</Label>
                }
                <Input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </FormGroup>
        </div>
    );
}

export default InputField;
