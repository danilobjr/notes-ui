import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleButton } from './RawExampleButton'
import { FlatExampleButton } from './FlatExampleButton'
import { LabelAndClickExampleButton } from './LabelAndClickExampleButton'
import { StylingExampleButton } from './StylingExampleButton'
import { PropertiesButton } from './PropertiesButton'

class ComponentButtonPage extends Component {
    render() {
        return (
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
    }
}

export {
    ComponentButtonPage
}
