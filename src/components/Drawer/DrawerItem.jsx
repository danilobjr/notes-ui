import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Icon } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        display: 'flex',
        height: 54,
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',

        ':hover': {
            backgroundColor: colors.drawerItem.hover
        },

        ':active': {
            backgroundColor: colors.drawerItem.active
        }
    },
    icon: {
        marginLeft: 25
    },
    text: {
        marginLeft: 25
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class DrawerItem extends Component {
    render() {
        return (
            <div style={getStyle(componentStyle, this.props)}>
                {this.renderIcon()}
                <span style={componentStyle.text}>{this.props.text}</span>
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
}

DrawerItem.propTypes = {
    iconName: PropTypes.string,
    text: PropTypes.string
};

export {
    DrawerItem
}
