import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as API_URL from '../../network/Api';
import AXIOS from '../../network/axios';
import Question from './Question';

function AttemptQuiz() {
  const { quizId } = useParams();
  console.log(quizId);

  const [questions, setQuestions] = useState([]);

  const getQuestionsQuery = useQuery([API_URL.GET_QUESTIONS], () => AXIOS.get(API_URL.GET_QUESTIONS), {
    onSuccess: (response) => {
      if (response?.status) {
        setQuestions(response?.data);
      }
    },
  });

  if (getQuestionsQuery?.isLoading) {
    return null;
  }

  const answerScriptHandle = (data, selectedAnswer) => {
    if (data?.answerType === 'singleselect') {
      setQuestions((prev) =>
        prev.map((item) => {
          if (data?._id === item?._id) {
            if (item?.selectedAnswerList?.includes(selectedAnswer)) {
              return { ...item, selectedAnswerList: [] };
            }
            return { ...item, selectedAnswerList: [selectedAnswer] };
          }
          return item;
        })
      );
    } else {
      setQuestions((prev) =>
        prev.map((item) => {
          if (data?._id === item?._id) {
            const selectedAnswerList = item?.selectedAnswerList || [];

            if (selectedAnswerList.includes(selectedAnswer)) {
              return {
                ...item,
                selectedAnswerList: selectedAnswerList.filter((itm) => itm !== selectedAnswer),
              };
            }

            return {
              ...item,
              selectedAnswerList: [...selectedAnswerList, selectedAnswer],
            };
          }
          return item;
        })
      );
    }
  };
  console.log(questions);
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
      <Stack gap={5}>
        {questions?.map((item, index) => (
          <Question key={index} index={index} data={item} onClick={answerScriptHandle} />
        ))}
      </Stack>
    </Box>
  );
}

export default AttemptQuiz;
