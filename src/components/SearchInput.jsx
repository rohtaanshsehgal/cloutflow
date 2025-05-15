import React from 'react';

function SearchInput({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full max-w-3xl px-4 py-2 border border-gray-400 rounded-md m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm sm:text-base md:text-lg lg:text-xl"
      />
    </div>
  );
}

export default SearchInput;