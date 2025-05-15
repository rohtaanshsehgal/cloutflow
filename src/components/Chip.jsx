import React from 'react';

function Chip({ label, variant = 'default' }) {
  const variants = {
    default: {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
      border: 'border-gray-300',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-800',
      border: 'border-purple-300',
    },
    rose: {
      bg: 'bg-rose-100',
      text: 'text-rose-800',
      border: 'border-rose-300',
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      border: 'border-yellow-300',
    },
    brown: {
      bg: 'bg-amber-100',
      text: 'text-amber-800',
      border: 'border-amber-300',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      border: 'border-green-300',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border-blue-300',
    },
  };

  const { bg, text, border } = variants[variant] || variants.default;

  return (
    <div
      className={`inline-flex items-center px-3 py-1 border ${bg} ${text} ${border} rounded-sm text-sm`}
    >
      <span>{label}</span>

        <button
          onClick={onRemove}
          className="ml-2 text-sm font-bold focus:outline-none"
        >
          X
        </button>

    </div>
  );
}

export default Chip;