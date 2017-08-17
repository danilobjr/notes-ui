import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { SimpleExampleFAB } from './SimpleExampleFAB';
import { StylingExampleFAB } from './StylingExampleFAB';
import { PropertiesFAB } from './PropertiesFAB';

export const ComponentFABPage: SFC<any> = () => (
  <Page headerText="Floating Action Button">
    <Paragraph>
      Floating Action Button, or simply FAB, is used as a main action in a view.
                </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <SimpleExampleFAB />
    <StylingExampleFAB />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesFAB />
  </Page>
);

ComponentFABPage.displayName = 'ComponentFABPage';
