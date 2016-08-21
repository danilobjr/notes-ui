import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { CheckboxInput } from 'components'

const componentStyle = {
    base: {
        display: 'flex',
        alignItems: 'center'
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
        const { className, style, ...others } = this.props;

        return (
            <div
                className={className}
                style={[componentStyle.base, style]}
                onClick={this.handleClick.bind(this)} {...others}
            >
                <CheckboxInput checked={this.state.checked} />
                {this.renderChildren()}
            </div>
        );
    }

    renderChildren () {
        return this.props.children || null;
    }

    handleClick() {
        this.setState({ checked: !this.state.checked });
    }
}

Checkbox.propTypes = {
    children: PropTypes.string
};

export {
    Checkbox
}
