import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Paper, PaperProps } from './../';
import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { BackgroundColor, FontColor } from './../styles';

export type CardProps = {
  color?: BackgroundColor;
  image?: string;
  title?: string;
} & PaperProps;

export const Card: SFC<CardProps> = ({
  children,
  className,
  image,
  ...otherProps }) => (
  <Paper
    className={classNames('nui-card', className)}
    {...otherProps}
  >
    {!!image && <CardImage url={this.props.image} />}
    {renderTitle(otherProps)}
    <CardBody>{children}</CardBody>
  </Paper>
);

Card.displayName = 'Card';

Card.defaultProps = {
  color: BackgroundColor.White,
  image: '',
  title: '',
};

const renderTitle = ({ title, color }: CardProps) => {
  if (!title) {
    return null;
  }

  const fontColor: FontColor = !!color ? FontColor.White : FontColor.Gray;

  return <CardTitle fontColor={fontColor} bgColor={color}>{title}</CardTitle>;
};
