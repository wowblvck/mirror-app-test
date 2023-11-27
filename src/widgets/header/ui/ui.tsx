import { css } from '@emotion/react';
import { SearchBar } from '@/features/search-bar';
import { Container } from '@/shared/ui';

const style = css({
  padding: '20px 0',
});

export const Header = () => {
  return (
    <header css={style}>
      <Container>
        <SearchBar />
      </Container>
    </header>
  );
};
