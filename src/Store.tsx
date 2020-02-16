import React from 'react';
import keplerGlReducer from 'kepler.gl/reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';
import { Provider } from 'react-redux';
import { appReducer } from './common/appState';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer as any,

  // Your other reducers here
  app: appReducer,
});

// create store
const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(taskMiddleware)));

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <Provider
      // @ts-ignore
      store={store}
    >
      {children}
    </Provider>
  );
};

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
