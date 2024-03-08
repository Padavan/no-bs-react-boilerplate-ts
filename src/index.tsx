import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';


const rootContainer = document.getElementById('root');
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(<App />);
}
