import React, { Component, PropTypes } from 'react'
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
            backgroundColor: '#e8e8e8'
        },

        ':active': {
            backgroundColor: '#d8d8d8'
        }
    },
    flat: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.flat && style.flat,
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

Button.propTypes = {
    flat: PropTypes.bool
};

export {
    Button
}
