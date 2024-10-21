import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as API_URL from '../network/Api';
import AXIOS from '../network/axios';
import QuizCard from './common/QuizCard';

function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const quizzesQuery = useQuery([API_URL.GET_QUIZZES], () => AXIOS.get(API_URL.GET_QUIZZES), {
    onSuccess: (response) => {
      if (response?.status) {
        setQuizzes(response?.data);
      }
    },
  });
  if (quizzesQuery.isLoading) {
    return null;
  }
  return (
    <Box
      sx={{
        m: 'auto',
        width: '700px',
        height: '100%',
        p: 1,
        overflowY: 'scroll',
      }}
    >
      <Stack sx={{ height: '200px', flex: 1, border: '1px solid blue', mb: 1, borderRadius: '10px', p: 1 }}>
        helow
      </Stack>
      <Stack
        gap={1}
        sx={{
          overflowY: 'scroll',
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          justifyContent: 'space-between',
          gridTemplateRows: '0fr',
        }}
      >
        {quizzes?.map((item, index) => (
          <QuizCard data={item} key={index} />
        ))}
      </Stack>
    </Box>
  );
}

export default Quizzes;
