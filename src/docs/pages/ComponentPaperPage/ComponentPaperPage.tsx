import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { SimpleExamplePaper } from './SimpleExamplePaper';
import { PropertiesPaper } from './PropertiesPaper';

export const ComponentPaperPage: SFC<any> = () => (
  <Page headerText="Paper">
    <Paragraph>
      Paper is used to give elevation sensation.
      To do that, it uses box shadow.
    </Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <SimpleExamplePaper />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesPaper />
  </Page>
);

ComponentPaperPage.displayName = 'ComponentPaperPage';
