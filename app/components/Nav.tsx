import Image from 'next/image';

export const Nav = () => (
  <div className="navbar bg-neutral-100">
    <div className="navbar-start"></div>
    <div className="navbar-center">
      <Image alt="comptrolla_logo" height={50} src="/logo.png" width={200} />
    </div>
    <div className="navbar-end"></div>
  </div>
);
