import React from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
interface IProops extends React.ComponentProps<'input'> {
  cssclass: string;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  rule: RegisterOptions;
}
const InputField = ({ rule, cssclass, name, label, register, ...proops }: IProops): JSX.Element => {
  return (
    <div className={cssclass}>
      <label className='ml-1 text-sm'>
        {label}
        <span className='text-red-500'>*</span>
      </label>
      <input
        {...register(name, rule)}
        name={name}
        {...proops}
        className='w-full border rounded-lg mt-2 p-2 border-gray-200 '
      />
    </div>
  );
};

export default InputField;
