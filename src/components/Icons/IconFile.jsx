import React, { PropTypes } from 'react'
import { colors } from 'styles'

const IconFile = (props) => 
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 204 256"
        style={props.style}
    >
        <path
            d="M21.66 0C9.66 0 0 9.64 0 21.61v212.78C0 246.367 9.662 256 21.658 256h160.68c12 0 21.66-9.63 21.66-21.61V76.72L127.15-.002H21.66zm92.31 18.442l71.56 71.442h-71.56V18.442z"
            fill={props.color}
        />
    </svg>

IconFile.propTypes = {
    color: PropTypes.string
};

export {
    IconFile
}
