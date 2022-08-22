import React from 'react';
import { Routes, Route } from 'react-router-dom';

/** importing our pages */
import Tracks from './tracks';
import Track from './track';
import Module from './module';

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Tracks />} />
      <Route path="track/:trackId" element={<Track />} />
      <Route path="track/:trackId/module/:moduleId" element={<Module />} />
    </Routes>
  );
}
