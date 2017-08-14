import * as React from 'react';
import { HTMLProps, SFC } from 'react';

const componentStyle = {
  base: {
    margin: '30px 0 20px',
  },
};

export interface TopicHeaderProps extends HTMLProps<HTMLHeadingElement> {}

export const TopicHeader: SFC<TopicHeaderProps> = ({ children }) => (
  <h3 style={componentStyle.base}>{children}</h3>
);

TopicHeader.displayName = 'TopicHeader';
