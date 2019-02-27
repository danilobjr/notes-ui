import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

export type CardBodyProps = HTMLProps<HTMLDivElement>;

export const CardBody: SFC<CardBodyProps> = ({ children, className, ...otherProps }) => (
  <div
    className={classNames('nui-card-body', className)}
    {...otherProps}
  >
    {children}
  </div>
);

CardBody.displayName = 'CardBody';
