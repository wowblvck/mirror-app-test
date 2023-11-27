import { createEffect, createEvent, createStore, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { filltextApi, User } from '@/shared/api';

const getUsersListFx = createEffect(async () => {
  const res = await filltextApi.users.getUsersList();
  return res.data;
});

const UsersGate = createGate();

const $users = restore(getUsersListFx.doneData, []);

const $loading = getUsersListFx.pending;

const $filteredUsers = createStore<User[]>([]).on($users, (_, payload) => payload);

const selectUser = createEvent<User>();

const $user = restore(selectUser, null);

sample({
  clock: UsersGate.open,
  target: getUsersListFx,
});

export { $users, $loading, $filteredUsers, getUsersListFx, UsersGate, selectUser, $user };
