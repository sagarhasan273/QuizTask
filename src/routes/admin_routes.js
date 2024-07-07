import AddQuestion from '../pages/AddQuestion';
import AdminDashboard from '../pages/AdminDashboard';
import DeleteQuestions from '../pages/DeleteQuestions';
import Questions from '../pages/Questions';

export const admin_routes = [
  {
    path: '/*',
    component: <AdminDashboard />,
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
