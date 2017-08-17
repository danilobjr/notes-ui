import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Button } from 'components';

const description = 'If you pass the <code class="inline">flat</code> prop, it will look like minimalist. ' +
  'When clicked, it will reveal a background color.';

const code = `import React from 'react';
import { Button } from 'jsc-react-ui';

const ButtonExample = () => (
  <Button flat />
);`;

export const FlatExampleButton: SFC < any > = () => (
  <Example
    title="Flat"
    description={description}
    code={code}
  >
    <Button flat />
  </Example>
);

FlatExampleButton.displayName = 'FlatExampleButton';
