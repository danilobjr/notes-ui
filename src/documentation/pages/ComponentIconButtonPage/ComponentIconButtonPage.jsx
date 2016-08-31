import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { SimpleExampleIconButton } from './SimpleExampleIconButton'
import { StylingExampleIconButton } from './StylingExampleIconButton'
import { PropertiesIconButton } from './PropertiesIconButton'

class ComponentIconButtonPage extends Component {
    render() {
        return (
            <Page headerText="Icon Button">
                <Paragraph>
                    Icon Button is like FAB, but is small and can be used to secundary actions on the page.
                </Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <SimpleExampleIconButton />
                <StylingExampleIconButton />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesIconButton />
            </Page>
        );
    }
}

export {
    ComponentIconButtonPage
}
