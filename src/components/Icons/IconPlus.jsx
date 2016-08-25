import React, { PropTypes } from 'react'
import { colors } from 'styles'

const IconPlus = (props) => {
    const { style, color, ...others } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            style={style}
            {...others}
        >
            <g stroke={color} strokeWidth="25" fill="none">
                <path d="M0 127.5h256M127.5 0v256"/>
            </g>
        </svg>
    );
}

IconPlus.propTypes = {
    color: PropTypes.string
};

export {
    IconPlus
}
