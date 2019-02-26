import * as React from 'react';
import { omit } from 'lodash';
import { PureComponent } from 'react';
import { Button, ButtonProps, Icon } from './../';

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

const getStyle = (props) => ([
  componentStyle.base,
  props.style,
]);

export interface IconButtonProps extends ButtonProps {
  iconName: string;
  iconColor?: string;
}

export class IconButton extends PureComponent<IconButtonProps, {}> {
  render() {
    const { iconName, iconColor, ...otherProps } = omit(this.props, ['style']);

    return (
      <Button
        flat
        style={getStyle(this.props)}
        {...otherProps as any}
      >
        <Icon name={iconName} color={iconColor} />
      </Button>
    );
  }
}
