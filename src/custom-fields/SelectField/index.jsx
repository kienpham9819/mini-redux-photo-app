import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    disabled: PropTypes.bool
};

SelectField.defaultProps = {
    type: 'text',
    placeholder: '',
    options: [],
    disabled: false
};

function SelectField(props) {
    const { field, form, placeholder, options, label, type } = props;
    const { name, value, onBlur } = field;
    const selectedValue = options.find(option => option.value === value);

    const handleSelectOptionChange = (newOption) => {
        const newSelectedValue = newOption ? newOption.value : newOption;
        const changeEvent = {
            target: {
                name: name,
                value: newSelectedValue
            }
        }
        field.onChange(changeEvent);
    }

    return (
        <div>
            <FormGroup>
                {
                    label &&
                    <Label for={name}>{label}</Label>
                }
                <Select
                    id={name}
                    type={type}
                    name={name}
                    value={selectedValue}
                    onBlur={onBlur}
                    onChange={handleSelectOptionChange}
                    placeholder={placeholder}
                    options={options}
                />
            </FormGroup>
        </div>
    );
}

export default SelectField;
