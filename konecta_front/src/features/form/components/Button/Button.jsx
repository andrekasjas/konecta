import React from 'react';

export const Button = ({
  children,
  color = 'primary',
  onClick,
  type = 'button',
  fullWidth = true,
  className = '',
  disabled = false,
  isLoading = false
}) => {
  const baseStyle = "px-4 py-2 rounded-md text-white font-semibold focus:outline-none transition duration-200 ease-in-out";

  const colorStyles = {
    primary: "bg-emerald-500 hover:bg-emerald-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
    danger: "bg-red-500 hover:bg-red-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
  };

  const disabledStyle = "bg-gray-400 cursor-not-allowed";

  const buttonStyle = `
    ${className} 
    ${baseStyle} 
    ${disabled ? disabledStyle : colorStyles[color]} 
    ${fullWidth ? 'w-full' : ''}
  `;

  return (
    <button className={buttonStyle} onClick={onClick} type={type} disabled={disabled || isLoading}>
      {!isLoading ? 
        children : 
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-b-2 border-green-500 rounded-full animate-spin"></div>
          cargando...
        </div>
      }
    </button>
  );
};
