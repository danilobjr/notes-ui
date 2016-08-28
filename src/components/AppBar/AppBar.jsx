import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper, IconButton } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        display: 'flex',
        width: '100%',
        minHeight: 64,
        backgroundColor: colors.background.white,
        alignItems: 'center',
        zIndex: 10000
    },
    icon: {
        marginLeft: 11
    },
    title: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 11,
        fontSize: 24,
        fontWeight: 400
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class AppBar extends Component {
    render() {
        const { style, title, hideToggleDrawerIconButton, 
            toggleDrawerIconColor, onToggleDrawerClick, ...others } = this.props;

        return (
            <Paper style={getStyle(componentStyle, this.props)} {...others}>
                {this.renderToggleDrawerIconButton()}
                {this.renderTitle()}
            </Paper>
        );
    }

    renderTitle () {
        const { title } = this.props;

        return title
            ? <h1 style={componentStyle.title}>{title}</h1>
            : null;
    }

    renderToggleDrawerIconButton() {
        const { hideToggleDrawerIconButton, toggleDrawerIconColor } = this.props;

        if (hideToggleDrawerIconButton) {
            return null;
        }

        return <IconButton
            style={componentStyle.icon}
            iconName="menu" 
            iconColor={toggleDrawerIconColor}
            flat
            onClick={this.handleToggleDrawerClick.bind(this)} />;
    }

    handleToggleDrawerClick() {
        this.props.onToggleDrawerClick();
    }
}

AppBar.propTypes = {
    title: PropTypes.string,
    hideToggleDrawerIconButton: PropTypes.bool,
    toggleDrawerIconColor: PropTypes.string,
    onToggleDrawerClick: PropTypes.func
};

AppBar.defaultProps = {
    onToggleDrawerClick: () => {}
};

export {
    AppBar
}
