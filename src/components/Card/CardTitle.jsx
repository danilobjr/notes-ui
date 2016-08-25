import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { colors } from 'styles'
import { propTypes } from 'utils'

const componentStyle = {
    base: {
        paddingTop: 22,
        paddingRight: 22,
        paddingBottom: 22,
        paddingLeft: 22,
        margin: 0,
        fontSize: '22px',
        fontWeight: 400,
        lineHeight: '22px'
    },
    noPaddingBottom: {
        paddingBottom: 0
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.bgColor === colors.background.white && style.noPaddingBottom,
    {
        color: props.fontColor,
        backgroundColor: props.bgColor
    }
])

@Radium
class CardTitle extends Component {
    render() {
        const { style, fontColor, bgColor, children, ...others } = this.props;

        return (
            <h2 style={getStyle(componentStyle, this.props)} {...others}>{children}</h2>
        );
    }
}

CardTitle.propTypes = {
    fontColor: propTypes.fontColors,
    bgColor: propTypes.backgroundColors
};

CardTitle.defaultProps = {
    children: 'Title',
    fontColor: colors.font.gray,
    bgColor: colors.background.white
};

export {
    CardTitle
}
