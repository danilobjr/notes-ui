import React, { PropTypes } from 'react'
import { Paragraph } from 'documentation/common'

const componentStyle = {
    base: {
        padding: 18
    },
    description: {
        marginTop: 0
    }
};

const ExampleBody = (props) => 
    <div style={componentStyle.base}>
        <Paragraph style={componentStyle.description}>{props.description}</Paragraph>
        {props.children}
    </div>

ExampleBody.propTypes = {
    description: PropTypes.string.isRequired
};

export {
    ExampleBody
}
