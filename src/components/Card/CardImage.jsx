import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const style = {
    base: {
        height: '195px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: 'brightness(.9)'
    }
};

const getStyle = (style, props) => ([
    style.base,
    { backgroundImage: `url(${props.url})` }
])

@Radium
class CardImage extends Component {
    render() {
        return (
            <div style={getStyle(style, this.props)}></div>
        );
    }
}

CardImage.propTypes = {
    url: PropTypes.string.isRequired
};

export {
    CardImage
}
