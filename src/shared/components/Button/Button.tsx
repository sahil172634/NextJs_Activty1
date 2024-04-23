import React from 'react';
interface IProps {
  className: string;
  children: React.ReactNode;
}
const Button: React.FC<IProps> = ({ className, children }) => {
  return <button className={`px-4 py-2 font-bold ${className}`}>{children}</button>;
};

export default Button;
