import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const componentStyle = {
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
        const { style, url, ...others } = this.props;

        return (
            <div style={getStyle(componentStyle, this.props)} {...others}></div>
        );
    }
}

CardImage.propTypes = {
    url: PropTypes.string.isRequired
};

export {
    CardImage
}
