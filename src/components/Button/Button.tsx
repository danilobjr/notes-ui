import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { PureComponent } from 'react';
import { Paper, PaperProps } from 'components';
import { elevation, colors } from 'styles';

const componentStyle = {
  base: {
    display: 'inline-block',
    padding: '10px 16px',
    backgroundColor: colors.background.white,
    borderRadius: '3px',
    cursor: 'pointer',
    userSelect: 'none',

    ':hover': elevation['2'],

    ':active': {
      backgroundColor: colors.button.active,
    },
  },
  flat: {
    fontWeight: '300',
    backgroundColor: 'transparent',
    boxShadow: 'none',

    ':hover': elevation['0'],
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.flat && style.flat,
  props.style,
]);

export interface ButtonProps extends PaperProps {
 flat?: boolean;
}

@Radium
export class Button extends PureComponent<ButtonProps, {}> {
  static defaultProps: ButtonProps = {
    flat: false,
    children: 'Button',
  };

  render() {
    const { children, ...otherProps } = omit(this.props, ['flat']);

    return (
      <Paper
        style={getStyle(componentStyle, this.props)}
        {...otherProps}
      >
        {children}
      </Paper>
    );
  }
}
