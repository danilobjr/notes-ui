import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { FAB } from 'components';

const description = 'You can style it using some properties.';

const code = `import React from 'react';
import { FAB } from 'jsc-react-ui';

const Example = () => <FAB iconName="plus" color="#f1c40f" iconColor="#2c3e50" />;`;

export const StylingExampleFAB: SFC<any> = () => (
  <Example
    title="Styling"
    description={description}
    code={code}
  >
    <FAB iconName="plus" color="#f1c40f" iconColor="#2c3e50" />
  </Example>
);

StylingExampleFAB.displayName = 'StylingExampleFAB';
