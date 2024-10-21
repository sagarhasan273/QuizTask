import { useEffect, useState } from 'react';
import { getTimeLeftForQuiz } from '../../helpers/Timer';

function QuizTimer({ data, setQuizeStatus, quizStatus }) {
  const [time, setTime] = useState(getTimeLeftForQuiz(data?.startDateTime, data?.endDateTime)?.time);

  useEffect(() => {
    const timer = setInterval(() => {
      const status = getTimeLeftForQuiz(data?.startDateTime, data?.endDateTime);
      setTime(status?.time);
      if (quizStatus !== status?.label) {
        setQuizeStatus(status?.label);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return time;
}

export default QuizTimer;
