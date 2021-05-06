import React from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { inputInterface } from '@utils/types';
import useStyles from '@styles/elements/input-field';

interface InputFieldProps {
  fieldInput: inputInterface;
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
}

const InputField: React.FC<InputFieldProps> = ({ fieldInput, field, meta }: InputFieldProps) => {
  const { inputType, label, placeholder = '', required, selectFieldOptions } = fieldInput;
  const classes = useStyles();

  const renderInputType = () => {
    if (inputType === 'select') {
      return (
        <div
          className={`${classes.selectField} ${meta.touched && meta.error && classes.selectError}`}
        >
          <select {...field} required={required}>
            {selectFieldOptions?.options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                hidden={option.value === ''}
                disabled={option.value === ''}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (inputType === 'textarea') {
      return (
        <textarea
          placeholder={placeholder}
          className={`${classes.textarea} ${meta.touched && meta.error && classes.errorField}`}
          {...field}
        />
      );
    }

    return (
      <input
        type={inputType}
        placeholder={placeholder}
        className={`${classes.input} ${meta.touched && meta.error && classes.errorField}`}
        {...field}
      />
    );
  };

  return (
    <div>
      {label && (
        <label className={classes.label}>
          <span>{label}</span> {required && <span className="required">*</span>}
        </label>
      )}
      {renderInputType()}
    </div>
  );
};

export default InputField;
