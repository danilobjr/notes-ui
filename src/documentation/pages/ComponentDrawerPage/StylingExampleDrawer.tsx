import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'documentation/common';
import { Drawer, DrawerItem } from 'components';

const componentStyle = {
  base: {
    width: 236,
    height: 350,
    backgroundColor: '#3498db',
  },
};

const description = 'You can style it as well.';

const code = `import React from 'react';
import { Drawer } from 'jsc-react-ui';

const style = {
  base: {
    width: 236,
    height: 350,
    backgroundColor: '#3498db',
  },
};

const DrawerExample = () => <Drawer style={style} />;`;

export const StylingExampleDrawer: SFC<any> = () => (
  <Example
    title="Styling"
    description={description}
    code={code}
  >
    <Drawer style={componentStyle.base} />
  </Example>
);

StylingExampleDrawer.displayName = 'StylingExampleDrawer';
