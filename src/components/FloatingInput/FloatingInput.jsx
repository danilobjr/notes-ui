import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper } from 'components'
import { colors } from 'styles'
import { propTypes } from 'utils'

const styleComponent = {
    base: {
        display: 'flex',
        alignItems: 'center',
        height: '54px',
        borderRadius: '27px',
        borderTop: '1px solid white',
        backgroundColor: colors.background.white
    },
    input: {
        base: {
            flex: 1,
            paddingBottom: '3px',
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
    elevation: propTypes.elevation,
    leftComponent: PropTypes.element
};

FloatingInput.defaultProps = {
    elevation: 2
};

export {
    FloatingInput
}