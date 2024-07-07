import { Box } from '@mui/material';
import React from 'react';

function TabPanel({ value, index, children }) {
  if (value === index) return <Box>{children}</Box>;
  return null;
}

export default TabPanel;
