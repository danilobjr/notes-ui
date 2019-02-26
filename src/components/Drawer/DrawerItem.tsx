import * as React from 'react';
import { omit } from 'lodash';
import { PureComponent } from 'react';
import { DrawerContent, DrawerContentProps } from './DrawerContent';
import { DrawerItemColor } from './../styles';

const componentStyle = {
  base: {
    display: 'flex',
    cursor: 'pointer',
    userSelect: 'none',
    alignItems: 'center',

    ':hover': {
      backgroundColor: DrawerItemColor.Hover,
    },

    ':active': {
      backgroundColor: DrawerItemColor.Active,
    },
  },
  active: {
    backgroundColor: DrawerItemColor.Active,
  },
  subitem: {
    paddingLeft: 20,
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.subitem && style.subitem,
  props.style,
]);

export interface DrawerItemProps extends DrawerContentProps {
  iconName?: string;
  text: string;
  subitem?: boolean;
}

export class DrawerItem extends PureComponent<DrawerItemProps, {}> {
  render() {
    const { ...otherProps } = omit(this.props, ['style', 'subitem']);

    return (
      <DrawerContent
        style={getStyle(componentStyle, this.props)}
        className="nui-drawer-content"
        {...otherProps as any}
      />
    );
  }
}
