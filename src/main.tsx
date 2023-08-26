import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto-condensed';
import '@fontsource-variable/outfit';
import '@fontsource/krona-one';
import '@fontsource/caveat-brush';
import '@fontsource/bangers';
import '@fontsource/pacifico';
import '@fontsource/ranga';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
