import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleFloatingInput } from './RawExampleFloatingInput'
import { IconAndPlaceholderExampleFloatingInput } from './IconAndPlaceholderExampleFloatingInput'

class ComponentFloatingInputPage extends Component {
    render() {
        return (
            <Page headerText="Floating Input">
                <Paragraph>
                    Floating Input is a beautiful rounded input that can be used for, for example, search.
                </Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <RawExampleFloatingInput />
                <IconAndPlaceholderExampleFloatingInput />

                <TopicHeader>Properties</TopicHeader>

            </Page>
        );
    }
}

export {
    ComponentFloatingInputPage
}
