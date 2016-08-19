import React from 'react'

const defaultStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ececec'
};

const Layout = (props) => 
    <div style={defaultStyle}>{props.children}</div>

export {
    Layout
}
