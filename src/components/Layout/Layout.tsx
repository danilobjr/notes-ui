import * as React from 'react';
import { omit } from 'lodash';
import { HTMLProps, PureComponent, ReactNode } from 'react';
import { AppBar } from './../';
import { LayoutBody } from './LayoutBody';

const componentStyle = {
  base: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#ececec',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.style,
]);

export interface LayoutProps extends HTMLProps<HTMLDivElement> {
  title?: string;
  drawerItems?: ReactNode | ReactNode[];
}

export interface LayoutState {
  drawerOpen: boolean;
}

export class Layout extends PureComponent<LayoutProps, LayoutState> {
  static defaultProps: LayoutProps = {
    drawerItems: null,
    title: '',
  };

  constructor(props: LayoutProps) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  render() {
    const { title, drawerItems, children, ...otherProps } = omit(this.props, ['style']);
    const { drawerOpen } = this.state;

    return (
      <div
        // style={getStyle(componentStyle, this.props)}
        className="nui-layout"
        {...otherProps}
      >
        <AppBar
          title={title}
          onToggleDrawerClick={this.toggleDrawer.bind(this)}
        />

        <LayoutBody
          drawerItems={drawerItems}
          drawerOpen={drawerOpen}
        >
          {children}
        </LayoutBody>
      </div>
    );
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
}
