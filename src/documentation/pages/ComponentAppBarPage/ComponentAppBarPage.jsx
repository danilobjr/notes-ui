import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { PropertiesAppBar } from './PropertiesAppBar'
import { RawExampleAppBar } from './RawExampleAppBar'
import { TitleAndClickExampleAppBar } from './TitleAndClickExampleAppBar'
import { StylingExampleAppBar } from './StylingExampleAppBar'

class ComponentAppBarPage extends Component {
    render() {
        return (
            <Page headerText="App Bar">
                <Paragraph>App bar is a special bar on top of an app (justifying its name) containing a title and actions.</Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <RawExampleAppBar />
                <TitleAndClickExampleAppBar />
                <StylingExampleAppBar />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesAppBar />
            </Page>
        );
    }
}

export {
    ComponentAppBarPage
}
