import React from 'react'

const componentStyle = {
    base: {
        margin: '30px 0 20px'
    }
};

const TopicHeader = (props) => 
    <h3 style={componentStyle.base}>{props.children}</h3>

export {
    TopicHeader
}
