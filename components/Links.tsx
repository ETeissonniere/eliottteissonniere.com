import React from 'react';
import Link from 'next/link';
import { scaleDown as Menu } from 'react-burger-menu';
import { linksMenu, menuUl, mobileMenuElem } from '../css/links.module.css';

type Props = {
  links: Array<{ name: string; link: string }>;
};

const Links = ({ links }: Props) => (
  <div>
    <div className={linksMenu}>
      <ul className={menuUl}>
        {links.map((item) => (
          <li>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Menu right customCrossIcon={<img src="images/cross.svg" />}>
      <ul className={menuUl}>
        {links.map((item) => (
          <li>
            <Link href={item.link}>
              <a className={mobileMenuElem}>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Menu>
  </div>
);

export default Links;
