import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const CustomTypo = styled(Typography)(() => ({
  color: 'white',
  fontSize: '14px',
}));

function Question({ data, index, onClick }) {
  const optionStyle = (isSelectOption) => ({
    backgroundColor: isSelectOption ? '#03bf00' : '#413F78',
    cursor: isSelectOption ? 'pointer' : '',
  });

  return (
    <Box sx={{ p: '15px 20px', backgroundColor: '#3530a1', maxWidth: '700px', borderRadius: '10px' }}>
      <Stack gap="5px">
        <Stack sx={{ p: 1, border: '1px solid white', borderRadius: '10px', backgroundColor: '#413F78' }}>
          <CustomTypo>
            {index + 1}Q. {data.question}
          </CustomTypo>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" alignItems="center">
          <CustomTypo>Answer Type: {data?.answerType === 'multiselect' ? 'Multi-Select' : 'Single Select'}</CustomTypo>
        </Stack>
        <Stack gap="10px">
          {data?.optionsList?.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              gap={2}
              onClick={() => {
                if (onClick) onClick(data, item.optionLabel);
              }}
              sx={{
                p: 1,
                border: '1px solid white',
                borderRadius: '10px',
                ...optionStyle(data?.selectedAnswerList?.includes(item.optionLabel)),
              }}
            >
              <CustomTypo>{item.optionLabel}.</CustomTypo>
              <CustomTypo>{item.optionValue}</CustomTypo>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Question;
