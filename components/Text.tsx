import React, { ReactNode } from 'react';
import styles from '../css/text.module.css';

type HeaderProps = {
  content: string;
};

export const Header = ({ content }: HeaderProps) => (
  <h1 className={styles.header}>{content}</h1>
);

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => (
  <div className={styles.paragraph}>{children}</div>
);
