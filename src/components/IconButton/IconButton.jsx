import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Button, Icon } from 'components'

const componentStyle = {
    base: {
        display: 'flex',
        width: '46px',
        height: '46px',
        padding: 0,
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
        const { style, ...others } = this.props;

        return (
            <Button style={getStyle(componentStyle, this.props)} {...others}>
                <Icon name="search" />
            </Button>
        );
    }
}

IconButton.propTypes = {
    iconName: PropTypes.string.isRequired
};

export {
    IconButton
}
