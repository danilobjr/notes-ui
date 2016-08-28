import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { AppBar, DrawerItem } from 'components'
import { LayoutBody } from './LayoutBody'

const componentStyle = {
    base: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ececec',
        boxSizing: 'border-box',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class Layout extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            drawerIsOpen: false
        };
    }

    render() {
        const { style, title, drawerItems, children, ...others } = this.props;
        const { drawerIsOpen } = this.state;

        return (
            <div style={getStyle(componentStyle, this.props)} {...others}>
                <AppBar title={title} onToggleDrawerClick={this.toggleDrawer.bind(this)} />

                <LayoutBody
                    drawerItems={drawerItems}
                    drawerIsOpen={drawerIsOpen}
                >
                    {children}
                </LayoutBody>
            </div>
        );
    }

    toggleDrawer() {
        this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
    }
}

Layout.propTypes = {
    title: PropTypes.string,
    drawerItems: PropTypes.arrayOf(PropTypes.element)
};

export {
    Layout
}
