import React, { Component } from 'react'
import { Layout, DrawerItem } from 'components'
import { ComponentAppBarPage } from './pages'

class DocumentationApp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentPage: ComponentAppBarPage
        };
    }

    render() {
        return (
            <Layout
                appTitle="JS Channel - UI Kit"
                drawerItems={[
                    <DrawerItem key="1" text="Components" />
                ]}
            >
                {this.renderCurrentPage()}
            </Layout>
        );
    }

    renderCurrentPage() {
        return React.createElement(ComponentAppBarPage);
    }
}

export {
    DocumentationApp
}
