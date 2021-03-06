import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { RawExampleDrawerItem } from './RawExampleDrawerItem';
import { ContentExampleDrawerItem } from './ContentExampleDrawerItem';
import { PropertiesDrawerItem } from './PropertiesDrawerItem';

export const ComponentDrawerItemPage: SFC<any> = () => (
  <Page headerText="Drawer Item">
    <Paragraph>
      Drawer Item is an item that you can put inside a Drawer.
      So, only make sense show all these examples with a Drawer as a wrapper.
    </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleDrawerItem />
    <ContentExampleDrawerItem />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesDrawerItem />
  </Page>
);

ComponentDrawerItemPage.displayName = 'ComponentDrawerItemPage';
