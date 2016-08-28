import React, { Component } from 'react'
import { Page, Paragraph } from 'documentation/common'
import { PropertiesAppBar } from './PropertiesAppBar'
import { RawExampleAppBar } from './RawExampleAppBar'
import { TitleAndClickExampleAppBar } from './TitleAndClickExampleAppBar'

class ComponentAppBarPage extends Component {
    render() {
        return (
            <Page headerText="App Bar">
                <Paragraph>App bar is a special bar on top of an app (justifying its name) containing a title and actions.</Paragraph>

                <h3>Examples</h3>

                <RawExampleAppBar />
                <TitleAndClickExampleAppBar />

                <h3>Properties</h3>

                <PropertiesAppBar />
            </Page>
        );
    }
}

export {
    ComponentAppBarPage
}
