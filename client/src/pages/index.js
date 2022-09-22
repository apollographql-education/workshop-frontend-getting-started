import React from 'react';
import { Routes, Route } from 'react-router-dom';

/** importing our pages */
import TracksHomePage from './tracks-home-page';
import TrackDetailsPage from './track-details-page';
import ModuleDetailsPage from './module-details-page';

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<TracksHomePage />} />
      <Route path="track/:trackId" element={<TrackDetailsPage />} />
      <Route path="track/:trackId/module/:moduleId" element={<ModuleDetailsPage />} />
    </Routes>
  );
}
