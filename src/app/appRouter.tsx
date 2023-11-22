import { createBrowserRouter, Navigate } from 'react-router-dom';
import { UsersPage } from '@/pages/users';
import { routes } from '@/shared/config';

const appRouter = createBrowserRouter([
  {
    path: routes.base,
    children: [
      {
        element: <Navigate replace to={routes.users.base} />,
        index: true,
      },
      {
        Component: UsersPage,
        path: routes.users.base,
      },
    ],
  },
]);

export default appRouter;
