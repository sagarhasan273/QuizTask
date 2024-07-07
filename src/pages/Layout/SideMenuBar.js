import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';

const CustomTypography = styled(Typography)(() => ({
  fontSize: '14px',
  color: 'white',
}));

const CustomButton = styled(Button)(() => ({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  padding: '15px',
  borderRadius: 0,
  justifyContent: 'left',
  '&:hover': {
    backgroundColor: '#1D1A5F',
  },
}));

const CustomStack = styled(Stack)(() => ({
  backgroundColor: '#413F78',
}));

function SideMenuBar() {
  const navigate = useNavigate();
  const { setDrawers } = useGlobalContext();

  const sideMenuBarHandler = (event) => {
    if (event === 'dashboard') {
      navigate('/dashboard');
    }
    if (event === 'questions') {
      navigate('/questions');
    }
    if (event === 'add-question') {
      navigate('/add-question');
    }
    if (event === 'delete-question') {
      navigate('/delete-question');
    }
    setDrawers((prev) => ({ ...prev, sideMenuBar: false }));
  };

  return (
    <Box sx={{ width: '200px' }}>
      <Stack sx={{ backgroundColor: '#413F78', color: 'white', padding: '13px' }}>
        <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>Menu</Typography>
      </Stack>
      <CustomStack>
        <CustomButton onClick={() => sideMenuBarHandler('dashboard')} disableRipple>
          <DashboardIcon sx={{ color: 'white', fontSize: '16px' }} />
          <CustomTypography>Dashboard</CustomTypography>
        </CustomButton>
      </CustomStack>
      <CustomStack>
        <CustomButton onClick={() => sideMenuBarHandler('questions')} disableRipple>
          <QuizIcon sx={{ color: 'white', fontSize: '16px' }} />
          <CustomTypography>Questions</CustomTypography>
        </CustomButton>
      </CustomStack>
      <CustomStack>
        <CustomButton onClick={() => sideMenuBarHandler('add-question')} disableRipple>
          <QuizIcon sx={{ color: 'white', fontSize: '16px' }} />
          <CustomTypography>Add Question</CustomTypography>
        </CustomButton>
      </CustomStack>
      <CustomStack>
        <CustomButton onClick={() => sideMenuBarHandler('delete-question')} disableRipple>
          <QuizIcon sx={{ color: 'white', fontSize: '16px' }} />
          <CustomTypography>Delete Questions</CustomTypography>
        </CustomButton>
      </CustomStack>
    </Box>
  );
}

export default SideMenuBar;
