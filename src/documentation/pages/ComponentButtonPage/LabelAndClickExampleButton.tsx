import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'documentation/common';
import { Button } from 'components';

const description = 'Here you has a label and a click behavior.';

const code = `import React from 'react';
import { Button } from 'jsc-react-ui';

const AppBarExample = () => (
  <Button onClick={() => alert('Button clicked')}>Click me</Button>
);`;

export const LabelAndClickExampleButton: SFC<any> = () => (
  <Example
    title="Label and Click"
    description={description}
    code={code}
  >
    <Button onClick={() => alert('Button clicked')}>Click me</Button>
  </Example>
);

LabelAndClickExampleButton.displayName = 'LabelAndClickExampleButton';
