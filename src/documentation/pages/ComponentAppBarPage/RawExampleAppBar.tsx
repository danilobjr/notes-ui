import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'documentation/common';
import { AppBar } from 'components';
import { colors } from 'styles';

const description = 'This is how you get AppBar if you don\'t pass any props. ' +
  'It have white as its default background color and the toggle drawer icon is gray.';

const code = `import React from 'react';
import { AppBar } from 'jsc-react-ui';

const AppBarExample = () => (
  <AppBar />
)`;

export const RawExampleAppBar: SFC<any> = () => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <AppBar />
  </Example>
);

RawExampleAppBar.displayName = 'RawExampleAppBar';
