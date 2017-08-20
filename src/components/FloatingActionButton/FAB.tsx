import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import * as Color from 'color';
import { PureComponent } from 'react';
import { IconButton, IconButtonProps } from './../';
import { elevation, BackgroundColor, FontColor } from './../styles';

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
    backgroundColor: Color(bgColor).lighten(0.2).rgb().string(),
  },
});

const getStyle = (style, props) => ([
  style.base,
  setBackgroundColor(props.color),
  props.style,
]);

export interface FABProps extends IconButtonProps {}

@Radium
export class FAB extends PureComponent<FABProps, {}> {
  static defaultProps: Partial<FABProps> = {
    color: Color(BackgroundColor.Red).darken(.1).rgb().string(),
    iconColor: FontColor.White,
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
