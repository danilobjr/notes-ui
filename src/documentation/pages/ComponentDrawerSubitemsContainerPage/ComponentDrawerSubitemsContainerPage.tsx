import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'documentation/common';
import { RawExampleDrawerSubitemsContainer } from './RawExampleDrawerSubitemsContainer';
import { ContentExampleDrawerSubitemsContainer } from './ContentExampleDrawerSubitemsContainer';
import { PropertiesDrawerSubitemsContainer } from './PropertiesDrawerSubitemsContainer';

export const ComponentDrawerSubitemsContainerPage: SFC<any> = () => (
  <Page headerText="Drawer Subitems Container">
    <Paragraph>
      Drawer Subitems Container is a drawer item that expands to reveal others subitems.
                </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleDrawerSubitemsContainer />
    <ContentExampleDrawerSubitemsContainer />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesDrawerSubitemsContainer />
  </Page>
);

ComponentDrawerSubitemsContainerPage.displayName = 'ComponentDrawerSubitemsContainerPage';
