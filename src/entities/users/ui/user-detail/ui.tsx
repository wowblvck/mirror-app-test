import styled from '@emotion/styled';
import { useUnit } from 'effector-react';
import React from 'react';
import { colors } from '@/shared/styles';
import { usersModel } from '../../model';

const UserContainer = styled.div({
  padding: '20px',
  maxWidth: '500px',
  margin: '20px auto',
  borderRadius: 6,
  border: '1px solid #CDD9ED',
  background: '#fff',
  transition: 'border .3s ease',
  ':hover': {
    outline: 'none',
    borderColor: `${colors.borderActive}`,
  },
});

const ListContainer = styled.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

const ListTitle = styled.span({
  fontSize: 16,
  fontWeight: 500,
});

export const UserDetail = () => {
  const user = useUnit(usersModel.$user);
  const actionSelect = useUnit(usersModel.$actionSelectUser);
  const userDetailRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (user && userDetailRef.current) {
      userDetailRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [actionSelect, user]);

  return (
    user && (
      <UserContainer ref={userDetailRef}>
        <ListContainer>
          <li>
            <ListTitle>First Name:</ListTitle> {user.firstName}
          </li>
          <li>
            <ListTitle>Last Name:</ListTitle> {user.lastName}
          </li>
          <li>
            <ListTitle>Email:</ListTitle> {user.email}
          </li>
          <li>
            <ListTitle>Phone:</ListTitle> {user.phone}
          </li>
          <li>
            <ListTitle>State:</ListTitle> {user.address.state}
          </li>
          <li>
            <ListTitle>City:</ListTitle> {user.address.city}
          </li>
          <li>
            <ListTitle>ZIP:</ListTitle> {user.address.zip}
          </li>
          <li>
            <ListTitle>Description:</ListTitle> {user.description}
          </li>
        </ListContainer>
      </UserContainer>
    )
  );
};
