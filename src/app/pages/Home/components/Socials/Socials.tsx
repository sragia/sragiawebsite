import React from 'react';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { GithubIcon } from './icons/github';
import { Picture } from './icons/picture';

const SOCIALS = [
  {
    icon: <GithubIcon />,
    url: 'https://github.com/sragia',
  },
  {
    icon: <Picture />,
    url: '/art',
    internal: true,
  },
];

interface Props {
  color: string;
}

export function Socials({ color }: Props) {
  return (
    <div className={styles.wrapper}>
      {SOCIALS.map(
        social =>
          (social.internal && (
            <Link to={social.url} style={{ color }}>
              {social.icon}
            </Link>
          )) || (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              style={{ color }}
            >
              {social.icon}
            </a>
          ),
      )}
    </div>
  );
}
