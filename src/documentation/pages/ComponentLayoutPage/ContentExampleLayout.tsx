import * as React from 'react';
import { CSSProperties, SFC } from 'react';
import { Example } from 'documentation/common';
import { Layout, DrawerItem, DrawerSubitemsContainer } from 'components';

const componentStyle = {
  contentContainer: {
    maxWidth: 800,
    margin: '0 auto',
  },
  h1: {
    fontSize: 32,
    fontWeight: 300,
  } as CSSProperties,
};

const description = 'You can set a title, some items to the drawer and content.';

const code = `import React from 'react';
import { Layout, DrawerItem, DrawerSubitemsContainer } from 'jsc-react-ui';

const style = {
  contentContainer: {
    maxWidth: 800,
    margin: '0 auto',
  },
  h1: {
    fontSize: 32,
    fontWeight: 300,
  },
};

const Example = () => (
  <Layout
    title="App Name"
    drawerItems={[
      <DrawerItem key="1" text="Upload" />,
      <DrawerSubitemsContainer key="2" text="Media">
        <DrawerItem text="Photos" subitem />
        <DrawerItem text="Videos" subitem />
      </DrawerSubitemsContainer>
    ]}
  >
    <div style={style.contentContainer}>
      <h1 style={style.h1}>Some content</h1>
    </div>
  </Layout>
)`;

export const ContentExampleLayout: SFC<any> = () => (
  <Example
    title="Content"
    description={description}
    code={code}
  >
    <Layout
      title="App Name"
      drawerItems={[
        <DrawerItem key="1" text="Upload" />,
        <DrawerSubitemsContainer key="2" text="Media">
          <DrawerItem text="Photos" subitem />
          <DrawerItem text="Videos" subitem />
        </DrawerSubitemsContainer>,
      ]}
    >
      <div style={componentStyle.contentContainer}>
        <h1 style={componentStyle.h1}>Some content</h1>
      </div>
    </Layout>
  </Example>
);

ContentExampleLayout.displayName = 'ContentExampleLayout';
