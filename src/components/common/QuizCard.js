import { Box, Button, Stack, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { successMsg } from '../../common/successMsg';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import * as API_URL from '../../network/Api';
import AXIOS from '../../network/axios';
import QuizTimer from './QuizTimer';

const quizStatusStyle = (quizStatus) => {
  if (quizStatus === 'New') {
    return { border: '1px solid #88ff00c7', background: '#49ff00c2' };
  }
  if (quizStatus === 'Ongoing') {
    return { border: '1px solid #dbff00c7', background: '#ffbe00c2' };
  }
  if (quizStatus === 'Ended') {
    return { border: '1px solid #ff0000c7', background: '#ff000091' };
  }
  return {};
};

const getQuizStatus = (startTime, endTime) => {
  const currentTime = moment();
  if (endTime < currentTime) {
    return 'Ended';
  }
  if (startTime < currentTime && currentTime < endTime) {
    return 'Ongoing';
  }
  return 'New';
};

function QuizCard({ data }) {
  const { user } = useGlobalContext();
  const { userType } = user;

  const [quizStatus, setQuizeStatus] = useState(getQuizStatus(moment(data?.startDateTime), moment(data?.endDateTime)));

  const quizRegisterQuery = useMutation((data) => AXIOS.post(API_URL.USER_QUIZ_REGISTER, data), {
    onSuccess: (data) => {
      if (data?.status) {
        successMsg(data?.message, 'success');
      } else {
        successMsg(data?.message, 'error');
      }
    },
  });

  const handleJoinRegister = () => {
    if (quizStatus === 'Ongoing') {
      console.log('join.');
    } else if (!!user && !!data) quizRegisterQuery.mutate({ userId: user?._id, quizId: data?._id });
  };

  useEffect(() => {
    setQuizeStatus(getQuizStatus(moment(data?.startDateTime), moment(data?.endDateTime)));
  }, [quizStatus]);

  return (
    <Stack
      sx={{
        width: '200px',
        height: '250px',
        border: '1px solid #413F78',
        p: 1,
        borderRadius: '10px',
        background: '#413F78',
      }}
      justifyContent="space-between"
      gap={1}
    >
      <Stack gap={1}>
        <Typography
          sx={{ fontSize: '16px', color: 'white', fontWeight: '500', textAlign: 'center', lineHeight: '18.45px' }}
        >
          {data?.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '500',
            textAlign: 'center',
            lineHeight: '18.45px',
            color: 'white',
            wordBreak: 'break-word',
          }}
        >
          {data?.description}
        </Typography>
      </Stack>
      <Stack gap={1.5}>
        <Stack>
          <Typography
            sx={{ fontSize: '14px', color: 'white', fontWeight: '500', textAlign: 'center', lineHeight: '18.45px' }}
          >
            <QuizTimer data={data} quizStatus={quizStatus} setQuizeStatus={setQuizeStatus} />
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box
            sx={{
              borderRadius: '20px',
              p: '2px',
              pl: 1,
              pr: 1,
              ...quizStatusStyle(quizStatus),
            }}
          >
            <Typography
              sx={{ fontSize: '14px', color: 'white', fontWeight: '500', textAlign: 'center', lineHeight: '18.45px' }}
            >
              {quizStatus}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ height: '25px' }}
            disabled={quizStatus === 'Ended' || userType === 'admin' || user?.quizzes?.includes(data?._id)}
            color="quizDiabled"
            onClick={handleJoinRegister}
          >
            <Typography
              sx={{ fontSize: '14px', color: 'white', fontWeight: '500', textAlign: 'center', lineHeight: '18.45px' }}
            >
              {quizStatus === 'Ongoing' ? 'Join' : user?.quizzes?.includes(data?._id) ? 'Registered' : 'Register'}
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default QuizCard;
