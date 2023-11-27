import { css } from '@emotion/react';
import { useEvent } from 'effector-react';
import React from 'react';
import { Button, Input } from '@/shared/ui';
import { searchModel } from '../model';

const style = css({
  display: 'flex',
  gap: '10px',
  '@media (max-width: 481px)': {
    alignItems: 'center',
    gap: '15px',
    flexDirection: 'column',
  },
});

export const SearchBar = () => {
  const searchChanged = useEvent(searchModel.searchChanged);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      searchChanged(inputRef.current.value);
    }
  };

  return (
    <form css={style} onSubmit={onSubmit}>
      <Input ref={inputRef} placeholder="Начните поиск" />
      <Button>Найти</Button>
    </form>
  );
};
