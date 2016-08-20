import React, { Component, PropTypes } from 'react'
import { Paper, CardTitle, CardBody } from 'components'
import { colors } from 'styles'
import { propTypes } from 'utils'

class Card extends Component {
    render() {
        const { elevation } = this.props;

        return (
             <Paper elevation={elevation}>
                 {this.renderTitle()}
                 <CardBody>dsadhas dlskajdh asldkjsha aldkasjdh askadjhas ldkasjdhas ldkjasdl askjhd</CardBody>
             </Paper>
        )
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
    elevation: propTypes.elevation
};

export {
    Card
}
