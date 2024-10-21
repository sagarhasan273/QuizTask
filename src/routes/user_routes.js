import UserDashboard from '../pages/UserDashboard';
import UserQuiz from '../pages/UserQuiz';

export const user_routes = [
  {
    path: '/*',
    component: <UserDashboard />,
  },
  {
    path: '/quiz/*',
    component: <UserQuiz />,
  },
];
