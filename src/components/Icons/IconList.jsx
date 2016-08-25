import React, { PropTypes } from 'react'
import { colors } from 'styles'

const IconList = (props) => 
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 257 145"
        style={props.style}
    >
        <path
            fill={props.color}
            d="M55 0h202v25H55zM0 0h25v25H0zM0 60h25v25H0zM0 120h25v25H0zM55 60h202v25H55zM55 120h202v25H55z"
        />
    </svg>

IconList.propTypes = {
    color: PropTypes.string
};

export {
    IconList
}
