import { useGate } from 'effector-react';
import { Header } from '@/widgets/header';
import { UserDetail, UsersList, usersModel } from '@/entities/users';
import { Container } from '@/shared/ui';

export const UsersPage = () => {
  useGate(usersModel.UsersGate);

  return (
    <>
      <Header />
      <main>
        <Container>
          <UsersList />
          <UserDetail />
        </Container>
      </main>
    </>
  );
};
