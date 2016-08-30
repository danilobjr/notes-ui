import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { RawExampleDrawerItem } from './RawExampleDrawerItem'
import { ContentExampleDrawerItem } from './ContentExampleDrawerItem'
import { PropertiesDrawerItem } from './PropertiesDrawerItem'

class ComponentDrawerItemPage extends Component {
    render() {
        return (
            <Page headerText="Drawer Item">
                <Paragraph>
                    Drawer Item is an item that you can put inside a Drawer.
                    So, only make sense show all these examples with a Drawer as a wrapper.
                </Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <RawExampleDrawerItem />
                <ContentExampleDrawerItem />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesDrawerItem />
            </Page>
        );
    }
}

export {
    ComponentDrawerItemPage
}
