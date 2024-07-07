import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { successMsg } from '../common/successMsg';
import { useGlobalContext } from '../context/GlobalContextProvider';
import { setCookie } from '../helpers/authentication/setCookie';

const CustomTypography = styled(Typography)(() => ({
  color: 'white',
  fontSize: '14px',
}));

function TopBar() {
  const { user, setDrawers } = useGlobalContext();
  const navigate = useNavigate();

  const sideMenuBarHandler = () => {
    setDrawers((prev) => ({ ...prev, sideMenuBar: true }));
  };

  const logOutHandler = () => {
    setCookie('accessToken', '', 0);
    successMsg('Log out successful.', 'success');
    navigate('/login/user');
  };

  return (
    <Stack sx={{ backgroundColor: '#413F78', p: 2 }} direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button disableRipple sx={{ p: 0, m: 0 }} onClick={sideMenuBarHandler}>
          <MenuIcon sx={{ p: 0, m: 0, color: 'white', cursor: 'pointer' }} />
        </Button>
        <CustomTypography>{user.userType === 'admin' ? 'Admin Console' : 'Online Quiz'}</CustomTypography>
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <CustomTypography>{user?.name}</CustomTypography>
        <Button onClick={logOutHandler} disableRipple>
          <LogoutIcon sx={{ color: 'white', fontSize: '18px' }} />
          <CustomTypography>Logout</CustomTypography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default TopBar;
