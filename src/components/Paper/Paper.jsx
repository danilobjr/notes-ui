import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

const elevation = {
    0: {
        boxShadow: 'none'
    },
    1: {
        boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2)`
    },
    2: {
        boxShadow: `0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4)`
    },
    3: {
        boxShadow: `0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4)`
    },
    4: {
        boxShadow: `0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4)`
    },
    5: {
        boxShadow: `0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4)`
    }
};

const defaultStyle = {
    width: '300px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxSizing: 'border-box'
};

@Radium
class Paper extends Component {
    render() {
        const style = Object.assign({}, defaultStyle, elevation[this.props.elevation]);

        return (
            <div className="paper" style={style}>Paper Component</div>
        );
    }
}

Paper.propTypes = {
    elevation: PropTypes.oneOf([0,1,2,3,4,5])
};

Paper.defaultProps = {
    elevation: 1
};

export {
    Paper
};
