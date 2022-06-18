import { InverseColor } from 'app/helpers';
import { useRandomColorShift } from 'app/hooks/useRandomColorShift';
import React, { CSSProperties } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const spotifyBaseColor = '#1db954';
const trackmaniaBaseColor = '#2477e4';

export const Index = () => {
  const { color: spotifyColor } = useRandomColorShift({ interval: 1300 });
  const { color: trackmaniaColor } = useRandomColorShift({ interval: 1300 });

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <span className={styles.logo}>stuff when i get bored</span>
        <div className={styles.links}>
          <Link
            to="/art/spotify"
            className={classnames(styles.block, styles.spotify)}
            style={
              {
                backgroundImage: `linear-gradient(to bottom left, ${spotifyColor} 49.5%, ${spotifyBaseColor} 50%)`,
                '--inverse-color': InverseColor(spotifyColor),
              } as CSSProperties
            }
          >
            spotify
          </Link>
          <Link
            to="/art/trackmania"
            className={classnames(styles.block, styles.spotify)}
            style={
              {
                backgroundImage: `linear-gradient(to bottom left, ${trackmaniaColor} 49.5%, ${trackmaniaBaseColor} 50%)`,
                '--inverse-color': InverseColor(trackmaniaColor),
              } as CSSProperties
            }
          >
            trackmania
          </Link>
        </div>
      </div>
    </div>
  );
};
