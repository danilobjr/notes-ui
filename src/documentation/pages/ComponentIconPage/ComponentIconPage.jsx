import React, { Component } from 'react'
import { Icon } from 'components'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { SimpleExampleIcon } from './SimpleExampleIcon'
import { StylingExampleIcon } from './StylingExampleIcon'
import { PropertiesIcon } from './PropertiesIcon'
import { Icons } from './Icons'

class ComponentIconPage extends Component {
    render() {
        return (
            <Page headerText="Icon">
                <Paragraph>
                    Floating Action Button, or simply Icon, is used as a main action in a view.
                </Paragraph>

                <TopicHeader>Icons</TopicHeader>

                <Icons />
             
                <TopicHeader>Examples</TopicHeader>

                <SimpleExampleIcon />
                <StylingExampleIcon />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesIcon />
            </Page>
        );
    }
}

export {
    ComponentIconPage
}
