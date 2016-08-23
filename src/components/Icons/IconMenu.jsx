import React, { PropTypes } from 'react'
import { colors } from 'styles'

const IconMenu = (props) => 
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 175"
        style={props.style}
    >
        <g fill="none" stroke={props.color} strokeWidth="25">
            <path d="M0 12.5h256-3.96M0 87.5h256-3.96M0 162.5h256-3.96"/>
        </g>
    </svg>

IconMenu.propTypes = {
    color: PropTypes.string
};

export {
    IconMenu
}
