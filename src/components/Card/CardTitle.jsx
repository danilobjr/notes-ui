import React, { PropTypes } from 'react'

const defaultStyle = {
    padding: '22px'
};

const CardTitle = (props) => <div style={defaultStyle}>{props.children}</div>

CardTitle.propTypes = {
    children: PropTypes.string.isRequired
}

export {
    CardTitle
}
