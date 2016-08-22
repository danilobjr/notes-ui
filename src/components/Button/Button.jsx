import React, { Component } from 'react'
import Radium from 'radium'
import { Paper } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        display: 'inline-block',
        padding: '10px 16px',
        marginBottom: '50px',
        backgroundColor: colors.background.white,
        borderRadius: '3px',
        cursor: 'pointer',
        userSelect: 'none',

        ':hover': {
            backgroundColor: '#f0f0f0'
        },

        ':active': {
            backgroundColor: '#d8d8d8'
        }
    },
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class Button extends Component {
    render() {
        const { onClick, children } = this.props;

        return (
            <Paper
                style={getStyle(componentStyle, this.props)}
                onClick={onClick}
            >
                {children}
            </Paper>
        );
    }
}

export {
    Button
}
