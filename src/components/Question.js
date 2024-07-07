import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const CustomTypography = styled(Typography)(() => ({
  color: 'white',
  fontSize: '14px',
}));

function Question({ data, index, componentType = 'quizs', onClick = (i) => console.log(i) }) {
  const optionStyle = {
    backgroundColor: componentType === 'quiz' ? '#03bf00' : '#413F78',
    cursor: componentType === 'quiz' ? 'pointer' : '',
  };
  return (
    <Box sx={{ p: '15px 20px', backgroundColor: '#3530a1', maxWidth: '700px', borderRadius: '10px' }}>
      <Stack gap="5px">
        <Stack sx={{ p: 1, border: '1px solid white', borderRadius: '10px', backgroundColor: '#413F78' }}>
          <CustomTypography>
            {index + 1}Q. {data.question}
          </CustomTypography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" alignItems="center">
          <CustomTypography>
            Answer Type: {data?.answerType === 'multiselect' ? 'Multi-Select' : 'Single Select'}
          </CustomTypography>
        </Stack>
        <Stack gap="10px">
          {data?.optionsList?.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              gap={2}
              onClick={() => {
                if (componentType === 'view') return;
                if (onClick) onClick(item.optionLabel);
              }}
              sx={{ p: 1, border: '1px solid white', borderRadius: '10px', ...optionStyle }}
            >
              <CustomTypography>{item.optionLabel}.</CustomTypography>
              <CustomTypography>{item.optionValue}</CustomTypography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Question;
