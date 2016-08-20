import React, { PropTypes } from 'react'
import { colors } from 'styles'
import { propTypes } from 'utils'

const defaultStyle = {
    base: {
        padding: '22px',
        margin: 0,
        fontSize: '22px',
        fontWeight: 400,
        lineHeight: '22px'
    },
    noColor: {
        paddingBottom: 0
    }
};

const CardTitle = (props) => {
    const style = Object.assign({}, defaultStyle.base, {
        color: props.fontColor,
        backgroundColor: props.bgColor || 'transparent'
    }, !props.bgColor ? defaultStyle.noColor : {});

    return (
        <h2 style={style}>{props.children}</h2>
    );
}

CardTitle.propTypes = {
    children: PropTypes.string,
    fontColor: propTypes.fontColors,
    bgColor: propTypes.backgroundColors
};

CardTitle.defaultProps = {
    children: 'Title',
    fontColor: colors.font.gray
};

export {
    CardTitle
}
