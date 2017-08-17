import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { PureComponent } from 'react';
import { Paper, PaperProps } from 'components';
import { CardBody } from 'components/Card/CardBody';
import { CardImage } from 'components/Card/CardImage';
import { CardTitle } from 'components/Card/CardTitle';
import { elevation, colors } from 'styles';

const componentStyle = {
  base: {
    borderRadius: '4px',

    ':hover': elevation['2'],
  },
};

export interface CardProps extends PaperProps {
  color?: string;
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

    const fontColor = color ? colors.font.white : colors.font.gray;

    return <CardTitle fontColor={fontColor} bgColor={color}>{title}</CardTitle>;
  }
}
