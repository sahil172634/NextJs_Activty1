import React from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
interface IProops extends React.ComponentProps<'select'> {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  rule?: RegisterOptions;
}
const SelectInputField = ({ label, name, options, register, rule, ...props }: IProops): JSX.Element => {
  const renderSelectWithOptions = () => {
    return (
      <select className='p-2 border rounded-lg border-gray-200 w-full' {...props} {...register!(name, rule)}>
        {options.map((option, index) => (
          <option
            disabled={index === 0 ? true : false}
            selected={index === 0 ? true : false}
            key={option}
            value={index === 0 ? '' : option}
          >
            {option}
          </option>
        ))}
      </select>
    );
  };
  return (
    <div className='p-1 mb-4'>
      <label className='font-medium text-sm'>
        {label}
        <span className='text-red-500'>*</span>
      </label>
      {renderSelectWithOptions()}
    </div>
  );
};

export default SelectInputField;
