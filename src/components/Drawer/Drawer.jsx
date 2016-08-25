import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper } from 'components'

const componentStyle = {
    base: {
        width: 296,
        height: '100vh'
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class Drawer extends Component {
    render() {
        const { style, children, ...others } = this.props;

        return (
            <Paper style={getStyle(componentStyle, this.props)} {...others}>
                {children}
            </Paper>
        );
    }
}

export {
    Drawer
}
