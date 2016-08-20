import React from 'react'

const defaultStyle = {
    padding: '22px',
    color: '#727272',
    fontWeight: 300,
    fontSize: '16px'
};

const CardBody = (props) => <div style={defaultStyle}>{props.children}</div>

export {
    CardBody
}
