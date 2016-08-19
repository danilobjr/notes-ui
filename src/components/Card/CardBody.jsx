import React from 'react'

const defaultStyle = {
    padding: '22px'
};

const CardBody = (props) => <div style={defaultStyle}>{props.children}</div>

export {
    CardBody
}
