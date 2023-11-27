import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

type SpinProps = {
  size: number;
};

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const Spin = styled.span<SpinProps>(
  {
    border: '5px solid #3437FF',
    opacity: '.7',
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: `${spin} 1s linear infinite`,
  },
  (props) => ({
    width: props.size,
    height: props.size,
  })
);
