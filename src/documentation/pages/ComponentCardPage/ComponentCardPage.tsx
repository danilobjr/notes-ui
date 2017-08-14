import * as React from 'react';
import { SFC } from 'react';
import { Page, TopicHeader, Paragraph } from 'documentation/common';
import { RawExampleCard } from './RawExampleCard';
import { TitleAndContentExampleCard } from './TitleAndContentExampleCard';
import { StylingExampleCard } from './StylingExampleCard';
import { ImageExampleCard } from './ImageExampleCard';
import { PropertiesCard } from './PropertiesCard';

export const ComponentCardPage: SFC<any> = () => (
  <Page headerText="Card">
    <Paragraph>Card is a nice place to put some compact info.</Paragraph>

    <TopicHeader>Examples</TopicHeader>

    <RawExampleCard />
    <TitleAndContentExampleCard />
    <StylingExampleCard />
    <ImageExampleCard />

    <TopicHeader>Properties</TopicHeader>

    <PropertiesCard />
  </Page>
);

ComponentCardPage.displayName = 'ComponentCardPage';
