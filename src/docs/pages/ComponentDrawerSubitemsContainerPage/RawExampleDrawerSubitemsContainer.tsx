import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Drawer, DrawerSubitemsContainer, DrawerItem } from 'components';

const componentStyle = {
  base: {
    height: 350,
  },
};

const description = 'This is how you get it if you don\'t pass any props. ' +
  'You can see just the expand icon, but when you click, it expands, showing its subitems.';

const code = `import React from 'react';
import { Drawer, DrawerSubitemsContainer,DrawerItem } from 'jsc-react-ui';

const style = {
  height: 350,
};

const DrawerItemExample = () => (
  <Drawer style={style}>
    <DrawerSubitemsContainer>
      <DrawerItem text="Files" subitem />
    </DrawerSubitemsContainer>
  </Drawer>
);`;

export const RawExampleDrawerSubitemsContainer: SFC<any> = () => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <Drawer style={componentStyle.base}>
      <DrawerSubitemsContainer>
        <DrawerItem text="Files" subitem />
      </DrawerSubitemsContainer>
    </Drawer>
  </Example>
);

RawExampleDrawerSubitemsContainer.displayName = 'RawExampleDrawerSubitemsContainer';
