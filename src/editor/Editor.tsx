import React from 'react';
import { Header } from '../common/Header';
import { Box } from '@material-ui/core';
import useMeasure from 'react-use-measure';
import { DetailsForm } from './DetailsForm';

import { injectComponents, PanelHeaderFactory } from 'kepler.gl/components';
import { keplerTheme } from '../common/themes';
const headerFactory = () => DetailsForm;

const KeplerGl = injectComponents([[PanelHeaderFactory, headerFactory]]);

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
          <KeplerGl
            id="editor"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_KEY}
            width={width}
            height={height}
            theme={keplerTheme}
          />
        </Box>
      </Box>
    </>
  );
};
