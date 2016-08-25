import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Button, Icon } from 'components'
import { colors } from 'styles'
import { propTypes } from 'utils'

const componentStyle = {
    base: {
        display: 'flex',
        width: '46px',
        height: '46px',
        padding: 0,
        backgroundColor: 'transparent',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const getStyle = (style, props) => ([
    style.base,
    props.style
])

@Radium
class IconButton extends Component {
    render() {
        const { style, iconName, iconColor, ...others } = this.props;

        return (
            <Button
                style={getStyle(componentStyle, this.props)} 
                flat 
                {...others}
            >
                <Icon name={iconName} color={iconColor} />
            </Button>
        );
    }
}

IconButton.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconColor: propTypes.fontColors
};

export {
    IconButton
}
