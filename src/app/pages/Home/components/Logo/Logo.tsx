import { useRandomColorShift } from 'app/hooks/useRandomColorShift';
import React from 'react';

import { InverseColor } from '../../../../helpers/index';
import { Socials } from '../Socials/Socials';

import styles from './styles.module.scss';

export function Logo() {
  const { color } = useRandomColorShift();

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
