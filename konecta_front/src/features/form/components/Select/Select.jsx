import React from 'react';

export const Select = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  required = false,
}) => {
  return (
    <div className="select-container">
      <label htmlFor={id} className="block text-gray-700 mb-2">{label}</label>
      <select
        id={id}
        name={name}
        className="form-select w-full border border-gray-300 rounded-md px-2 py-2"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}>
        <option value="">Seleccione una opción</option>
        {options.map((option, index) => (
          <option key={index} value={option.id}>{option.nombre}</option>
        ))}
      </select>
    </div>
  );
}