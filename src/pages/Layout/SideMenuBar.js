import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { admin_sidebar, menubar_navigate_afterClick } from './helper';

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
    menubar_navigate_afterClick.map((item) => {
      if (event === item.event) {
        navigate(item.path);
      }
      return '';
    });

    setDrawers((prev) => ({ ...prev, sideMenuBar: false }));
  };

  const menu_items = admin_sidebar;

  return (
    <Box sx={{ width: '200px' }}>
      <Stack sx={{ backgroundColor: '#413F78', color: 'white', padding: '13px' }}>
        <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>Menu</Typography>
      </Stack>
      {menu_items.map((item, index) => (
        <CustomStack key={index}>
          <CustomButton onClick={() => sideMenuBarHandler(item?.value)} disableRipple>
            {item.icon}
            <CustomTypography>{item?.label}</CustomTypography>
          </CustomButton>
        </CustomStack>
      ))}
    </Box>
  );
}

export default SideMenuBar;
