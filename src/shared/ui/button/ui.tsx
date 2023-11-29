import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { colors } from '@/shared/styles';

const ButtonComp = styled.button({
  width: '100%',
  maxWidth: '120px',
  alignItems: 'center',
  appearance: 'none',
  WebkitAppearance: 'none',
  backgroundColor: '#fff',
  border: `1px solid ${colors.border}`,
  borderRadius: '6px',
  boxShadow: 'none',
  color: '#363636',
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: '14px',
  lineHeight: '25px',
  justifyContent: 'center',
  padding: '8px 16px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  transition: 'border .3s ease',
  ':hover': {
    borderColor: `${colors.borderActive}`,
  },
});

export const Button = React.forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ ...props }, ref) => {
    return <ButtonComp ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';
