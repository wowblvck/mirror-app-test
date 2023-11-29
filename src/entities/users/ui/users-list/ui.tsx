import styled from '@emotion/styled';
import { useEvent, useUnit } from 'effector-react';
import { User } from '@/shared/api';
import { ColumnsType, Table } from '@/shared/ui';
import { usersModel } from '../../model';

const columns: ColumnsType<User> = [
  {
    dataIndex: 'id',
    key: 'id',
    title: 'ID',
    sorter: (a, b) => a.id - b.id,
  },
  {
    dataIndex: 'firstName',
    key: 'firstName',
    title: 'First Name',
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
  },
  {
    dataIndex: 'lastName',
    key: 'lastName',
    title: 'Last Name',
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    dataIndex: 'email',
    key: 'email',
    title: 'Email',
  },
  {
    dataIndex: 'phone',
    key: 'phone',
    title: 'Phone',
  },
];

const UsersListContainer = styled.div({
  marginBottom: 15,
});

export const UsersList = () => {
  const users = useUnit(usersModel.$filteredUsers);
  const loading = useUnit(usersModel.$loading);
  const selectUser = useEvent(usersModel.selectUser);

  return (
    <UsersListContainer>
      <Table<User>
        dataSource={users}
        columns={columns}
        loading={loading}
        onRow={(record) => selectUser(record)}
      />
    </UsersListContainer>
  );
};
