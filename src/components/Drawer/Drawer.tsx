import * as React from 'react';
import { omit } from 'lodash';
import { PureComponent } from 'react';
import { Paper, PaperProps } from './../';

const componentStyle = {
  base: {
    width: 296,
    height: '100vh',
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.style,
]);

export interface DrawerProps extends PaperProps {}

export class Drawer extends PureComponent<DrawerProps, {}> {
  render() {
    const { children, ...otherProps } = omit(this.props, ['style']);

    return (
      <Paper
        // style={getStyle(componentStyle, this.props)}
        className="nui-drawer"
        {...otherProps}
      >
        {children}
      </Paper>
    );
  }
}
