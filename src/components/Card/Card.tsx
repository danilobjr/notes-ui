import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Paper, PaperProps } from './../';
import { CardTitle } from './CardTitle';
import { BackgroundColor, FontColor } from './../styles';

export type CardProps = {
  color?: BackgroundColor;
} & PaperProps;

export const Card: SFC<CardProps> = ({
  children,
  className,
  ...otherProps }) => (
  <Paper
    className={classNames('nui-card', className)}
    {...otherProps}
  >
    {children}
  </Paper>
);

Card.displayName = 'Card';

Card.defaultProps = {
  color: null,
};
