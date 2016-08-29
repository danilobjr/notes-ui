import React, { Component } from 'react'
import { AppBar, LayoutBody, DrawerItem } from 'components'
import { getDrawerItems } from './drawerItems'
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
                    drawerItems={getDrawerItems(this.setCurrentPage.bind(this))}  
                >
                    {this.renderCurrentPage()}
                </LayoutBody>
            </div>
        );
    }

    renderCurrentPage() {
        return React.createElement(this.state.currentPage);
    }

    setCurrentPage(page) {
        this.setState({ currentPage: page });
    }
}

export {
    DocumentationApp
}
