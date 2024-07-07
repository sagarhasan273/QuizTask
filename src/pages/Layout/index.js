import { Box, Drawer, Stack } from '@mui/material';
import { useQuery } from 'react-query';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FrontPageLoading from '../../assets/icons/Dual Ball@1x-1.0s-200px-200px.gif';
import { successMsg } from '../../common/successMsg';
import TopBar from '../../components/TopBar';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import * as API_URL from '../../network/Api';
import AXIOS from '../../network/axios';
import { admin_routes } from '../../routes/admin_routes';
import SideMenuBar from './SideMenuBar';

export default function Layout() {
  const { user, setUser, drawers, setDrawers } = useGlobalContext();
  const { sideMenuBar } = drawers;
  const navigate = useNavigate();

  const usersQuery = useQuery([API_URL.API_URL], () => AXIOS.get(API_URL.API_URL), {
    onSuccess: (response) => {
      if (response?.data?.status) {
        setUser(response?.data?.user || {});
      } else {
        navigate('/login/user');
      }
    },
    onError: (error) => {
      successMsg(error, 'error');
    },
  });
  if (usersQuery.isLoading) {
    return (
      <Stack sx={{ height: '100vh' }} justifyContent="center" alignItems="center">
        <Stack sx={{ width: '100px', height: '100px' }}>
          <img src={FrontPageLoading} alt="My GIF" />
        </Stack>
      </Stack>
    );
  }
  return (
    <Box>
      <TopBar user={user} />
      <Routes>
        {admin_routes?.map((route, index) => (
          <Route key={index} path={route?.path} element={route?.component} />
        ))}
      </Routes>

      <Drawer
        sx={{ '& .MuiPaper-root': { backgroundColor: '#413F78' } }}
        anchor="left"
        open={sideMenuBar}
        onClose={() => setDrawers((prev) => ({ ...prev, sideMenuBar: false }))}
      >
        <SideMenuBar />
      </Drawer>
    </Box>
  );
}
