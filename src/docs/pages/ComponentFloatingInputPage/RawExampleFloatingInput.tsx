import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { FloatingInput } from 'components';

const description = 'This is how you get FloatingInput if you don\'t pass any properties. ' +
  'It has a nice elevation when focused.';

const code = `import React from 'react';
import { FloatingInput } from 'jsc-react-ui';

const Example = () => <FloatingInput />;`;

export const RawExampleFloatingInput: SFC<any> = (props) => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <FloatingInput />
  </Example>
);

RawExampleFloatingInput.displayName = 'RawExampleFloatingInput';
