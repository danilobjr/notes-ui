import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { SimpleExampleFAB } from './SimpleExampleFAB'
import { StylingExampleFAB } from './StylingExampleFAB'
import { PropertiesFAB } from './PropertiesFAB'

class ComponentFABPage extends Component {
    render() {
        return (
            <Page headerText="Floating Action Button">
                <Paragraph>
                    Floating Action Button, or simply FAB, is used as a main action in a view.
                </Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <SimpleExampleFAB />
                <StylingExampleFAB />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesFAB />
            </Page>
        );
    }
}

export {
    ComponentFABPage
}
