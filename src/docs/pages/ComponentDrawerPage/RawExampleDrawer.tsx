import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Drawer } from 'components';

const description = 'This is how you get Drawer if you don"t pass any props. ' +
  'Just a empty sidebar with size of the entire screen.';

const code = `import React from 'react';
import { Drawer } from 'jsc-react-ui':

const DrawerExample = () => <Drawer />;`;

export const RawExampleDrawer: SFC<any> = () => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <Drawer />
  </Example>
);

RawExampleDrawer.displayName = 'RawExampleDrawer';
