import { Radio, Stack, Typography } from '@mui/material';
import React from 'react';

function CustomRadio({ value, label, checked, onChange, ...props }) {
  return (
    <Stack direction="row" gap="5px" justifyContent="center" alignItems="center">
      <Radio
        checked={checked}
        onChange={onChange}
        value={value}
        name="radio-buttons"
        disableRipple
        sx={{ width: '30px' }}
        {...(props || {})}
      />
      <Typography>{label}</Typography>
    </Stack>
  );
}

export default CustomRadio;
