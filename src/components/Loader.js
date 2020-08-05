import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = ({ size }) => (
  <div className="loading">
    <CircularProgress size={size} />
  </div>
);

export default Loader;