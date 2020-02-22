import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Editor } from "./editor/Editor";
import { Visualisation } from "./editor/Visualisation";
import { ShareDialog } from "./editor/ShareDialog";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/browse"></Route>
        <Route path="/v/new">
          <Editor />
        </Route>
        <Route path="/v/:visualisationId/edit"></Route>
        <Route path="/v/:visualisationId">
          <Visualisation />
          <ShareDialog />
        </Route>
        <Route path="/p/:profileId"></Route>
        <Route path="/p/me"></Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};
