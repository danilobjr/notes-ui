import * as React from 'react';
import { SFC } from 'react';
import { Icon } from 'components';
import { Page, TopicHeader, Paragraph } from 'documentation/common';
import { SimpleExampleIcon } from './SimpleExampleIcon';
import { StylingExampleIcon } from './StylingExampleIcon';
import { PropertiesIcon } from './PropertiesIcon';
import { Icons } from './Icons';

export const ComponentIconPage: SFC<any> = () => (
  <Page headerText="Icon">
    <Paragraph>
      Floating Action Button, or simply Icon, is used as a main action in a view.
    </Paragraph>

    <TopicHeader>Icons</TopicHeader>

    <Icons />

    <TopicHeader>Examples</TopicHeader>

    <SimpleExampleIcon />
    <StylingExampleIcon />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesIcon />
  </Page>
);

ComponentIconPage.displayName = 'ComponentIconPage';
