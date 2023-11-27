import { css } from '@emotion/react';
import React from 'react';

const style = css({
  maxWidth: '940px',
  padding: '0 20px',
  margin: '0 auto',
});

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} css={style} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
