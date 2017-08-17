import * as React from 'react';
import * as omit from 'lodash.omit';
import * as Radium from 'radium';
import { CSSProperties, HTMLProps, PureComponent, ReactNode } from 'react';
import { Drawer, DrawerItem } from 'components';

const componentStyle = {
  base: {
    display: 'flex',
    width: '100%',
  },
  drawer: {
    height: 'calc(100vh - 64px)',
    top: 64,
    width: 0,
  },
  drawerOpen: {
    width: 296,
  },
  view: {
    flex: 1,
    overflowY: 'auto',
  } as CSSProperties,
};

const getDrawerStyle = (style, props) => ([
  style.drawer,
  props.drawerOpen && style.drawerOpen,
]);

export interface LayoutBodyProps extends HTMLProps<HTMLDivElement> {
  drawerOpen: boolean;
  drawerItems: ReactNode | ReactNode[];
}

@Radium
export class LayoutBody extends PureComponent<LayoutBodyProps, {}> {
  render() {
    const { drawerItems, children, ...otherProps } = omit(this.props, ['drawerOpen', 'style']);

    return (
      <div
        style={componentStyle.base}
        {...otherProps}
      >
        <Drawer style={getDrawerStyle(componentStyle, this.props)}>
          {drawerItems}
        </Drawer>

        <div style={componentStyle.view}>{children}</div>
      </div>
    );
  }
}
