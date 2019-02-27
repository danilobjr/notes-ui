import * as React from 'react';
import { HTMLProps, SFC } from 'react';

export type CardImageProps = {
  url: string;
} & HTMLProps<HTMLDivElement>;

export const CardImage: SFC<CardImageProps> = ({ style, url, ...otherProps }) => (
  <div
    className="nui-card-image"
    style={{
      backgroundImage: `url(${url})`,
      ...style,
    }}
    {...otherProps}
  />
);

CardImage.displayName = 'CardImage';
