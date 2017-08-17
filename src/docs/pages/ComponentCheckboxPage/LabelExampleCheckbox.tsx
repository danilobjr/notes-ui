import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Checkbox } from 'components';

const description = 'You can pass a label inside Checkbox body.';

const code = `import React from 'react';
import { Checkbox } from 'jsc-react-ui';

const CheckboxExample = () => <Checkbox>Cinema</Checkbox>`;

export const LabelExampleCheckbox: SFC<any> = () => (
  <Example
    title="Label"
    description={description}
    code={code}
  >
    <Checkbox>Cinema</Checkbox>
  </Example>
);

LabelExampleCheckbox.displayName = 'LabelExampleCheckbox';
