import React, { Component } from 'react'

const defaultStyle = {
    border: '1px solid #dfdfdf',
    width: '24px',
    height: '24px',
    borderRadius: '3px'
};

class Checkbox extends Component {
    render() {
        return (
            <div style={defaultStyle}></div>
        );
    }
}

export {
    Checkbox
}
