import { Send } from 'react-iconly';
import Link from 'next/link';

export const Footer = () => (
  <div className=" my-10 flex flex-row justify-center">
    <h1 className="text-center text-1xl text-neutral-400 mx-2">
      People. Process. Technology.
    </h1>
    <Link href="https://comptrolla.com">
      <Send primaryColor="rgb(0,208,130)" set="bold" />
    </Link>
  </div>
);
