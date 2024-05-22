import React from 'react';

export const Input = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value = '',
  onChange,
  required = false,
  onEnterPress,
  className,
}) => {

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-gray-700 mb-2">{label} {required && <span className="text-red-500">*</span>}</label>
      <input type={type}
        id={id}
        name={name}
        onKeyUp={(e) => e.key === 'Enter' && onEnterPress && onEnterPress()}
        className="form-input w-full border border-gray-300 rounded-md px-2 py-2" required={required}
        onChange={onChange}
        value={value}
        placeholder={placeholder} />
    </div>
  );
};
