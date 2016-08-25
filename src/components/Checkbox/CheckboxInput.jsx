import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { colors } from 'styles'

const componentStyle = {
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
            borderBottom: `2px solid ${colors.font.lightGray}`,
            borderLeft: `2px solid ${colors.font.lightGray}`,
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
        const { style, checked, ...others } = this.props;

        return (
            <div style={getInputStyle(componentStyle, this.props)} {...others}>
                <div style={getCheckMarkStyle(componentStyle, this.props)}></div>
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
