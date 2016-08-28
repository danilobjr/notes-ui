import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Drawer, DrawerItem } from 'components'

const componentStyle = {
    base: {
        display: 'flex',
        width: '100vw'
    },
    drawer: {
        height: 'calc(100vh - 64px)',
        top: 64,
        width: 0
    },
    drawerOpen: {
        width: 296
    },
    view: {
        flex: 1,
        overflowY: 'auto'
    }
};

const getDrawerStyle = (style, props) => ([
    style.drawer,
    props.drawerIsOpen && style.drawerOpen
])

@Radium
class LayoutBody extends Component {
    render() {
        const { style, drawerIsOpen, drawerItems, children, ...others } = this.props;

        return (
            <div style={componentStyle.base} {...others}>
                <Drawer style={getDrawerStyle(componentStyle, this.props)}>
                    {drawerItems}
                </Drawer>

                <div style={componentStyle.view}>{children}</div>
            </div>
        );
    }
}

LayoutBody.propTypes = {
    drawerIsOpen: PropTypes.bool,
    drawerItems: PropTypes.arrayOf(PropTypes.element)
};

LayoutBody.defaultProps = {
    drawerIsOpen: false
};

export {
    LayoutBody
}
