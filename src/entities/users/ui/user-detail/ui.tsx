import { useUnit } from 'effector-react';
import { usersModel } from '../../model';

export const UserDetail = () => {
  const user = useUnit(usersModel.$user);

  return (
    user && (
      <ul>
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
      </ul>
    )
  );
};
