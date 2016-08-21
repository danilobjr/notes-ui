import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const style = {
    input: {
        base: {
            width: '24px',
            height: '24px',
            marginRight: '16px',
            border: '1px solid #dfdfdf',
            borderRadius: '3px'
        },
        checked: {
            backgroundColor: '#f0f0f0'
        }
    },
    checkMark: {
        base: {
            display: 'none'
        },
        inputChecked: {
            display: 'block',
            borderBottom: '2px solid rgb(184, 184, 184)',
            borderLeft: '2px solid rgb(184, 184, 184)',
            borderTop: 'none',
            borderRight: 'none',
            width: '13px',
            height: '5px',
            transformOrigin: '0px 100% 0px',
            transform: 'rotateZ(-45deg) translate(-1px, 14px)'
        }
    }
};

const getInputStyle = (style, props) => ([
    style.input.base,
    props.checked && style.input.checked
])

const getCheckMarkStyle = (style, props) => ([
    style.checkMark.base,
    props.checked && style.checkMark.inputChecked
])

@Radium
class CheckboxInput extends Component {
    render() {
        return (
            <div style={getInputStyle(style, this.props)}>
                <div style={getCheckMarkStyle(style, this.props)}></div>
            </div>
        );
    }
}

CheckboxInput.propTypes = {
    checked: PropTypes.bool
};

CheckboxInput.defaultProps = {
    checked: false
};

export {
    CheckboxInput
}
