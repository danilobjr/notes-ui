import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import color from 'color'
import { IconButton } from 'components'
import { elevation, colors } from 'styles'

const componentStyle = {
    base: {
        width: 56,
        height: 56,
        boxShadow: '0 6px 16px -5px rgba(0, 0, 0, 0.4)',

        ':hover': {
            boxShadow: '0 10px 26px -7px rgba(0, 0, 0, 0.4)'
        }
    }
};

const setBackgroundColor = bgColor => ({
    backgroundColor: bgColor,

    ':active': {
        backgroundColor: color(bgColor).lighten(0.2).rgbString()
    }
})

const getStyle = (style, props) => ([
    style.base,
    setBackgroundColor(props.color),
    props.style
])

@Radium
class FAB extends Component {
    render() {
        const { style, iconName, iconColor, ...others } = this.props;

        return (
            <IconButton
                style={getStyle(componentStyle, this.props)}
                iconName={iconName}
                iconColor={iconColor}
                {...others}
            />
        );
    }
}

FAB.propTypes = {
    iconName: PropTypes.string.isRequired,
    color: PropTypes.string,
    iconColor: PropTypes.string
};

FAB.defaultProps = {
    color: color(colors.background.red).darken(.1).rgbString(),
    iconColor: colors.font.white
};

export {
    FAB
}
