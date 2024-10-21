import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuizIcon from '@mui/icons-material/Quiz';

export const admin_sidebar = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    icon: <DashboardIcon sx={{ color: 'white', fontSize: '16px' }} />,
  },
  {
    label: 'Add Quiz',
    value: 'initialize-quiz',
    icon: <QuizIcon sx={{ color: 'white', fontSize: '16px' }} />,
  },
  {
    label: 'Questions',
    value: 'questions',
    icon: <QuestionAnswerIcon sx={{ color: 'white', fontSize: '16px' }} />,
  },
  {
    label: 'Add Question',
    value: 'add-question',
    icon: <AddBoxIcon sx={{ color: 'white', fontSize: '16px' }} />,
  },
  {
    label: 'Delete Questions',
    value: 'delete-question',
    icon: <DeleteIcon sx={{ color: 'white', fontSize: '16px' }} />,
  },
];
export const user_sidebar = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    icon: <DashboardIcon sx={{ color: 'white', fontSize: '16px' }} />,
  },
  {
    label: 'Quiz',
    value: 'quiz',
    icon: <QuizIcon sx={{ color: 'white', fontSize: '16px' }} />,
  },
];

export const menubar_navigate_afterClick = [
  {
    event: 'dashboard',
    path: '/dashboard',
  },
  {
    event: 'initialize-quiz',
    path: '/initialize-quiz',
  },
  {
    event: 'quiz',
    path: '/quiz',
  },
  {
    event: 'questions',
    path: '/questions',
  },
  {
    event: 'add-question',
    path: '/add-question',
  },
  {
    event: 'delete-question',
    path: '/delete-question',
  },
];
