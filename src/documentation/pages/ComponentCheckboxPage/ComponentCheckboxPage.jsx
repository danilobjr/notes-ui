import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleCheckbox } from './RawExampleCheckbox'
import { LabelExampleCheckbox } from './LabelExampleCheckbox'
import { CheckedExampleCheckbox } from './CheckedExampleCheckbox'
import { StylingExampleCheckbox } from './StylingExampleCheckbox'
import { PropertiesCheckbox } from './PropertiesCheckbox'

class ComponentCheckboxPage extends Component {
    render() {
        return (
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
    }
}

export {
    ComponentCheckboxPage
}
