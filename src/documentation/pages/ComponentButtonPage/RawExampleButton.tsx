import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'documentation/common';
import { Button } from 'components';
import { colors } from 'styles';

const description = 'This is how you get Button if you don\'t pass any props. ' +
  'It has a nice elevation and, when hovered, its shadow spreads a little bit.';

const code = `import React from 'react';
import { Button } from 'jsc-react-ui';

const ButtonExample = () => <Button />;`;

export const RawExampleButton: SFC<any> = () => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <Button />
  </Example>
);

RawExampleButton.displayName = 'RawExampleButton';
