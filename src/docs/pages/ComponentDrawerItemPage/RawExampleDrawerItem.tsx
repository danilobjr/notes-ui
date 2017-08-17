import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Drawer, DrawerItem } from 'components';

const componentStyle = {
  base: {
    height: 350,
  },
};

const description = 'This is how you get a DrawerItem when pass only text prop.';

const code = `import React from 'react';
import { Drawer, DrawerItem } from c-react-ui';

const style = {
  height: 350,
};

const DrawerItemExample = () => (
  <Drawer style={style}>
    <DrawerItem text="Item" />
  </Drawer>
);`;

export const RawExampleDrawerItem: SFC<any> = () => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <Drawer style={componentStyle.base}>
      <DrawerItem text="Item" />
    </Drawer>
  </Example>
);

RawExampleDrawerItem.displayName = 'RawExampleDrawerItem';
