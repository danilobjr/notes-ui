import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { CheckboxInput } from 'components'

const style = {
    base: {
        display: 'flex',
        alignItems: 'center'
    },
    label: {
        base: {
            color: 'gray'
        }
    }
};


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
                <CheckboxInput checked={this.state.checked} />
                {this.renderLabel()}
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
