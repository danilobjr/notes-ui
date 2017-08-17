import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Checkbox } from 'components';

const description = 'This is how you get Checkbox if you don"t pass any props. ' +
  'Just a clickable checker.';

const code = `import React from 'react';
import { Checkbox } from 'jsc-react-ui';

const CheckboxExample = () => <Checkbox />;`;

export const RawExampleCheckbox: SFC<any> = (props) => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <Checkbox />
  </Example>
);

RawExampleCheckbox.displayName = 'RawExampleCheckbox';
