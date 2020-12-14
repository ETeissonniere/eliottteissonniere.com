import React, { ReactNode } from 'react';
import styles from '../css/text.module.css';

type HeaderProps = {
  content: string;
};

export const Header = ({ content }: HeaderProps) => (
  <div className={styles.header}>{content}</div>
);

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => (
  <div className={styles.paragraph}>{children}</div>
);
