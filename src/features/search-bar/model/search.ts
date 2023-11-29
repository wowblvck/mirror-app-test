import { createEvent, restore, sample } from 'effector';
import { usersModel } from '@/entities/users';
import { removeSpecialCharacters } from '../lib';

const searchChanged = createEvent<string>();

const $search = restore(searchChanged, '');

usersModel.$user.reset(searchChanged);

sample({
  clock: $search,
  source: usersModel.$users,
  fn: (users, query) =>
    users.filter((user) =>
      [user.lastName, user.firstName, user.email, removeSpecialCharacters(user.phone)].some(
        (field) => field.toLowerCase().includes(query.toLowerCase())
      )
    ),
  target: usersModel.$filteredUsers,
});

export { $search, searchChanged };
