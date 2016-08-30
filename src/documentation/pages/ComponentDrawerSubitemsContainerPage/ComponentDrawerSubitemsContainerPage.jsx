import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleDrawerSubitemsContainer } from './RawExampleDrawerSubitemsContainer'
import { ContentExampleDrawerSubitemsContainer } from './ContentExampleDrawerSubitemsContainer'
import { PropertiesDrawerSubitemsContainer } from './PropertiesDrawerSubitemsContainer'

class ComponentDrawerSubitemsContainerPage extends Component {
    render() {
        return (
            <Page headerText="Drawer Subitems Container">
                <Paragraph>
                    Drawer Subitems Container is a drawer item that expands to reveal others subitems.
                </Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <RawExampleDrawerSubitemsContainer />
                <ContentExampleDrawerSubitemsContainer />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesDrawerSubitemsContainer />
            </Page>
        );
    }
}

export {
    ComponentDrawerSubitemsContainerPage
}
