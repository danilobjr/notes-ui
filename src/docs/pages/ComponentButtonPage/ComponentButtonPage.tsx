import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'docs/common';
import { RawExampleButton } from './RawExampleButton';
import { FlatExampleButton } from './FlatExampleButton';
import { LabelAndClickExampleButton } from './LabelAndClickExampleButton';
import { StylingExampleButton } from './StylingExampleButton';
import { PropertiesButton } from './PropertiesButton';

export const ComponentButtonPage: SFC<any> = () => (
  <Page headerText="Button">
    <Paragraph>Button is a nice and beatiful component that's looks like a button or a link.</Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleButton />
    <FlatExampleButton />
    <LabelAndClickExampleButton />
    <StylingExampleButton />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesButton />
  </Page>
);

ComponentButtonPage.displayName = 'ComponentButtonPage';
