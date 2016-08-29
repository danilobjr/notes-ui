import React from 'react'

const componentStyle = {
    base: {
        fontWeight: 100
    }
};

const getStyle = (style, props) => 
    Object.assign({}, style.base, props.style)

const Paragraph = (props) => {
    const { style, ...others } = props;

    return <p style={getStyle(componentStyle, props)} {...others}>{props.children}</p>;
}

export {
    Paragraph
}
