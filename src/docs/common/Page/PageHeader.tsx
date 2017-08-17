import * as React from 'react';
import { HTMLProps, SFC } from 'react';

const componentStyle = {
  base: {
    marginBottom: 18,
    fontSize: 36,
  },
};

export interface PageHeaderProps extends HTMLProps<HTMLHeadingElement> {}

export const PageHeader: SFC<PageHeaderProps> = ({ children }) => (
  <h2 style={componentStyle.base}>{children}</h2>
);

PageHeader.displayName = 'PageHeader';
