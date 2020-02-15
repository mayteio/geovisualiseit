import React from 'react';
import { Routes } from './Routes';
import { Providers } from './Providers';

import Amplify from '@aws-amplify/core';
import config from './aws-exports';

Amplify.configure(config);

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
