import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleDrawer } from './RawExampleDrawer'
import { StylingExampleDrawer } from './StylingExampleDrawer'

class ComponentDrawerPage extends Component {
    render() {
        return (
            <Page headerText="Drawer">
                <Paragraph>Drawer is a sidebar normally used to navigation.</Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <RawExampleDrawer />
                <StylingExampleDrawer />
            </Page>
        );
    }
}

export {
    ComponentDrawerPage
}
