import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Question from '../../components/Question';
import * as API_URL from '../../network/Api';
import AXIOS from '../../network/axios';

function Questions() {
  const [questions, setQuestions] = useState([]);
  const questionsQuery = useQuery([API_URL.GET_QUESTIONS], () => AXIOS.get(API_URL.GET_QUESTIONS), {
    onSuccess: (response) => {
      if (response.status) {
        setQuestions(response.data);
      }
    },
  });
  if (questionsQuery.isLoading) {
    return (
      <Box sx={{ m: 'auto', padding: '20px 100px', maxWidth: '700px', height: '85vh', overflowY: 'scroll' }}>
        <Stack gap={2} sx={{ m: 'auto' }}>
          {questions?.map((item, index) => (
            <Question key={index} index={index} data={item} />
          ))}
        </Stack>
      </Box>
    );
  }
  return (
    <Box sx={{ m: 'auto', padding: '20px 100px', maxWidth: '700px', height: '85vh', overflowY: 'scroll' }}>
      <Stack gap={2} sx={{ m: 'auto' }}>
        {questions?.map((item, index) => (
          <Question key={index} index={index} data={item} />
        ))}
      </Stack>
    </Box>
  );
}

export default Questions;
