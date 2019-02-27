import * as React from 'react';
import * as classNames from 'classnames';
import { ReactNode, SFC } from 'react';
import { Paper, PaperProps } from './../';

export type FloatingInputProps = {
  leftElement?: ReactNode;
  placeholder?: string;
} & PaperProps;

export const FloatingInput: SFC<FloatingInputProps> = ({
  className,
  leftElement,
  placeholder,
  ...otherProps }) => (
  <Paper
    className={classNames(
      'nui-floating-input',
      { '-no-icon': !leftElement },
      className,
    )}
    {...otherProps}
  >
    {!!leftElement && leftElement}

    <input
      className="input"
      type="text"
      placeholder={placeholder}
    />
  </Paper>
);

FloatingInput.displayName = 'FloatingInput';

FloatingInput.defaultProps = {
  placeholder: '',
  leftElement: null,
};
