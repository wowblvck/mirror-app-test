import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { colors } from '@/shared/styles';

const InputComp = styled.input({
  display: 'block',
  width: '100%',
  padding: '8px 16px',
  lineHeight: '25px',
  fontSize: '14px',
  fontWeight: 500,
  borderRadius: '6px',
  appearance: 'none',
  WebkitAppearance: 'none',
  color: '#99A3BA',
  border: `1px solid ${colors.border}`,
  background: '#fff',
  transition: 'border .3s ease',
  '::placeholder': {
    color: '#CBD1DC',
  },
  ':focus': {
    outline: 'none',
    borderColor: `${colors.borderActive}`,
  },
});

export const Input = React.forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => {
    return <InputComp ref={ref} {...props} />;
  }
);
Input.displayName = 'Input';
