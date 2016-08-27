import React, { Component } from 'react'
import { Page, P } from 'documentation/common'
import { RawExampleAppBar } from './RawExampleAppBar'

class ComponentAppBarPage extends Component {
    render() {
        return (
            <Page headerText="App Bar">
                <P>App bar is a special bar on top of an app (justifying its name) containing a title and actions.</P>

                <h3>Examples</h3>

                <RawExampleAppBar />
            </Page>
        );
    }
}

export {
    ComponentAppBarPage
}
