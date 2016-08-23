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
            checked: false
        };
    }

    render() {
        const { className, style, onCheck, onUncheck, ...others } = this.props;

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

    handleClick(e) {
        const { onCheck, onUncheck } = this.props;
        const { checked } = this.state;

        this.setState({ checked: !checked });

        checked ? onUncheck(e.currentTarget) : onCheck(e.currentTarget);
    }
}

Checkbox.propTypes = {
    children: PropTypes.string,
    onCheck: PropTypes.func,
    onUncheck: PropTypes.func
};

Checkbox.defaultProps = {
    onCheck: () => {},
    onUncheck: () => {}
};

export {
    Checkbox
}
