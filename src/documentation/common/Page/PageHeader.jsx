import React, { PropTypes } from 'react'

const componentStyle = {
    base: {
        fontSize: 36
    }
};

const PageHeader = (props) => 
    <h2 style={componentStyle.base}>{props.children}</h2>

PageHeader.propTypes = {
    children: PropTypes.string.isRequired
};

export {
    PageHeader
}
