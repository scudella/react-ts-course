import { type ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  name: string;
  label: string;
};

const Input = ({ name, label, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} />
    </div>
  );
};
export default Input;
