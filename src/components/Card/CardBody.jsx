import React from 'react'

const style = {
    base: {
        padding: '22px',
        color: '#727272',
        fontWeight: 300,
    }
};

const CardBody = (props) => <div style={style.base}>{props.children}</div>

export {
    CardBody
}
