import * as React from 'react';
import { CSSProperties, HTMLProps, SFC } from 'react';

const componentStyle = {
  base: {
    fontWeight: 100,
  },
};

const getStyle = (style: CSSProperties) => Object.assign({}, componentStyle.base, style);

export interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {}

export const Paragraph: SFC<ParagraphProps> = ({ children, style, ...otherProps}) => (
  <p
    style={getStyle(style)}
    {...otherProps}
  >
    {children}
  </p>
);

Paragraph.displayName = 'Paragraph';
