// components/ui/CustomDialog.js
import React from 'react';

const CustomDialog = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomDialog;
