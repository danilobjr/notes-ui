import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Paper, PaperProps } from './../';

export type ButtonProps = {
  flat?: boolean;
} & PaperProps;

export const Button: SFC<ButtonProps> = ({ children, className, flat, ...otherProps }) => (
  <Paper
    className={classNames(
      'nui-button',
      { '-flat': flat },
      className,
    )}
    {...otherProps}
  >
    {children}
  </Paper>
);

Button.displayName = 'Button';

Button.defaultProps = {
  flat: false,
  children: 'Button',
};
