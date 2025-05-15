import React, { useState } from 'react';

function Select({ options, value, onChange,placeholder = 'Select an option' }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange("");
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-48">
      <div className="flex items-center">
        <div className="relative flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2 border border-black rounded-md bg-white text-black focus:outline-none text-left"
          >
            {value || placeholder}
          </button>
          {value && (
            <button
              onClick={handleClear}
              className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center bg-gray-200 text-black rounded-full   focus:outline-none"
            >
              X
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="absolute mt-2 w-full bg-white border border-black rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
