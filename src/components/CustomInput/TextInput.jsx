import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = ({
    label,
     name,
     type,
     value,
     placeholder,
     onChangeInput,
     error
    }) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}:</label>
        <input 
            type={type}
            name={name}
            className={classnames('form-control form-control-lg', {'is-invalid': error} )}
            value={value}
            placeholder={placeholder}
            onChange={onChangeInput}
            
            
            />
            {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text'
}
export default TextInput;