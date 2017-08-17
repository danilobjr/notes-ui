import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { RawExampleDrawer } from './RawExampleDrawer';
import { StylingExampleDrawer } from './StylingExampleDrawer';

export const ComponentDrawerPage: SFC<any> = () => (
  <Page headerText="Drawer">
    <Paragraph>Drawer is a sidebar normally used to navigation.</Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleDrawer />
    <StylingExampleDrawer />
  </Page>
);

ComponentDrawerPage.displayName = 'ComponentDrawerPage';
