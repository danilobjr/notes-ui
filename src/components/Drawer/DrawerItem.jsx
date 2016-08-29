import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Icon } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        display: 'flex',
        cursor: 'pointer',
        userSelect: 'none',
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    rootItem: {
        display: 'flex',
        height: 54,
        alignItems: 'center'
    },
    icon: {
        marginLeft: 25
    },
    text: {
        marginLeft: 25
    },
    mouseEvents: {
        ':hover': {
            backgroundColor: colors.drawerItem.hover
        },

        ':active': {
            backgroundColor: colors.drawerItem.active
        }
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

const getRootItemStyle = style => ([
    style.rootItem,
    style.mouseEvents
])

@Radium
class DrawerItem extends Component {
    render() {
        const { style, iconName, text, ...others } = this.props;

        return (
            <div style={getStyle(componentStyle, this.props)} {...others}>
                <div style={getRootItemStyle(componentStyle)}>
                    {this.renderIcon()}
                    <span style={componentStyle.text}>{this.props.text}</span>
                </div>
                {this.renderSubitemsContainer()}
            </div>
        );
    }

    renderIcon() {
        const { iconName } = this.props;

        if (!iconName) {
            return null;
        }

        return <Icon style={componentStyle.icon} name={iconName} />;
    }

    renderSubitemsContainer() {
        const { children } = this.props;

        return children
            ? <div>{children}</div>
            : null;
    }
}

DrawerItem.propTypes = {
    iconName: PropTypes.string,
    text: PropTypes.string
};

export {
    DrawerItem
}
