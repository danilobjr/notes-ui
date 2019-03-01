import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Paper, PaperProps } from './../';

export type DrawerProps = PaperProps;

export const Drawer: SFC<DrawerProps> = ({ children, className, ...otherProps }) => (
  <Paper
    className={classNames('nui-drawer', className)}
    {...otherProps}
  >
    {children}
  </Paper>
);

Drawer.displayName = 'Drawer';
