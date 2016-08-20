import React from 'react'

const style = {
    base: {
        width: '100vw',
        height: '100vh',
        padding: '50px',
        backgroundColor: '#ececec'
    }
};

const Layout = (props) => 
    <div style={style.base}>{props.children}</div>

export {
    Layout
}
