import React from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
interface IProops extends React.ComponentProps<'select'> {
  className?: string;
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  rule?: RegisterOptions;
  error: string | undefined;
}
const SelectInputField = ({
  label,
  name,
  className,
  options,
  register,
  error,
  rule,
  ...props
}: IProops): JSX.Element => {
  const renderLabel = () => {
    return (
      <label className='font-medium text-sm'>
        {label}
        <span className='text-red-500'>*</span>
      </label>
    );
  };
  const renderSelectWithOptions = () => {
    return (
      <select
        className={`p-2 border rounded-lg border-gray-200 w-full ${className}`}
        {...props}
        {...register(name, rule)}
      >
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
      {renderLabel()}
      {renderSelectWithOptions()}
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  );
};

export default SelectInputField;
