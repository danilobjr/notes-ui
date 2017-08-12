import * as React from 'react';
import { HTMLProps, SFC } from 'react';

const componentStyle = {
  base: {
    padding: '22px',
    color: '#727272',
    fontWeight: 300,
  },
};

export interface CardBodyProps extends HTMLProps<HTMLDivElement> {}

export const CardBody: SFC<CardBodyProps> = ({children, ...otherProps}) => (
  <div style={componentStyle.base} {...otherProps as any}>{children}</div>
);

CardBody.displayName = 'CardBody';
