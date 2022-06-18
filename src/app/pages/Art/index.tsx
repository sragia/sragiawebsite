import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Index } from './components/Index/Index';
import { motion } from 'framer-motion/dist/framer-motion';
import { SmallLogo } from 'app/components/SmallLogo/smallLogo';

export function Art() {
  return (
    <>
      <Helmet>
        <title>art</title>
        <meta name="description" content="art" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SmallLogo />
        <Index />
      </motion.div>
    </>
  );
}
