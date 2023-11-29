import { createEffect, createEvent, createStore, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { filltextApi, User } from '@/shared/api';

const getUsersListFx = createEffect(async () => {
  const res = await filltextApi.users.getUsersList();
  return res.data;
});

const UsersGate = createGate();

const $users = restore(getUsersListFx, []);

const $loading = getUsersListFx.pending;

const $filteredUsers = createStore<User[]>([]);

sample({
  clock: $users,
  target: $filteredUsers,
});

const selectUser = createEvent<User>();

const $user = restore(selectUser, null);

const $actionSelectUser = createStore<boolean>(false).on(selectUser, (state) => !state);

sample({
  clock: UsersGate.open,
  target: getUsersListFx,
});

export {
  $users,
  $loading,
  $filteredUsers,
  getUsersListFx,
  UsersGate,
  selectUser,
  $actionSelectUser,
  $user,
};
