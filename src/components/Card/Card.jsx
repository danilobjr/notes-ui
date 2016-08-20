import React, { Component, PropTypes } from 'react'
import { Paper, CardTitle, CardBody, CardImage } from 'components'
import { colors } from 'styles'
import { propTypes } from 'utils'

class Card extends Component {
    render() {
        const { elevation, children } = this.props;

        return (
             <Paper elevation={elevation}>
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
    color: propTypes.backgroundColors,
    image: PropTypes.string,
    elevation: propTypes.elevation
};

export {
    Card
}
