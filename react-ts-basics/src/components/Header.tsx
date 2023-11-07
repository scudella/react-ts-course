import { type PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};
export default Header;
