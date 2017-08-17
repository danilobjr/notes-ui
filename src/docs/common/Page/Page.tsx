import * as React from 'react';
import { HTMLProps, SFC } from 'react';
import { PageHeader } from './PageHeader';

const componentStyle = {
  base: {
    maxWidth: 1200,
    padding: '10px 10px 50px',
    margin: '0 auto',
  },
};

export interface PageProps extends HTMLProps<HTMLDivElement> {
  headerText: string;
}

export const Page: SFC<PageProps> = ({ children, headerText }) => (
  <div style={componentStyle.base}>
    <PageHeader>{headerText}</PageHeader>
    <div>{children}</div>
  </div>
);

Page.displayName = 'Page';
