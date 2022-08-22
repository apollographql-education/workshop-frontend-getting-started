import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Layout, Loading } from '../components';
import TrackDetail from '../components/track-detail';

/** GET_TRACK_DETAILS gql query to retrieve a specific track by its ID */
export const GET_TRACK_DETAILS = gql`
  query GetTrackDetails($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

/**
 * Track Page fetches a track's data from the gql query GET_TRACK_DETAILS
 * and provides it to the TrackDetail component to display
 */
const Track = () => {
  let { trackId } = useParams(); // get trackId from the URL params

  const { loading, error, data } = useQuery(GET_TRACK_DETAILS, {
    variables: { trackId },
  });

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <Layout>
        <TrackDetail track={data.track} />
      </Layout>
    );
  }
};

export default Track;
