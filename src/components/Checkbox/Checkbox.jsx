import React, { Component } from 'react'
import Radium from 'radium'

const style = {
    base: {
        border: '1px solid #dfdfdf',
        width: '24px',
        height: '24px',
        borderRadius: '3px'
    }
};

@Radium
class Checkbox extends Component {
    render() {
        return (
            <div style={style.base}></div>
        );
    }
}

export {
    Checkbox
}
