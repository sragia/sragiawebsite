import { ProGallery } from 'pro-gallery';
import React from 'react';
type GalleryProps = {
  items: any[];
  options?: any;
};
const Gallery: React.FC<GalleryProps> = ({ items, options }) => {
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const galleryOptions = options || {
    galleryLayout: -1,
    groupSize: 1,
    cubeImages: true,
    scrollAnimation: 'ZOOM_OUT',
    useMaxDimensions: true,
  };

  console.log({ galleryOptions });

  const scrollingElement = window;
  return (
    <ProGallery
      options={galleryOptions}
      container={container}
      items={items}
      scrollingElement={scrollingElement}
    />
  );
};

export default Gallery;
