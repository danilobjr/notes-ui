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

class IconButton extends Component {
    render() {
        return (
            <Button style={componentStyle.base} {...this.props}>
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
