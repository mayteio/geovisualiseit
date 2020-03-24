import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Editor } from "./editor/Editor";
import { Visualisation } from "./editor/Visualisation";
import { ShareDialog } from "./editor/ShareDialog";
import { User } from "./user/User";
import { Screenshot } from "./editor/Screenshot";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/browse"></Route>
        <Route path="/v/new">
          <Editor />
          <Screenshot />
        </Route>
        <Route path="/v/:visualisationId/edit"></Route>
        <Route path="/v/:visualisationId">
          <Visualisation />
          <ShareDialog />
        </Route>
        <Route path="/u/:usernameParam">
          <User />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};
