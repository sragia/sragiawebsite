import React from 'react';
import Gallery from '../../../../components/Gallery';
import BackButton from '../../../../components/BackButton';

import styles from './styles.module.scss';
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';
export const Spotify = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.titleContainer}>
        <span className={styles.title}>just spotify playlist covers</span>
        <Link to="/art" className={styles.backBtn}>
          <BackButton />
        </Link>
      </div>
      <div>
        <Gallery
          items={[
            {
              itemId: 'lastminute',
              mediaUrl: '/art/spotify/lastminute.jpg',
            },
            {
              itemId: 'post',
              mediaUrl: '/art/spotify/post.jpg',
            },
            {
              itemId: 'hussle_art',
              mediaUrl: '/art/spotify/hussle_art.jpg',
            },
            {
              itemId: '21',
              mediaUrl: '/art/spotify/21.jpg',
            },
            {
              itemId: 'approximation',
              mediaUrl: '/art/spotify/approximation.jpg',
            },
            {
              itemId: 'bigWIBES',
              mediaUrl: '/art/spotify/bigWIBES.jpg',
            },
            {
              itemId: 'comeback',
              mediaUrl: '/art/spotify/comeback.jpg',
            },
            {
              itemId: 'darkwhite',
              mediaUrl: '/art/spotify/darkwhite.jpg',
            },
            {
              itemId: 'blastingoff',
              mediaUrl: '/art/spotify/blastingoff.jpg',
            },
            {
              itemId: 'fadin',
              mediaUrl: '/art/spotify/fadin.jpg',
            },
            {
              itemId: 'fire',
              mediaUrl: '/art/spotify/fire.jpg',
            },
            {
              itemId: 'justforus',
              mediaUrl: '/art/spotify/justforus.jpg',
            },
            {
              itemId: 'light',
              mediaUrl: '/art/spotify/light.jpg',
            },
            {
              itemId: 'resistance',
              mediaUrl: '/art/spotify/resistance.jpg',
            },
            {
              itemId: 'SHINEONUS',
              mediaUrl: '/art/spotify/SHINEONUS.jpg',
            },
          ]}
        />
      </div>
    </motion.div>
  );
};
