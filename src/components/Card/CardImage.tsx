import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

export type CardImageProps = {
  url: string;
} & HTMLProps<HTMLDivElement>;

export const CardImage: SFC<CardImageProps> = ({ className, style, url, ...otherProps }) => (
  <div
    className={classNames('nui-card-image', className)}
    style={{
      backgroundImage: `url(${url})`,
      ...style,
    }}
    {...otherProps}
  />
);

CardImage.displayName = 'CardImage';
