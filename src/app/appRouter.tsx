import { createBrowserRouter, Navigate } from 'react-router-dom';
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
        async lazy() {
          const { UsersPage } = await import('@/pages/users');
          return { Component: UsersPage };
        },
        path: routes.users.base,
      },
    ],
  },
]);

export default appRouter;
