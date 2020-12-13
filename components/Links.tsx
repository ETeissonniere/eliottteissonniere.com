import React from 'react';
import Link from 'next/link';
import { linksMenu } from '../css/links.module.css';

type Props = {
  links: Array<{ name: string; link: string }>;
};

const Links = ({ links }: Props) => (
  <div className={linksMenu}>
    <ul>
      {links.map((item) => (
        <li>
          <Link href={item.link}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Links;
