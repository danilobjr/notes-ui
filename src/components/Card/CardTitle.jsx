import React, { PropTypes } from 'react'
import { colors } from 'styles'
import { propTypes } from 'utils'

const defaultStyle = {
    padding: '22px',
    margin: 0,
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '22px'
};

const CardTitle = (props) => {
    const style = Object.assign({}, defaultStyle, {
        color: props.fontColor,
        backgroundColor: props.bgColor || 'transparent'
    });

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
