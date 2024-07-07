import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

function UserType({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue((prev) => ({ ...prev, userType: newValue }));
  };
  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="User" value="user" disableRipple />
        <Tab label="Admin" value="admin" disableRipple />
      </Tabs>
    </Box>
  );
}

export default UserType;
