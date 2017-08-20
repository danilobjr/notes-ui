import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
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

@Radium
export class Drawer extends PureComponent<DrawerProps, {}> {
  render() {
    const { children, ...otherProps } = omit(this.props, ['style']);

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
