import React from "react";
import { Header } from "../common/Header";
import { Box } from "@material-ui/core";
import useMeasure from "react-use-measure";
import { DetailsForm } from "./DetailsForm";

import { injectComponents, PanelHeaderFactory } from "kepler.gl/components";
import { convertToPng } from "kepler.gl/dist/utils/export-image-utils";
import { keplerTheme } from "../common/themes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";

import {
  startExportingImage,
  cleanupExportImage,
  setExportImageDataUri
} from "kepler.gl/actions";

const KeplerGl = injectComponents([[PanelHeaderFactory, () => DetailsForm]]);

export const Editor = () => {
  const [ref, { width, height }] = useMeasure();

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
          <ScreenshotContainer>
            <KeplerGl
              id="editor"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_KEY}
              width={width}
              height={height}
              theme={keplerTheme}
            />
          </ScreenshotContainer>
        </Box>
      </Box>
    </>
  );
};

export const ScreenshotContainer: React.FC = ({ children }) => {
  // @ts-ignore
  const { editorDialogOpen } = useSelector<RootState>(s => s.app);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (editorDialogOpen) {
      dispatch(startExportingImage());
      const filter = (node: any) =>
        !(
          node.classList &&
          node.classList.contains("mapboxgl-control-container")
        );
      convertToPng(screenshotRef.current, { filter }).then((dataUri: any) => {
        dispatch(setExportImageDataUri(dataUri));
      });
    } else {
      dispatch(cleanupExportImage());
    }
  }, [editorDialogOpen, dispatch]);

  const screenshotRef = React.useRef();

  return (
    <Box
      width={1}
      height={1}
      // @ts-ignore
      ref={screenshotRef}
    >
      {children}
    </Box>
  );
};
