import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import moment from 'moment';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { successMsg } from '../../common/successMsg';
import LabelWithInput from '../../components/LabelWithInput';
import * as API_URL from '../../network/Api';
import AXIOS from '../../network/axios';

const CustomTypography = styled(Typography)(() => ({
  fontSize: '18px',
  textAlign: 'center',
  padding: 5,
}));

function InitializeQuiz() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDateTime, setStartDateTime] = useState(moment());
  const [endDateTime, setEndDateTime] = useState(moment());

  const initializeQuizQuery = useMutation((data) => AXIOS.post(API_URL.ADD_QUIZ, data), {
    onSuccess: (response) => {
      if (response.status) {
        successMsg(response.message, 'success');
        setTitle('');
        setDescription('');
        setStartDateTime(moment());
        setEndDateTime(moment());
      } else {
        successMsg(response.message, 'error');
      }
    },
  });

  const onChangeHandler = (event) => {
    if (event.target.name === 'title') setTitle(event.target.value);
    else setDescription(event.target.value);
  };

  const submitHandler = () => {
    if (!title || !description || !startDateTime || !endDateTime) {
      successMsg('Field can not be empty.', 'info');
      return;
    }
    initializeQuizQuery.mutate({
      title,
      description,
      startDateTime: moment(startDateTime.toDate()).format('YYYY-MM-DD HH:mm'),
      endDateTime: moment(endDateTime.toDate()).format('YYYY-MM-DD HH:mm'),
    });
  };

  return (
    <Box sx={{ m: 'auto', padding: '20px 100px', maxWidth: '700px', height: '85vh', overflowY: 'scroll' }}>
      <Stack sx={{ maxWidth: '700px', borderRadius: '10px', p: 5 }} gap={3}>
        <CustomTypography>Make a Quiz</CustomTypography>
        <LabelWithInput type="text" label="Title" name="title" value={title} onChange={onChangeHandler} />
        <LabelWithInput
          type="text"
          label="Description"
          name="des"
          value={description}
          onChange={onChangeHandler}
          multiline
        />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            pb: 2,
            pt: 3,
          }}
        >
          <DateTimePicker
            sx={{
              width: '250px',
              '& .MuiInputBase-root': {
                height: '30px',
              },
              '& .MuiButtonBase-root': {
                width: '30px',
                height: '30px',
                '&:hover': {
                  backgroundColor: 'white',
                },
              },
            }}
            label="Start Time"
            value={dayjs(startDateTime)}
            onChange={(newValue) => setStartDateTime(newValue)}
          />

          <DateTimePicker
            sx={{
              width: '250px',
              '& .MuiInputBase-root': {
                height: '30px',
              },
              '& .MuiButtonBase-root': {
                width: '30px',
                height: '30px',
                '&:hover': {
                  backgroundColor: 'white',
                },
              },
            }}
            label="End Time"
            value={dayjs(endDateTime)}
            onChange={(newValue) => setEndDateTime(newValue)}
          />
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Button variant="contained" size="small" sx={{ width: '300px' }} type="submit" onClick={submitHandler}>
            Create Quiz
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default InitializeQuiz;
