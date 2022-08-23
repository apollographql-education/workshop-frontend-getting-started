import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Layout, ModuleDetail, Loading } from '../components';

/**
 * GET_MODULE_AND_PARENT_TRACK gql query to retrieve a specific module and its parent track,
 * both needed for the ModuleDetail component
 */
export const GET_MODULE_AND_PARENT_TRACK = gql`
  query GetModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

/**
 * Module page fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the ModuleDetail component
 */
const Module = () => {
  let { trackId, moduleId } = useParams(); // get trackId and moduleId from the URL params

  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { moduleId, trackId },
  });

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <Layout fullWidth>
        <ModuleDetail track={data.track} module={data.module} />
      </Layout>
    );
  }
};

export default Module;
