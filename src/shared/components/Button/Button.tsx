import React from 'react';
interface IProps {
  cssClass: string;
  children: React.ReactNode;
}
const Button: React.FC<IProps> = ({ cssClass, children }) => {
  return <button className={`px-4 py-2 font-bold ${cssClass}`}>{children}</button>;
};

export default Button;
