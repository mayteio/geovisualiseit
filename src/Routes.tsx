import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Editor } from './editor/Editor';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/browse"></Route>
        <Route path="/v/new">
          <Editor />
        </Route>
        <Route path="/v/:id/edit"></Route>
        <Route path="/v/:id"></Route>
        <Route path="/me"></Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};
