import AddQuestion from '../pages/AddQuestion';
import AdminDashboard from '../pages/AdminDashboard';
import DeleteQuestions from '../pages/DeleteQuestions';
import InitializeQuiz from '../pages/InitializeQuiz';
import Questions from '../pages/Questions';

export const admin_routes = [
  {
    path: '/*',
    component: <AdminDashboard />,
  },
  {
    path: '/initialize-quiz',
    component: <InitializeQuiz />,
  },
  {
    path: 'questions',
    component: <Questions />,
  },
  {
    path: 'add-question',
    component: <AddQuestion />,
  },
  {
    path: 'delete-question',
    component: <DeleteQuestions />,
  },
];
