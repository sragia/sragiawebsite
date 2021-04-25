import React, { useEffect, useState } from 'react';

import { getRandomColor, InverseColor } from '../../../../helpers/index';
import { Socials } from '../Socials/Socials';

import styles from './styles.module.scss';

export function Logo() {
  const [color, setColor] = useState('#F1F2ED');

  useEffect(() => {
    setInterval(() => {
      setColor(getRandomColor());
    }, 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <span
          className={styles.logo}
          style={{ backgroundColor: color, color: InverseColor(color) }}
        >
          sragia
        </span>
        <span>com</span>
        <Socials color={color} />
      </div>
    </div>
  );
}
