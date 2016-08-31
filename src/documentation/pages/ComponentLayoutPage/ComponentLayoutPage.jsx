import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleLayout } from './RawExampleLayout'
import { ContentExampleLayout } from './ContentExampleLayout'
import { PropertiesLayout } from './PropertiesLayout'

class ComponentLayoutPage extends Component {
    render() {
        return (
            <Page headerText="Layout">
                <Paragraph>
                    Layout has an AppBar, Drawer and LayoutBody built-in, ready to use.
                    It's nice if you want to layout an app fast.
                </Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <RawExampleLayout />
                <ContentExampleLayout />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesLayout />
            </Page>
        );
    }
}

export {
    ComponentLayoutPage
}
