import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { RawExampleLayout } from './RawExampleLayout';
import { ContentExampleLayout } from './ContentExampleLayout';
import { PropertiesLayout } from './PropertiesLayout';

export const ComponentLayoutPage: SFC<any> = () => (
  <Page headerText="Layout">
    <Paragraph>
      Layout has an AppBar, Drawer and LayoutBody built-in, ready to use.
      It's nice if you want to layout an app fast.
    </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleLayout />
    <ContentExampleLayout />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesLayout />
  </Page>
);

ComponentLayoutPage.displayName = 'ComponentLayoutPage';
