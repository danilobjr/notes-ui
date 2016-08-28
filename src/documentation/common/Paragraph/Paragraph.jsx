import React from 'react'

const componentStyle = {
    base: {
        fontWeight: 100
    }
};

const getStyle = (style, props) => 
    Object.assign({}, style.base, props.style)

const Paragraph = (props) => 
    <p style={getStyle(componentStyle, props)}>{props.children}</p>

export {
    Paragraph
}
