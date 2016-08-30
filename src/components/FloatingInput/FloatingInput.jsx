import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper } from 'components'
import { elevation, colors } from 'styles'
import { propTypes } from 'utils'

const styleComponent = {
    base: {
        display: 'flex',
        alignItems: 'center',
        height: '54px',
        borderRadius: '27px',
        borderTop: '1px solid white',
        backgroundColor: colors.background.white,

        ':focus': elevation['2']
    },
    input: {
        base: {
            flex: 1,
            width: '100%',
            paddingBottom: '3px',
            marginRight: '18px',
            fontWeight: 300,
            backgroundColor: colors.background.white,
            border: 'none'
        },
        noLeftComponent: {
            marginLeft: '22px'
        }
    }
};

const getInputStyle = (style, props) => ([
    style.input.base,
    !props.leftComponent && style.input.noLeftComponent
])

@Radium
class FloatingInput extends Component {
    render() {
        const { style, leftComponent, ...others } = this.props;

        return (
            <Paper
                style={[styleComponent.base, style]} 
                {...others}
            >
                {this.renderLeftComponent()}
                <input
                    style={getInputStyle(styleComponent, this.props)}
                    type="text"
                    placeholder={this.props.placeholder} 
                />
            </Paper>
        );
    }

    renderLeftComponent() {
        const { leftComponent } = this.props;

        if (!leftComponent) {
            return null;
        }

        return leftComponent;
    }
}

FloatingInput.propTypes = {
    placeholder: PropTypes.string,
    leftComponent: PropTypes.element
};

export {
    FloatingInput
}
