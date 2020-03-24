import React from "react";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { convertToPng } from "kepler.gl/dist/utils/export-image-utils";

import { startExportingImage, setExportImageDataUri } from "kepler.gl/actions";
import {
  PlotContainerFactory,
  MapContainerFactory
} from "kepler.gl/components";
import { StaticMap } from "react-map-gl";
import * as uiStateActions from "kepler.gl/dist/actions/ui-state-actions";
import * as visStateActions from "kepler.gl/dist/actions/vis-state-actions";
import * as mapStateActions from "kepler.gl/dist/actions/map-state-actions";

const MapContainer = MapContainerFactory();
const PlotContainer = PlotContainerFactory(() => MapContainer);

export const Screenshot = () => {
  // @ts-ignore
  const dispatch = useDispatch();

  const getScreenshot = () => {
    dispatch(startExportingImage());
    const filter = (node: any) =>
      !(
        node.classList && node.classList.contains("mapboxgl-control-container")
      );
    convertToPng(screenshotRef.current, { filter }).then((dataUri: any) => {
      dispatch(setExportImageDataUri(dataUri));
    });
  };

  const handleMapRender = (map: any) => {
    if (map.isStyleLoaded()) {
      getScreenshot();
    }
  };

  const screenshotRef = React.useRef<HTMLDivElement>();

  // @ts-ignore
  const { keplerGl, app } = useSelector<AppState>(state => state);

  if (!keplerGl?.editor?.visState) return null;

  const { editor } = keplerGl || {};
  const { visState, uiState, mapState, mapStyle } = editor || {};

  const exportImageSetting = uiState?.exportImage;

  const mapFields = {
    datasets: visState?.datasets,
    // getMapboxRef,
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_API_ACCESS_KEY,
    mapboxApiUrl: "https://api.mapbox.com",
    mapState,
    uiState,
    editor: visState?.editor,
    mapStyle,
    mapControls: uiState?.mapControls,
    layers: visState?.layers,
    layerOrder: visState?.layerOrder,
    layerData: visState?.layerData,
    layerBlending: visState?.layerBlending,
    filters: visState?.filters,
    interactionConfig: visState?.interactionConfig,
    readOnly: uiState?.readOnly,
    uiStateActions,
    visStateActions,
    mapStateActions,
    mousePos: {},
    toggleMapControl: () => {},
    animationConfig: visState?.filters
  };

  console.log(PlotContainer);

  return !app.editorDialogOpen ? (
    <PlotContainer
      width={800}
      height={600}
      exportImageSetting={uiState.exportImage}
      mapFields={mapFields}
      addNotification={uiStateActions.addNotification}
      startExportingImage={uiStateActions.startExportingImage}
      setExportImageDataUri={uiStateActions.setExportImageDataUri}
      setExportImageError={uiStateActions.setExportImageError}
    />
  ) : (
    <>Loading</>
  );
};
