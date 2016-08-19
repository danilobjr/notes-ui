import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { elevation } from './../../styles'

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
            <div className="paper" style={style}>{this.props.children}</div>
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
}
