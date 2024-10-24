export const API_URL = 'http://localhost:5000/';

const USER_ENDPOINT = 'user';
const ADMIN_ENDPOINT = 'admin';

export const USER_LOGIN = `auth/user/login/`;
export const USER_REGISTER = `auth/user/register`;
export const USER_LOGOUT = `auth/user/logout`;

export const GET_QUESTIONS = `${ADMIN_ENDPOINT}/questions`;
export const ADD_QUESTIONS = `${ADMIN_ENDPOINT}/question/add`;

export const ADD_QUIZ = `${ADMIN_ENDPOINT}/quiz/add`;
export const GET_QUIZZES = `${ADMIN_ENDPOINT}/quiz/quizzes`;

export const USER_QUIZ_REGISTER = `${USER_ENDPOINT}/quiz-register`;
export const USER_QUIZZES_REGISTERED = `${USER_ENDPOINT}/quizzes-registered`;
