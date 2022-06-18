import React from 'react';
import Gallery from '../../../../components/Gallery';
import BackButton from '../../../../components/BackButton';

import styles from './styles.module.scss';
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';
export const Trackmania = () => {
  const options = {
    galleryLayout: -1,
    groupSize: 0,
    scrollAnimation: 'ZOOM_OUT',
    gallerySizeType: 'px',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.titleContainer}>
        <span className={styles.title}>trackmania car designs</span>
        <Link to="/art" className={styles.backBtn}>
          <BackButton />
        </Link>
      </div>
      <div>
        <Gallery
          options={options}
          items={[
            {
              itemId: 'sprint-1',
              mediaUrl: '/art/trackmania/Spring-Flower/1.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'sprint-2',
              mediaUrl: '/art/trackmania/Spring-Flower/2.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'sprint-3',
              mediaUrl: '/art/trackmania/Spring-Flower/3.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'sprint-4',
              mediaUrl: '/art/trackmania/Spring-Flower/4.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'RedCar-1',
              mediaUrl: '/art/trackmania/RedCar/1.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'RedCar-2',
              mediaUrl: '/art/trackmania/RedCar/2.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'RedCar-3',
              mediaUrl: '/art/trackmania/RedCar/3.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'RedCar-4',
              mediaUrl: '/art/trackmania/RedCar/4.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Shapes-1',
              mediaUrl: '/art/trackmania/Shapes/1.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Shapes-2',
              mediaUrl: '/art/trackmania/Shapes/2.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Shapes-3',
              mediaUrl: '/art/trackmania/Shapes/3.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Shapes-4',
              mediaUrl: '/art/trackmania/Shapes/4.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Golden-1',
              mediaUrl: '/art/trackmania/Golden/1.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Golden-2',
              mediaUrl: '/art/trackmania/Golden/2.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Golden-3',
              mediaUrl: '/art/trackmania/Golden/3.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Golden-4',
              mediaUrl: '/art/trackmania/Golden/4.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Black-1',
              mediaUrl: '/art/trackmania/Black/1.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Black-2',
              mediaUrl: '/art/trackmania/Black/2.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Black-3',
              mediaUrl: '/art/trackmania/Black/3.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
            {
              itemId: 'Black-4',
              mediaUrl: '/art/trackmania/Black/4.jpg',
              metaData: {
                type: 'image',
                height: 2160,
                width: 3840,
                focalPoint: [0, 0],
              },
            },
          ]}
        />
      </div>
    </motion.div>
  );
};
