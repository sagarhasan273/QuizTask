import { Box } from '@mui/material';
import React from 'react';
import Quizzes from '../../components/Quizzes';

function UserDashboard() {
  return (
    <Box p={1} sx={{ height: 'calc(100% - 82px)' }}>
      <Quizzes />
    </Box>
  );
}

export default UserDashboard;
