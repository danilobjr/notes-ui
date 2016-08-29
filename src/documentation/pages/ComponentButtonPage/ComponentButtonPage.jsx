import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleButton } from './RawExampleButton'

class ComponentButtonPage extends Component {
    render() {
        return (
            <Page headerText="Button">
                <Paragraph>Button is a nice and beatiful component that's looks like a button or a link.</Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <RawExampleButton />

                <TopicHeader>Properties</TopicHeader>
            </Page>
        );
    }
}

export {
    ComponentButtonPage
}
