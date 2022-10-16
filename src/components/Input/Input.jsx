import React from 'react';
// import PropTypes from 'prop-types';
import css from '../Input/Input.module.css';

export const Input = ({
  type,
  name,
  label,
  value,
  pattern,
  title,
  onChange,
}) => {
  return (
    <label className={css.label}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        required
        onChange={onChange}
      />
    </label>
  );
};
