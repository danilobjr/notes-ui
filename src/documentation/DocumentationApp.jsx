import React, { Component } from 'react'
import { AppBar, LayoutBody, DrawerItem } from 'components'
import { ComponentAppBarPage } from './pages'

const componentStyle = {
    base: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#ececec',
        flexDirection: 'column'
    }
};

class DocumentationApp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentPage: ComponentAppBarPage
        };
    }

    render() {
        return (
            <div style={componentStyle.base}>
                <AppBar title="JS Channel - UI Kit" hideToggleDrawerIconButton />
                <LayoutBody
                    drawerIsOpen
                    drawerItems={[
                        <DrawerItem key="1" text="Components" />
                    ]}  
                >
                    {this.renderCurrentPage()}
                </LayoutBody>
            </div>
        );
    }

    renderCurrentPage() {
        return React.createElement(ComponentAppBarPage);
    }
}

export {
    DocumentationApp
}
