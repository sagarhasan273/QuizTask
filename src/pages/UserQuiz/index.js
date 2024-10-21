import { Box } from '@mui/material';
import React from 'react';
import RegisteredQuiz from './RegisteredQuiz';

function UserQuiz() {
  return (
    <Box p={1} sx={{ height: 'calc(100% - 82px)' }}>
      <RegisteredQuiz />
    </Box>
  );
}

export default UserQuiz;
