import React, { Component } from 'react'
import { Page, TopicHeader, Paragraph } from 'documentation/common'
import { SimpleExamplePaper } from './SimpleExamplePaper'
import { PropertiesPaper } from './PropertiesPaper'

class ComponentPaperPage extends Component {
    render() {
        return (
            <Page headerText="Paper">
                <Paragraph>
                    Paper is used to give elevation sensation. 
                    To do that, it uses box shadow.
                </Paragraph>

                <TopicHeader>Examples</TopicHeader>

                <SimpleExamplePaper />

                <TopicHeader>Properties</TopicHeader>

                <PropertiesPaper />
            </Page>
        );
    }
}

export {
    ComponentPaperPage
}
