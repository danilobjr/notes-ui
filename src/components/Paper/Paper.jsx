import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { PaperBackground } from 'components'
import { elevation } from 'styles'
import { propTypes } from 'utils'

const defaultStyle = {
    width: '300px',
    backgroundColor: '#f8f8f8',
    borderRadius: '4px',
    boxSizing: 'border-box',
    overflow: 'hidden'
};

@Radium
class Paper extends Component {
    render() {
        const style = Object.assign({}, defaultStyle, elevation[this.props.elevation]);

        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

Paper.propTypes = {
    elevation: propTypes.elevation
};

Paper.defaultProps = {
    elevation: 1
};

export {
    Paper
}
