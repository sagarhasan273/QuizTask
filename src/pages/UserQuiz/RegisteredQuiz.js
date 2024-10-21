import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import * as API_URL from '../../network/Api';
import AXIOS from '../../network/axios';
import AttemptQuiz from './AttemptQuiz';
import QuizCard from './QuizCard';

function RegisteredQuiz() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);

  const getQuizzesRegisteredQuery = useQuery(
    [],
    () =>
      AXIOS.get(API_URL.USER_QUIZZES_REGISTERED, {
        params: { userId: user?._id },
      }),
    {
      onSuccess: (response) => {
        if (response?.status) {
          setQuizzes(response?.data?.quizzes);
        }
      },
    }
  );

  if (getQuizzesRegisteredQuery?.isLoading) {
    return null;
  }

  const handleQuizClick = (data) => {
    navigate(`/quiz/attempt/${data?._id}`, {
      state: {
        quiz: data,
      },
    });
  };

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
      <Routes>
        <Route
          path="/"
          element={
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
                <QuizCard data={item} key={index} onClick={handleQuizClick} />
              ))}
            </Stack>
          }
        />
        <Route path="/attempt/:quizId" element={<AttemptQuiz />} />
      </Routes>
    </Box>
  );
}

export default RegisteredQuiz;
