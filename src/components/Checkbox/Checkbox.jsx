import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { CheckboxInput } from 'components'

const componentStyle = {
    base: {
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',

        ':hover': {
            cursor: 'pointer'
        }
    }
};


@Radium
class Checkbox extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            checked: props.checked
        };
    }

    render() {
        const { className, style, checked, 
            onCheck, onUncheck, children, ...others } = this.props;

        return (
            <div
                className={className}
                style={[componentStyle.base, style]}
                onClick={this.handleClick.bind(this)} 
                {...others}
            >
                <CheckboxInput checked={this.state.checked} />
                {children}
            </div>
        );
    }

    handleClick(e) {
        const { onCheck, onUncheck } = this.props;
        const { checked } = this.state;

        this.setState({ checked: !checked });

        checked ? onUncheck(e.currentTarget) : onCheck(e.currentTarget);
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onCheck: PropTypes.func,
    onUncheck: PropTypes.func
};

Checkbox.defaultProps = {
    checked: false,
    onCheck: () => {},
    onUncheck: () => {}
};

export {
    Checkbox
}
