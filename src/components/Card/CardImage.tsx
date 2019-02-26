import * as React from 'react';
import { omit } from 'lodash';
import { HTMLProps, PureComponent } from 'react';

const componentStyle = {
  base: {
    height: '195px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    filter: 'brightness(.9)',
  },
};

const getStyle = (style, props) => ([
  style.base,
  { backgroundImage: `url(${props.url})` },
]);

export interface CardImageProps extends HTMLProps<HTMLDivElement> {
  url: string;
}

export class CardImage extends PureComponent<CardImageProps, {}> {
  render() {
    const { ...otherProps } = omit(this.props, ['style', 'url']);

    return (
      <div
        // style={getStyle(componentStyle, this.props)}
        className="nui-card-image"
        {...otherProps}
      />
    );
  }
}
