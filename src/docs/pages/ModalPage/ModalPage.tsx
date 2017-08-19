import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { CustomExample } from './CustomExample';
import { SimpleExample } from './SimpleExample';
import { Properties } from './Properties';

export const ModalPage: SFC<any> = () => (
  <Page headerText="Modal">
    <Paragraph>
      Modal is used to focus on a new context without navigate to other page.
    </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <SimpleExample />
    <CustomExample />

    <TopicHeader>Properties</TopicHeader>

    <Properties />
  </Page>
);

ModalPage.displayName = 'ModalPage';
