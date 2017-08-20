import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { PureComponent } from 'react';
import { Paper, PaperProps } from './../';
import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { elevation, BackgroundColor, FontColor } from './../styles';

const componentStyle = {
  base: {
    borderRadius: '4px',

    ':hover': elevation['2'],
  },
};

export interface CardProps extends PaperProps {
  color?: BackgroundColor;
  image?: string;
  title?: string;
}

@Radium
export class Card extends PureComponent<CardProps, {}> {
  render() {
    const { children, image, style, ...otherProps } = omit(this.props, ['elevation']);

    return (
      <Paper
        style={[componentStyle.base, style]}
        {...otherProps}
      >
        {!!image && <CardImage url={this.props.image} />}
        {this.renderTitle()}
        <CardBody>{children}</CardBody>
      </Paper>
    );
  }

  renderTitle() {
    const { title, color } = this.props;

    if (!title) {
      return null;
    }

    const fontColor = color ? FontColor.White : FontColor.Gray;

    return <CardTitle fontColor={fontColor} bgColor={color}>{title}</CardTitle>;
  }
}
