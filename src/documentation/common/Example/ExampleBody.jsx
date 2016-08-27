import React, { PropTypes } from 'react'
import { P } from 'documentation/common'

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
        <P style={componentStyle.description}>{props.description}</P>
        {props.children}
    </div>

ExampleBody.propTypes = {
    description: PropTypes.string.isRequired
};

export {
    ExampleBody
}
