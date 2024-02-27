import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Profile } from '../components/profile/Profile';
import { Navigation } from '../components/navigation/Navigation';
import { ErrorPage } from '../components/errorPage/ErrorPage';
import { Chat } from '../components/chat/Chat';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/chat',
        element: <App />,
        children: [
          {
            path: ':chatId',
            element: <Chat />,
          },
        ],
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
