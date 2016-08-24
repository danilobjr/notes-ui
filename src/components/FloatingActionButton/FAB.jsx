import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import color from 'color'
import { IconButton } from 'components'
import { elevation, colors } from 'styles'

const componentStyle = {
    base: {
        position: 'absolute',
        width: 56,
        height: 56,
        bottom: 30,
        right: 30,
        boxShadow: '0 6px 16px -5px rgba(0, 0, 0, 0.4)',

        ':hover': Object.assign({}, elevation['2'], {
            boxShadow: '0 10px 26px -7px rgba(0, 0, 0, 0.4)'
        })
    }
};

const setBackgroundColor = bgColor => ({
    backgroundColor: bgColor,

    ':hover': {
        backgroundColor: bgColor
    },

    ':active': {
        backgroundColor: color(bgColor).lighten(.1).rgbString()
    }
})

const getStyle = (style, props) => ([
    style.base,
    props.color && setBackgroundColor(props.color),
    props.style
])

@Radium
class FAB extends Component {
    render() {
        const { iconName, iconColor, onClick } = this.props;

        return (
            <IconButton
                style={getStyle(componentStyle, this.props)}
                iconName={iconName}
                iconColor={iconColor}
                onClick={onClick} />
        );
    }
}

FAB.propTypes = {
    iconName: PropTypes.string,
    color: PropTypes.string,
    iconColor: PropTypes.string,
    onClick: PropTypes.func
};

FAB.defaultProps = {
    color: color(colors.background.red).darken(.1).rgbString(),
    iconColor: colors.font.white,
    onClick: () => {}
};

export {
    FAB
}
