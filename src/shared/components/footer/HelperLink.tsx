import React from 'react';
import Link from 'next/link';
interface link {
  links: string[];
}
const HelperLink = ({ links }: link): JSX.Element => {
  return (
    <ul>
      {links.map((link: string) => (
        <li key={link} className='mt-4 hover:underline'>
          <Link href='/'>{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HelperLink;
