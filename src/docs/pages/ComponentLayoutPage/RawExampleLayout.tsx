import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Layout } from 'components';

const description = 'This is how you get Layout if you don\'t pass any properties.' +
  ' It has an AppBar, a Drawer and a LayoutBody, that has a gray background color.' +
  ' You can click on default button to toggle the drawer.';

const code = `import React from 'react';
import { Layout } from 'jsc-react-ui';

const Example = () => <Layout />;`;

export const RawExampleLayout: SFC<any> = () => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <Layout />
  </Example>
);

RawExampleLayout.displayName = 'RawExampleLayout';
