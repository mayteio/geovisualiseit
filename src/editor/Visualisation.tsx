import React, { useEffect, useState } from "react";
import Storage from "@aws-amplify/storage";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import KeplerGlSchema from "kepler.gl/schemas";
import { addDataToMap, toggleModal } from "kepler.gl/actions";
import { useDispatch } from "react-redux";

import { injectComponents, PanelHeaderFactory } from "kepler.gl/components";
import { setVisualisation } from "../common/appState";
import { VisualisationHeader } from "./VisualisationHeader";
import { Box } from "@material-ui/core";
import { Header } from "../common/Header";
import useMeasure from "react-use-measure";
import { useSnackbar } from "notistack";

import { ADD_DATA_ID } from "kepler.gl/dist/constants/default-settings";

import config from "../aws-exports";
const { aws_user_files_s3_bucket_region: region } = config;

const KeplerGl = injectComponents([
  [PanelHeaderFactory, () => VisualisationHeader]
]);

export const Visualisation: React.FC = () => {
  const [ref, { width, height }] = useMeasure();
  const { visualisationId } = useParams();
  const location = useLocation<any>();

  const [, setLoading] = useState(true);
  const dispatch = useDispatch();

  // on load, hide the data popup
  useEffect(() => {
    dispatch(toggleModal(null));
  }, [dispatch]);

  // first check if something has been passed via route state and load that
  useEffect(() => {
    if (location?.state?.configToSave && location?.state?.dataToSave) {
      const mapToLoad = KeplerGlSchema.load(
        location.state.data,
        location.state.config
      );
      dispatch(addDataToMap(mapToLoad));
      setLoading(false);
    }
  }, [location, dispatch]);

  // If not, go ahead and fetch the vis.
  const { enqueueSnackbar } = useSnackbar();
  const { data } = useQuery(GetVisualisationQuery, {
    variables: { id: visualisationId }
    // skip: location?.state?.config && location?.state?.data
  });

  // then grab the datasets and load them into the map.
  useEffect(() => {
    if (data?.getVisualisation) {
      dispatch(setVisualisation(data.getVisualisation));
      const getFiles = async () => {
        try {
          const [configUrl, ...datasetsUrls] = await Promise.all([
            Storage.get(data.getVisualisation.config?.file.key, {
              level: "protected",
              identityId: data.getVisualisation.config?.file.identityId
              // download: true
            }),
            ...data.getVisualisation.datasets.items.map((dataset: any) =>
              Storage.get(dataset?.file.key, {
                level: "protected",
                identityId: dataset?.file.identityId
                // download: true
              })
            )
          ]);

          const [config, ...datasets] = await Promise.all([
            fetch(configUrl).then(res => res.json()),
            ...datasetsUrls.map(url => fetch(url).then(res => res.json()))
          ]);

          const mapToLoad = KeplerGlSchema.load(datasets, config);
          dispatch(addDataToMap(mapToLoad));
          setLoading(false);
        } catch (error) {
          console.log(error);
          enqueueSnackbar("There was an error loading the visualisation", {
            variant: "error"
          });
        }
      };
      getFiles();
    }
  }, [data, dispatch, enqueueSnackbar]);

  return (
    <>
      <Box display="flex" flexDirection="column" height="100%">
        <Header />
        <Box
          flex={1}
          position="relative"
          // @ts-ignore
          ref={ref}
        >
          <KeplerGl
            id="editor"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_KEY}
            width={width}
            height={height}
            mint
          />
        </Box>
      </Box>
    </>
  );
};

const GetVisualisationQuery = gql`
  query GetVisualisation($id: ID!) {
    getVisualisation(id: $id) {
      id
      title
      description
      user {
        id
        username
      }
      config {
        file {
          key
          identityId
        }
      }
      datasets {
        items {
          file {
            key
            identityId
          }
        }
      }
    }
  }
`;
