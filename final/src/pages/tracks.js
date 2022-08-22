import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, Loading } from '../components';
import TrackCard from '../components/track-card';

/** TRACKS gql query to retreive all tracks */
export const GET_TRACKS_FOR_HOMEPAGE = gql`
  query GetTracksForHomepage {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the GET_TRACKS_FOR_HOMEPAGE query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS_FOR_HOMEPAGE);

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <Layout grid>
        {data.tracksForHome.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </Layout>
    );
  }
};

export default Tracks;
