import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper, IconButton } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        display: 'flex',
        width: '100vw',
        minHeight: 64,
        backgroundColor: colors.background.white,
        alignItems: 'center'
    },
    icon: {
        marginLeft: 11
    },
    appTitle: {
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
        return (
            <Paper style={getStyle(componentStyle, this.props)}>
                {this.renderToggleMenuButton()}
                <h1 style={componentStyle.appTitle}>{this.props.appTitle}</h1>
            </Paper>
        );
    }

    renderToggleMenuButton() {
        const { showToggleMenuButton } = this.props;

        if (!showToggleMenuButton) {
            return null;
        }

        return <IconButton
            style={componentStyle.icon}
            iconName="menu" flat
            onClick={this.handleToggleMenuClick.bind(this)} />;
    }

    handleToggleMenuClick() {
        this.props.onToggleMenuClick();
    }
}

AppBar.propTypes = {
    showToggleMenuButton: PropTypes.bool,
    appTitle: PropTypes.string,
    onToggleMenuClick: PropTypes.func
};

AppBar.defaultProps = {
    showToggleMenuButton: true,
    onToggleMenuClick: () => {}
};

export {
    AppBar
}
