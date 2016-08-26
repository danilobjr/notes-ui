import React, { PropTypes } from 'react'

const PageHeader = (props) => 
    <h2>{props.children}</h2>

PageHeader.propTypes = {
    children: PropTypes.string.isRequired
};

export {
    PageHeader
}
