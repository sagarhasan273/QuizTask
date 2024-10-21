import React from 'react';
import { useParams } from 'react-router-dom';

function AttemptQuiz() {
  const { quizId } = useParams();
  console.log(quizId);
  return <div>AttemptQuiz</div>;
}

export default AttemptQuiz;
