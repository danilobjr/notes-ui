import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { PaperBackground } from 'components'
import { colors, elevation } from 'styles'
import { propTypes } from 'utils'

const componentStyle = {
    base: {
        width: '300px',
        backgroundColor: colors.background.white,
        borderRadius: '4px',
        boxSizing: 'border-box',
        overflow: 'hidden'
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.elevation && elevation[props.elevation],
    props.style
])

@Radium
class Paper extends Component {
    render() {
        const { style, elevation, ...others } = this.props;
            
        return (
            <div
                style={getStyle(componentStyle, this.props)}
                {...others}
            >
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
