import React from 'react'

const componentStyle = {
    base: {
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#ececec'
    }
};

const getStyle = (style, props) => Object.assign({}, style.base, props.style)

const Layout = (props) => 
    <div style={getStyle(componentStyle, props)}>{props.children}</div>

export {
    Layout
}
