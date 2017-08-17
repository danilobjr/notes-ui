import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Drawer, DrawerItem } from 'components';

const componentStyle = {
  base: {
    height: 350,
  },
};

const description = 'You can use the <code class="inline">iconName</code> ' +
  'and <code class="inline">text</code> properties to pass content do Drawer Item.';

const code = `import React from 'react';
import { Drawer, DrawerItem } from c-react-ui';

const style = {
  height: 350,
};

const DrawerItemExample = () => (
  <Drawer style={style}>
    <DrawerItem iconName="file" text="File" />
    <DrawerItem iconName="list" text="Todos" />
  </Drawer>
)`;

export const ContentExampleDrawerItem: SFC<any> = (props) => (
  <Example
    title="Content"
    description={description}
    code={code}
  >
    <Drawer style={componentStyle.base}>
      <DrawerItem iconName="file" text="File" />
      <DrawerItem iconName="list" text="Todos" />
    </Drawer>
  </Example>
);

ContentExampleDrawerItem.displayName = 'ContentExampleDrawerItem';
