import React from 'react';

import styles from './styles.module.scss';
import { GithubIcon } from './icons/github';

const SOCIALS = [
  {
    icon: <GithubIcon />,
    url: 'https://github.com/sragia',
  },
];

interface Props {
  color: string;
}

export function Socials({ color }: Props) {
  return (
    <div className={styles.wrapper}>
      {SOCIALS.map(social => (
        <a href={social.url} target="_blank" rel="noreferrer" style={{ color }}>
          {social.icon}
        </a>
      ))}
    </div>
  );
}
