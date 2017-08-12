import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { PureComponent, PropTypes } from 'react';
import color from 'color';
import { IconButton, IconButtonProps } from 'components';
import { elevation, colors } from 'styles';

const componentStyle = {
  base: {
    width: 56,
    height: 56,
    boxShadow: '0 6px 16px -5px rgba(0, 0, 0, 0.4)',

    ':hover': {
      boxShadow: '0 10px 26px -7px rgba(0, 0, 0, 0.4)',
    },
  },
};

const setBackgroundColor = bgColor => ({
  backgroundColor: bgColor,

  ':active': {
    backgroundColor: color(bgColor).lighten(0.2).rgbString()
  },
});

const getStyle = (style, props) => ([
  style.base,
  setBackgroundColor(props.color),
  props.style,
]);

export interface FABProps extends IconButtonProps {}

@Radium
class FAB extends PureComponent<FABProps, {}> {
  static defaultProps: Partial<FABProps> = {
    color: color(colors.background.red).darken(.1).rgbString(),
    iconColor: colors.font.white,
  };

  render() {
    const { style, ...otherProps } = omit(this.props, ['style']);

    return (
      <IconButton
        style={getStyle(componentStyle, this.props)}
        {...otherProps}
      />
    );
  }
}
