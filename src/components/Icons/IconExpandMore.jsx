import React, { PropTypes } from 'react'
import { colors } from 'styles'

const IconExpandMore = (props) => {
    const { style, color, ...others } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 155.948"
            style={style}
        >
            <path
                fill={color}
                d="M127.99 155.95L0 27.96 27.96 0l100.03 100.03L228.04 0 256 27.96 127.99 155.95z"
            />
        </svg>
    );
}

IconExpandMore.propTypes = {
    color: PropTypes.string
};

export {
    IconExpandMore
}
