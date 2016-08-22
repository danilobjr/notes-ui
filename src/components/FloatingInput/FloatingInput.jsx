import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Paper, IconSearch } from 'components'
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
        withIcon: {
            marginLeft: '14px'
        },
        noIcon: {
            marginLeft: '22px'
        }
    },
    icon: {
        base: {
            width: '20px',
            marginLeft: '20px'
        }
    }
};

const getInputStyle = (style, props) => ([
    style.input.base,
    props.icon && style.input.withIcon,
    !props.icon && style.input.noIcon
])

@Radium
class FloatingInput extends Component {
    render() {
        const { style, ...others } = this.props;

        return (
            <Paper
                style={[styleComponent.base, style]} 
                {...others}
            >
                <IconSearch style={styleComponent.icon.base} color={colors.font.lightGray} />
                <input
                    style={getInputStyle(styleComponent, this.props)}
                    type="text"
                    placeholder={this.props.placeholder} 
                />
            </Paper>
        );
    }
}

FloatingInput.propTypes = {
    elevation: propTypes.elevation,
    placeholder: PropTypes.string
};

FloatingInput.defaultProps = {
    elevation: 2
};

export {
    FloatingInput
}
