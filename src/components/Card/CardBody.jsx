import React from 'react'

const componentStyle = {
    base: {
        padding: '22px',
        color: '#727272',
        fontWeight: 300,
    }
};

const CardBody = (props) => <div style={componentStyle.base} {...props}>{props.children}</div>

export {
    CardBody
}
