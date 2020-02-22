import React, { useEffect, useState } from "react";
import Storage from "@aws-amplify/storage";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import KeplerGlSchema from "kepler.gl/schemas";
import { addDataToMap } from "kepler.gl/actions";
import { useDispatch } from "react-redux";

import { injectComponents, PanelHeaderFactory } from "kepler.gl/components";
import { setVisualisation } from "../common/appState";
import { VisualisationHeader } from "./VisualisationHeader";
import { Box } from "@material-ui/core";
import { Header } from "../common/Header";
import useMeasure from "react-use-measure";
import { useSnackbar } from "notistack";

const KeplerGl = injectComponents([
  [PanelHeaderFactory, () => VisualisationHeader]
]);

export const Visualisation: React.FC = () => {
  const [ref, { width, height }] = useMeasure();
  const { visualisationId } = useParams();
  const { data } = useQuery(GetVisualisationQuery, {
    variables: { id: visualisationId }
  });

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (data?.getVisualisation) {
      console.log(data);

      dispatch(setVisualisation(data.getVisualisation));
      const getFiles = async () => {
        try {
          const [configUrl, ...datasetUrls] = await Promise.all([
            Storage.get(data.getVisualisation.config?.file.key, {
              level: "protected",
              identityId: data.getVisualisation.user.id
            }),
            ...data.getVisualisation.datasets.items.map((dataset: any) =>
              Storage.get(dataset?.file.key, {
                level: "protected",
                identityId: data.getVisualisation.user.id
              })
            )
          ]);

          const [config, ...datasets] = await Promise.all([
            fetch(configUrl).then(res => res.json()),
            ...datasetUrls.map(d => fetch(d).then(res => res.json()))
          ]);

          console.log(config, datasets, data);

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
  }, [data, dispatch]);

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
      }
      config {
        file {
          key
        }
      }
      datasets {
        items {
          file {
            key
          }
        }
      }
    }
  }
`;
