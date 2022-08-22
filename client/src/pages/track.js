import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components';

/**
 * Track Page fetches a track's data from the gql query GET_TRACK
 * and provides it to the TrackDetail component to display
 */
const Track = () => {
  let { trackId } = useParams(); // get trackId from the URL params

  return <Layout>TODO: Replace me with track details for this track id: {trackId}!</Layout>;
};

export default Track;
