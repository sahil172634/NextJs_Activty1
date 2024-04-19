import React from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
interface IProops extends React.ComponentProps<'input'> {
  cssclass: string;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  rule: RegisterOptions;
  error: string | undefined;
}

const InputField = ({ error, rule, cssclass, name, label, register, ...proops }: IProops): JSX.Element => {
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
        {...register(name, rule)}
        name={name}
        {...proops}
        className='w-full border rounded-lg mt-2 p-2 border-gray-200 '
      />
    );
  };

  return (
    <div className={cssclass}>
      {renerLabel()}
      {renderInput()}
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  );
};

export default InputField;
