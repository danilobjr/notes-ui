import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { FAB } from 'components';

const description = 'FAB require that you use the <code class="inline">iconName</code> ' +
  'property. By default it has a redish background and a white color for the icon.';

const code = `import React from 'react';
import { FAB } from 'jsc-react-ui';

const Example = () => <FAB iconName="plus" />;`;

export const SimpleExampleFAB: SFC<any> = () => (
  <Example
    title="Simple"
    description={description}
    code={code}
  >
    <FAB iconName="plus" />
  </Example>
);

SimpleExampleFAB.displayName = 'SimpleExampleFAB';
