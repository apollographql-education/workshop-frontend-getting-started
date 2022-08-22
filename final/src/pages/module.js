import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components';

/**
 * Module page fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the ModuleDetail component
 */
const Module = () => {
  let { trackId, moduleId } = useParams(); // get trackId and moduleId from the URL params

  return (
    <Layout fullWidth>
      TODO: Replace me with module details for this module: {moduleId} which has this parent track: {trackId}.
    </Layout>
  );
};

export default Module;
