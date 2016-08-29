import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { DrawerContent } from './DrawerContent'
import { colors } from 'styles'

const componentStyle = {
    base: {
        display: 'flex',
        cursor: 'pointer',
        userSelect: 'none',
        alignItems: 'center',

        ':hover': {
            backgroundColor: colors.drawerItem.hover
        },

        ':active': {
            backgroundColor: colors.drawerItem.active
        }
    },
    active: {
        backgroundColor: colors.drawerItem.active
    },
    subitem: {
        paddingLeft: 20
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.subitem && style.subitem,
    props.style
])

@Radium
class DrawerItem extends Component {
    render() {
        const { style, iconName, text, subitem, ...others } = this.props;

        return (
            <DrawerContent
                style={getStyle(componentStyle, this.props)}
                iconName={iconName}
                text={text} 
                {...others}
            />
        );
    }
}

DrawerItem.propTypes = {
    iconName: PropTypes.string,
    text: PropTypes.string,
    subitem: PropTypes.bool
};

export {
    DrawerItem
}
