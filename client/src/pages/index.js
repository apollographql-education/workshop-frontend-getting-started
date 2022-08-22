import React from 'react';
import { Routes, Route } from 'react-router-dom';

/** importing our pages */
import Tracks from './tracks';

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Tracks />} />
    </Routes>
  );
}
