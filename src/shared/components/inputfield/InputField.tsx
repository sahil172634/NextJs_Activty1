import React from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
interface IProops extends React.ComponentProps<'input'> {
  type: string;
  name: string;
  label: string;
  rule?: RegisterOptions;
  error?: string;
  className?: string;
  register: UseFormRegister<FieldValues>;
}

const InputField = ({ error, rule, className, type, name, label, register, ...proops }: IProops): JSX.Element => {
  const renerLabel = () => {
    return (
      <label className='ml-1 text-sm'>
        {label}
        <span className='text-red-500'>*</span>
      </label>
    );
  };
  const renderInput = () => {
    return (
      <input
        type={type}
        {...register(name, rule)}
        name={name}
        {...proops}
        className={`w-full border rounded-lg mt-2 p-2 ${error ? 'border-red-500' : 'border-gray-200'} `}
      />
    );
  };

  return (
    <div className={className}>
      {renerLabel()}
      {renderInput()}
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  );
};

export default InputField;
