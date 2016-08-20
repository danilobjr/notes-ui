import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const defaultStyle = {
    height: '195px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    filter: 'brightness(.9)'
};

@Radium
class CardImage extends Component {
    render() {
        const style = Object.assign({}, defaultStyle, {
            backgroundImage: `url(${this.props.url})`
        });

        return (
                <div style={style}></div>
        );
    }
}

CardImage.propTypes = {
    url: PropTypes.string.isRequired
};

export {
    CardImage
}
