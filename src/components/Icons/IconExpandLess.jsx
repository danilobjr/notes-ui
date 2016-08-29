import React, { PropTypes } from 'react'
import { colors } from 'styles'

const IconExpandLess = (props) => {
    const { style, color, ...others } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 155.948"
            style={style}
        >
            <path
                fill={color}
                d="M127.99 0L0 127.99l27.96 27.96L127.99 55.92l100.05 100.03L256 127.99 127.99 0z"
            />
        </svg>
    );
}

IconExpandLess.propTypes = {
    color: PropTypes.string
};

export {
    IconExpandLess
}
