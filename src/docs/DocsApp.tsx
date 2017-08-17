import * as React from 'react';
import { CSSProperties, PureComponent, ReactNode } from 'react';
import { AppBar, LayoutBody, DrawerItem } from 'components';
import { getDrawerItems } from './drawerItems';
import { ComponentAppBarPage } from './pages';

const componentStyle = {
  base: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#ececec',
    flexDirection: 'column',
  } as CSSProperties,
};

export interface DocumentationAppState {
  currentPage: any;
}

export class DocsApp extends PureComponent<{}, DocumentationAppState> {
  constructor() {
    super();

    this.state = {
      currentPage: ComponentAppBarPage,
    };
  }

  render() {
    return (
      <div style={componentStyle.base}>
        <AppBar title="JS Channel - UI Kit" hideToggleDrawerIconButton />

        <LayoutBody
          drawerItems={getDrawerItems(this.setCurrentPage.bind(this))}
          drawerOpen
        >
          {this.renderCurrentPage()}
        </LayoutBody>
      </div>
    );
  }

  renderCurrentPage() {
    return React.createElement(this.state.currentPage);
  }

  setCurrentPage(page: ReactNode) {
    this.setState({ currentPage: page });
  }
}
