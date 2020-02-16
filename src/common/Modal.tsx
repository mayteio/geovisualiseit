import React from 'react';
import { Dialog } from '@material-ui/core';

export const Modal: React.FC = ({ children }) => {
  return <Dialog open={true}>{children}</Dialog>;
};
