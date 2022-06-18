import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Logo } from './components/Logo/Logo';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>sragiacom</title>
        <meta name="description" content="sragiacom" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Logo />
      </motion.div>
    </>
  );
}
