import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Loading, ModuleDetail } from '../components';

/**
 * ModuleDetailsPage fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the ModuleDetail component
 */
const ModuleDetailsPage = () => {
  let { trackId, moduleId } = useParams(); // get trackId and moduleId from the URL params

  return (
    <Layout fullWidth>
      TODO: Replace me with module details for this module: {moduleId} which has this parent track: {trackId}.
    </Layout>
  );
};

export default ModuleDetailsPage;
