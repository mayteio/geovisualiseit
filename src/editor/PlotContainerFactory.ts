import { withState, PlotContainerFactory } from "kepler.gl/components";
import { EXPORT_IMAGE_ID } from "kepler.gl/dist/constants/default-settings";

export const CustomPlotContainerFactory = () =>
  withState([], (state: any) => ({
    uiState: { ...state.keplerGl.editor.uiState, currentModal: EXPORT_IMAGE_ID }
  }))(PlotContainerFactory());
