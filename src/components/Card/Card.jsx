import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper, CardTitle, CardBody, CardImage } from 'components'
import { elevation, colors } from 'styles'
import { propTypes } from 'utils'

const componentStyle = {
    base: {
        borderRadius: '4px',

        ':hover': elevation['2']
    }
};

@Radium
class Card extends Component {
    render() {
        const { style, image, elevation, children, ...others } = this.props;

        return (
             <Paper
                 style={[componentStyle.base, style]}
                 {...others}
             >
                 {this.renderImage()}
                 {this.renderTitle()}
                 <CardBody>{children}</CardBody>
             </Paper>
        )
    }

    renderImage () {
        const { image } = this.props;

        if (!image) {
            return null;
        }

        return (
            <CardImage url={this.props.image} />
        );
    }

    renderTitle () {
        const { title, color } = this.props;

        if (!title) {
            return null;
        }

        const fontColor = color ? colors.font.white : colors.font.gray;

        return <CardTitle fontColor={fontColor} bgColor={color}>{title}</CardTitle>;
    }
}

Card.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string
};

export {
    Card
}
