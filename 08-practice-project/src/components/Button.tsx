import { Link } from 'react-router-dom';
import { ComponentPropsWithoutRef, type ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  textOnly: boolean;
  children: ReactNode;
};

type LinkProps = {
  to: string;
  textOnly: boolean;
  children: ReactNode;
};

const Button = ({ textOnly, children, ...props }: ButtonProps | LinkProps) => {
  if ('to' in props) {
    return (
      <Link
        className={textOnly ? 'button button--text-only' : 'button'}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={textOnly ? 'button button--text-only' : 'button'}
        {...props}
      >
        {children}
      </button>
    );
  }
};
export default Button;
