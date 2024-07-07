import { Checkbox, Stack, Typography } from '@mui/material';
import React from 'react';

function CustomCheckbox({ label, ...props }) {
  return (
    <Stack direction="row" alignItems="center" gap="5px">
      <Checkbox
        sx={{
          width: '30px',
        }}
        disableRipple
        {...(props || {})}
      />
      <Typography>{label}</Typography>
    </Stack>
  );
}

export default CustomCheckbox;
