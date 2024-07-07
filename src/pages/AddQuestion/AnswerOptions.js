import { Stack } from '@mui/material';
import React from 'react';
import LabelWithInput from '../../components/LabelWithInput';
import CustomCheckbox from '../../components/common/CustomCheckbox';
import CustomRadio from '../../components/common/CustomRadio';

function AnswerOptions({ answerType, item, checked, onChnageHandler }) {
  return (
    <Stack direction="row" flex={1} gap={2} justifyContent="center" alignItems="center">
      {answerType === 'multiselect' ? (
        <CustomCheckbox
          checked={checked}
          value={item.optionLabel}
          label={item.optionLabel}
          onChange={(e) => onChnageHandler(e, 'checkbox')}
        />
      ) : (
        <CustomRadio
          checked={checked}
          value={item.optionLabel}
          label={item.optionLabel}
          onChange={(e) => onChnageHandler(e, 'check')}
        />
      )}
      <LabelWithInput
        type="text"
        variant="outlined"
        placeholder="Write option"
        multiline
        value={item.optionValue}
        onChange={(e) => onChnageHandler(e, 'text')}
        sx={{ '& .MuiInputBase-root': { padding: '5px 5px' } }}
      />
    </Stack>
  );
}

export default AnswerOptions;
