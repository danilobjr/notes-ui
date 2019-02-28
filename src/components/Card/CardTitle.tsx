import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { BackgroundColor, FontColor } from './../styles';

export type CardTitleProps = {
  bgColor?: BackgroundColor;
  fontColor?: FontColor;
} & HTMLProps<HTMLHeadingElement>;

export const CardTitle: SFC<CardTitleProps> = ({
  bgColor,
  children,
  className,
  fontColor,
  ...otherProps }) => (
  <h2
    className={classNames(
      'nui-card-title',
      `_font-${fontColor}`,
      `_bg-${bgColor}`,
      { '_no-padding-bottom': bgColor === 'white' },
      className,
    )}
    {...otherProps}
  >
    {children}
  </h2>
);

CardTitle.displayName = 'CardTitle';

CardTitle.defaultProps = {
  bgColor: BackgroundColor.White,
  fontColor: FontColor.Gray,
};
