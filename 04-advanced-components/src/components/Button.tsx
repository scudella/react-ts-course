import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };

type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
  if (isAnchorProps(props)) {
    return <a className='button' {...props}></a>;
  }

  return <button className='button' {...props}></button>;
};

// this is the best approach, only requires you to enter an el props
// the above solution, typescript is never sure it is a button, only an anchor, and therefore you can add target attribute to button, which is invalid
// type ButtonProps = {
//   el: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
//   el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

// const Button = (props: ButtonProps | AnchorProps) => {
//   if (props.el === 'anchor') {
//     return <a className='button' {...props}></a>;
//   }

//   return <button className='button' {...props}></button>;
// };
export default Button;
