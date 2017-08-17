import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { SimpleExampleIconButton } from './SimpleExampleIconButton';
import { StylingExampleIconButton } from './StylingExampleIconButton';
import { PropertiesIconButton } from './PropertiesIconButton';

export const ComponentIconButtonPage: SFC<any> = () => (
  <Page headerText="Icon Button">
    <Paragraph>
      Icon Button is like FAB, but is small and can be used to secundary actions on the page.
                </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <SimpleExampleIconButton />
    <StylingExampleIconButton />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesIconButton />
  </Page>
);

ComponentIconButtonPage.displayName = 'ComponentIconButtonPage';
