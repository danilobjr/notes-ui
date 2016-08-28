import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { colors } from 'styles'

const componentStyle = {
    td: {
        padding: '8px 10px',
        fontWeight: 100
    },
    name: {
        color: colors.font.blue
    },
    type: {
        color: colors.font.red
    },
    defaultValue: {
        color: colors.font.gray
    }
}

@Radium
class Property extends Component {
    render() {
        const { name, type, defaultValue, description } = this.props;

        return (
            <tr>
                <td style={[componentStyle.td, componentStyle.name]}>{name}</td>
                <td style={[componentStyle.td, componentStyle.type]}>{type}</td>
                <td style={[componentStyle.td, componentStyle.defaultValue]}>{defaultValue}</td>
                <td style={componentStyle.td}>{description}</td>
            </tr>
        );
    }
}

Property.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    description: PropTypes.string
};

export {
    Property
}
