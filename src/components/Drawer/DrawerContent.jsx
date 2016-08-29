import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Icon } from 'components'

const componentStyle = {
    base: {
        flex: 1,
        display: 'flex',
        height: 54,
        alignItems: 'center'
    },
    mainIcon: {
        marginLeft: 25
    },
    text: {
        flex: 1,
        marginLeft: 25
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class DrawerContent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            subitemsContainerIsOpen: false
        };
    }

    render() {
        const { style, iconName, text, subitem, ...others } = this.props;

        return (
            <div style={getStyle(componentStyle, this.props)} {...others}>
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

        return <Icon style={componentStyle.mainIcon} name={iconName} />;
    }
}

DrawerContent.propTypes = {
    iconName: PropTypes.string,
    text: PropTypes.string
};

export {
    DrawerContent
}
