import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper } from 'components'

const componentStyle = {
    base: {
        position: 'absolute',
        left: -296,
        top: 0,
        width: 296,
        height: '100vh'
    },
    open: {
        left: 0
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.open && style.open,
    props.style
])

@Radium
class Drawer extends Component {
    render() {
        return (
            <Paper style={getStyle(componentStyle, this.props)}>
                {this.props.children}
            </Paper>
        );
    }
}

Drawer.propTypes = {
    open: PropTypes.bool
};

Drawer.defaultProps = {
    open: false
};

export {
    Drawer
}
