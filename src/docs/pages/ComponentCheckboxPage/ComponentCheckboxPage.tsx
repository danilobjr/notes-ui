import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { RawExampleCheckbox } from './RawExampleCheckbox';
import { LabelExampleCheckbox } from './LabelExampleCheckbox';
import { CheckedExampleCheckbox } from './CheckedExampleCheckbox';
import { StylingExampleCheckbox } from './StylingExampleCheckbox';
import { PropertiesCheckbox } from './PropertiesCheckbox';

export const ComponentCheckboxPage: SFC<any> = () => (
  <Page headerText="Checkbox">
    <Paragraph>Checkbox is used to mark some option.</Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleCheckbox />
    <LabelExampleCheckbox />
    <CheckedExampleCheckbox />
    <StylingExampleCheckbox />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesCheckbox />
  </Page>
);

ComponentCheckboxPage.displayName = 'ComponentCheckboxPage';
