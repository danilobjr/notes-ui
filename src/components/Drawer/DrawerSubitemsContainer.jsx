import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Icon } from 'components'
import { DrawerContent } from './DrawerContent'
import { colors } from 'styles'

const componentStyle = {
    base: {
        cursor: 'pointer',
        userSelect: 'none',
    },
    rootItem: {
        display: 'flex',
        alignItems: 'center',

        ':hover': {
            backgroundColor: colors.drawerItem.hover
        },

        ':active': {
            backgroundColor: colors.drawerItem.active
        }
    },
    expandIcon: {
        width: 16,
        margin: '0 18px'
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class DrawerSubitemsContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            subitemsContainerIsExpanded: props.expanded
        };
    }

    render() {
        const { style, iconName, text, expanded, children, ...others } = this.props;

        return (
            <div style={getStyle(componentStyle, this.props)} {...others}>
                <div
                    style={componentStyle.rootItem}
                    onClick={this.onClick.bind(this)}
                >
                    <DrawerContent iconName={iconName} text={text} />
                    {this.renderExpandSubitemContainerIcons()}
                </div>
                {this.renderSubitemsContainer()}
            </div>
        );
    }

    renderSubitemsContainer () {
        const { children } = this.props;
        const { subitemsContainerIsExpanded } = this.state;

        return subitemsContainerIsExpanded
            ? <div>{children}</div>
            : null;
    }

    renderExpandSubitemContainerIcons() {
        const { children } = this.props;
        const { subitemsContainerIsExpanded } = this.state;

        if (!children) {
            return null;
        }

        if (subitemsContainerIsExpanded) {
            return <Icon style={componentStyle.expandIcon} name="expandLess" />;
        } else {
            return <Icon style={componentStyle.expandIcon} name="expandMore" />;
        }
    }

    onClick() {
        const { subitemsContainerIsExpanded } = this.state;

        this.setState({ subitemsContainerIsExpanded: !subitemsContainerIsExpanded });
    }
}

DrawerSubitemsContainer.propTypes = {
    iconName: PropTypes.string,
    text: PropTypes.string,
    expanded: PropTypes.bool
};

DrawerSubitemsContainer.defaultProps = {
    expanded: false
};

export {
    DrawerSubitemsContainer
}
