import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/Home';
import { Art } from '../../pages/Art/Loadable';
import { NotFoundPage } from '../../pages/NotFoundPage/Loadable';
import { Routes as RoutesContainer } from 'react-router-dom';
import { Spotify } from '../../pages/Art/components/Spotify/Spotify';
import { Trackmania } from '../../pages/Art/components/Trackmania/Trackmania';

import { AnimatePresence } from 'framer-motion/dist/framer-motion';

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <RoutesContainer location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/art" element={<Art />} />
        <Route path="/art/spotify" element={<Spotify />} />
        <Route path="/art/trackmania" element={<Trackmania />} />
        <Route element={<NotFoundPage />} />
      </RoutesContainer>
    </AnimatePresence>
  );
};

export default Routes;
