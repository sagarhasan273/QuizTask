import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { successMsg } from '../../common/successMsg';
import LabelWithInput from '../../components/LabelWithInput';
import CustomRadio from '../../components/common/CustomRadio';
import * as API_URL from '../../network/Api';
import AXIOS from '../../network/axios';
import AnswerOptions from './AnswerOptions';
import { add_options, validateQuestionData } from './helper';

function AddQuestion() {
  const [data, setData] = useState({ answerType: 'multiselect' });
  const [optionsList, setOptionsList] = useState([{ optionLabel: 'A', optionValue: '' }]);
  const [answerList, setAnswerList] = useState([]);

  const questionAddQuery = useMutation((data) => AXIOS.post(API_URL.ADD_QUESTIONS, data), {
    onSuccess: (response) => {
      if (response.status) {
        successMsg(response.message, 'success');
        setOptionsList([{ optionLabel: 'A', optionValue: '' }]);
        setAnswerList([]);
        setData({ answerType: 'multiselect' });
      }
    },
  });

  const handleChange = (event) => {
    setAnswerList([]);
    setData((prev) => ({ ...prev, answerType: event.target.value }));
  };

  const questionHandler = (event) => {
    setData((prev) => ({ ...prev, question: event.target.value }));
  };

  const answerOptionsHandler = (event, type, item) => {
    if (type === 'check') {
      setAnswerList([item.optionLabel]);
    } else if (type === 'checkbox') {
      if (answerList.includes(item.optionLabel)) {
        setAnswerList((prev) => prev.filter((itm) => itm !== item.optionLabel));
      } else setAnswerList((prev) => [...prev, item.optionLabel]);
    } else
      setOptionsList((prev) =>
        prev.map((itm) => {
          if (itm.optionLabel === item.optionLabel) return { ...item, optionValue: event.target.value };
          return itm;
        })
      );
  };

  const addOptionsHandler = () => {
    if (optionsList.length === 10) {
      return;
    }
    setOptionsList((prev) => [...prev, { optionLabel: add_options[optionsList.length], optionValue: '' }]);
  };

  const clearHandler = () => {
    setOptionsList([{ optionLabel: 'A', optionValue: '' }]);
    setAnswerList([]);
    setData({ answerType: 'multiselect' });
  };

  const deleteHandler = () => {
    const lastOptionList = optionsList[optionsList.length - 1];
    if (answerList.includes(lastOptionList.optionLabel)) {
      setAnswerList((prev) => prev.filter((itm) => itm !== lastOptionList.optionLabel));
    }
    setOptionsList((prev) => prev.slice(0, -1));
  };

  const sumbitHandler = () => {
    if (
      validateQuestionData({
        ...data,
        answerList,
        optionsList,
      })
    ) {
      successMsg('You can not make field empty', 'warn');
      return;
    }
    questionAddQuery.mutate({
      ...data,
      answerList,
      optionsList,
    });
  };

  return (
    <Box sx={{ m: 'auto', padding: '20px 100px', maxWidth: '700px', height: '85vh', overflowY: 'scroll' }}>
      <Stack gap="20px">
        <LabelWithInput
          label="Write your question.."
          value={data?.question || ''}
          onChange={questionHandler}
          type="text"
          variant="outlined"
          multiline
        />
        <Stack direction="row" gap={2} justifyContent="center" alignItems="center">
          <Typography>Answer Type*</Typography>
          <CustomRadio
            checked={data?.answerType === 'multiselect'}
            label="Multi-Select"
            onChange={handleChange}
            value="multiselect"
          />
          <CustomRadio
            checked={data?.answerType === 'singleselect'}
            onChange={handleChange}
            value="singleselect"
            label="Choose one"
          />
        </Stack>
        <Stack gap={2}>
          {optionsList.map((item, index) => (
            <AnswerOptions
              key={index}
              answerType={data?.answerType}
              item={item}
              checked={answerList.includes(item.optionLabel)}
              onChnageHandler={(event, type) => answerOptionsHandler(event, type, item)}
            />
          ))}
        </Stack>
        <Stack direction="row-reverse" gap={1}>
          <Button
            variant="contained"
            size="small"
            onClick={addOptionsHandler}
            disableRipple
            disabled={optionsList.length === 10}
          >
            Add Option
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="danger"
            onClick={deleteHandler}
            disableRipple
            disabled={optionsList.length === 1}
          >
            Delete
          </Button>
          <Button variant="outlined" size="small" onClick={clearHandler} disableRipple>
            Clear
          </Button>
        </Stack>
        <Stack justifyContent="center" alignItems="center" pb={5}>
          <Button variant="contained" size="small" sx={{ width: '200px' }} onClick={sumbitHandler} disableRipple>
            Save Question
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AddQuestion;
