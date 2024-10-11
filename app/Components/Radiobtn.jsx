import React from 'react';

const RadioButton = ({ id, name, label }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full cursor-pointer peer-checked:border-orange-600 peer-checked:before:bg-orange-600 before:content-[''] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300 peer-checked:before:scale-100 before:scale-0"
      >
        <span className="sr-only">{label}</span>
      </label>
      {label && (
        <span className="ml-2 text-gray-700">{label}</span>
      )}
    </div>
  );
};

const Radiobtn = () => {
  return (
    <div className="space-y-2">
      <RadioButton id="radio1" name="radio-group" />
    </div>
  );
};

export default Radiobtn;