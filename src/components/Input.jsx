import React, { useState } from 'react';

const Input = ({ label, type = 'text', id, name, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`floating-label-input ${isFocused || value ? 'focused' : ''}`}>
      <label htmlFor={id} className='label'>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='input'
      />
    </div>
  );
};

export default Input;
