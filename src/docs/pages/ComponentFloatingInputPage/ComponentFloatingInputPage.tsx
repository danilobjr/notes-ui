import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { RawExampleFloatingInput } from './RawExampleFloatingInput';
import { IconAndPlaceholderExampleFloatingInput } from './IconAndPlaceholderExampleFloatingInput';
import { PropertiesFloatingInput } from './PropertiesFloatingInput';

export const ComponentFloatingInputPage: SFC<any> = () => (
  <Page headerText="Floating Input">
    <Paragraph>
      Floating Input is a beautiful rounded input that can be used for, for example, search.
                </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleFloatingInput />
    <IconAndPlaceholderExampleFloatingInput />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesFloatingInput />
  </Page>
);

ComponentFloatingInputPage.displayName = 'ComponentFloatingInputPage';
