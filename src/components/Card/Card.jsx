import React, { Component, PropTypes } from 'react'
import { Paper, CardTitle, CardBody } from 'components'
import { colors } from 'styles'
import { propTypes } from 'utils'

class Card extends Component {
    render() {
        const { background, elevation } = this.props;

        return (
             <Paper elevation={elevation} background={background}>
                 {this.renderTitle()}
                 <CardBody>dsadhas dlskajdh asldkjsha aldkasjdh askadjhas ldkasjdhas ldkjasdl askjhd</CardBody>
             </Paper>
        )
    }

    renderTitle () {
        const { title, color, background } = this.props;

        if (!title) {
            return null;
        }

        let bgColor;

        if (!background && color) {
            bgColor = color;
        }

        const fontColor = color ? colors.font.white : colors.font.gray;

        return <CardTitle fontColor={fontColor} bgColor={bgColor}>{title}</CardTitle>;
    }
}

Card.propTypes = {
    title: PropTypes.string,
    color: propTypes.backgroundColors,
    background: PropTypes.string,
    elevation: propTypes.elevation
};

export {
    Card
}
