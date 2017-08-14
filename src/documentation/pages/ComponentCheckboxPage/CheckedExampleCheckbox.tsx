import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'documentation/common';
import { Checkbox } from 'components';

const description = 'Checkbox can be checked as its initial state.';

const code = `import React from 'react';
import { Checkbox } from 'jsc-react-ui';

const CheckboxExample = () => <Checkbox checked>Cinema</Checkbox>;`;

export const CheckedExampleCheckbox: SFC<any> = () => (
  <Example
    title="Checked"
    description={description}
    code={code}
  >
    <Checkbox checked>Cinema</Checkbox>
  </Example>
);

CheckedExampleCheckbox.displayName = 'CheckedExampleCheckbox';
