import React from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & object;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return <button ref={ref} {...props} />;
});
Button.displayName = 'Button';
