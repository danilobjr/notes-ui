import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { HTMLProps, PureComponent } from 'react';
import { BackgroundColor, FontColor } from './../styles';

const componentStyle = {
  base: {
    paddingTop: 22,
    paddingRight: 22,
    paddingBottom: 22,
    paddingLeft: 22,
    margin: 0,
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '22px',
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.bgColor === BackgroundColor.White && style.noPaddingBottom,
  {
    color: props.fontColor,
    backgroundColor: props.bgColor,
  },
]);

export interface CardTitleProps extends HTMLProps<HTMLHeadingElement> {
  bgColor: BackgroundColor;
  fontColor: FontColor;
}

@Radium
export class CardTitle extends PureComponent<CardTitleProps, {}> {
  static defaultProps: CardTitleProps = {
    bgColor: BackgroundColor.White,
    children: 'Title',
    fontColor: FontColor.White,
  };

  render() {
    const { style, fontColor, bgColor, children, ...others } = this.props;

    return (
      <h2 style={getStyle(componentStyle, this.props)} {...others}>{children}</h2>
    );
  }
}
