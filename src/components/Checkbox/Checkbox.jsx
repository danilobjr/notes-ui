import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const style = {
    base: {
        display: 'flex',
        alignItems: 'center'
    },
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
    },
    label: {
        base: {
            color: 'gray'
        }
    }
};

const getInputStyle = (style, state) => ([
    style.input.base,
    state.checked && style.input.checked
])

const getCheckMarkStyle = (style, state) => ([
    style.checkMark.base,
    state.checked && style.checkMark.inputChecked
])

@Radium
class Checkbox extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            checked: false
        };
    }

    render() {
        return (
            <div style={style.base} onClick={this.handleClick.bind(this)}>
                {this.renderInput()}
                {this.renderLabel()}
            </div>
        );
    }

    renderInput () {
        return (
            <div style={getInputStyle(style, this.state)}>
                <div style={getCheckMarkStyle(style, this.state)}></div>
            </div>
        );
    }

    renderLabel () {
        const { label } = this.props;

        if (!label) {
            return null;
        }

        return (
            <div style={style.label.base}>{label}</div>
        );
    }

    handleClick() {
        this.setState({ checked: !this.state.checked });
    }
}

Checkbox.propTypes = {
    label: PropTypes.string
};

export {
    Checkbox
}
