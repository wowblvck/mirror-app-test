import React from 'react';

type InputProps = React.HTMLAttributes<HTMLInputElement> & object;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});
Input.displayName = 'Input';
