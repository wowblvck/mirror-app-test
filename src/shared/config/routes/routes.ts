enum RoutePaths {
  BASE = '/',
  USERS_PATH = '/users',
}

type RouteBase = {
  base: string;
};

type UsersRoutes = RouteBase & object;

type Routes = RouteBase & {
  users: UsersRoutes;
};

export const routes: Routes = {
  base: RoutePaths.BASE,
  users: {
    base: RoutePaths.USERS_PATH,
  },
} as const;
