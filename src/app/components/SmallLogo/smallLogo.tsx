import React from 'react';
import { InverseColor } from 'app/helpers/color';
import { useRandomColorShift } from 'app/hooks/useRandomColorShift';

import styles from './smallLogo.module.scss';
import { Link } from 'react-router-dom';

export const SmallLogo = () => {
  const { color } = useRandomColorShift();
  return (
    <Link to="/" className={styles.logoWrapper}>
      <div className={styles.container}>
        <span
          className={styles.logo}
          style={{ backgroundColor: color, color: InverseColor(color) }}
        >
          sragia
        </span>
        <span>com</span>
      </div>
    </Link>
  );
};
