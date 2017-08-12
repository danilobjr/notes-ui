import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { PureComponent, PropTypes } from 'react';
import { Button, ButtonProps, Icon } from 'components';
import { colors } from 'styles';

const componentStyle = {
  base: {
    display: 'flex',
    width: '46px',
    height: '46px',
    padding: 0,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.style,
]);

export interface IconButtonProps extends ButtonProps {
  iconName: string;
  iconColor?: string;
}

@Radium
export class IconButton extends PureComponent<IconButtonProps, {}> {
  render() {
    const { iconName, iconColor, ...otherProps } = omit(this.props, ['style']);

    return (
      <Button
        style={getStyle(componentStyle, this.props)}
        flat
        {...otherProps as any}
      >
        <Icon name={iconName} color={iconColor} />
      </Button>
    );
  }
}
