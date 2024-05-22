import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../form/components';

export const Modal = ({ isOpen, onClose, isDismissable = true, zIndex = 10, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ zIndex }}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-75 cursor-pointer" {...isDismissable && { onClick: onClose }}></div>
        <div className="relative bg-white p-8 rounded-lg shadow-xl w-[70%]">
          {isDismissable &&
            <Button color='secondary' onClick={onClose} fullWidth={false} className='absolute top-0 right-0 p-2 bg-transparent text-black hover:text-white rounded-full m-1'>
              <FontAwesomeIcon icon={faXmark} className='text-black hover:text-white' />
            </Button>}
          {children}
        </div>
      </div>
    </div>
  );
};
