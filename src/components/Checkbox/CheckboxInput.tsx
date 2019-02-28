import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

export type CheckboxInputProps = HTMLProps<HTMLDivElement>;

export const CheckboxInput: SFC<CheckboxInputProps> = ({ checked, ...otherProps }) => (
  <div
    className={classNames(
      'nui-checkbox-input',
      { '-checked': checked },
    )}
    {...otherProps}
  >
    <div className="check-mark" />
  </div>
);

CheckboxInput.displayName = 'CheckboxInput';

CheckboxInput.defaultProps = {
  checked: false,
};
