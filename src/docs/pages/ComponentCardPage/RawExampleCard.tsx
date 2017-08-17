import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Card } from 'components';

const description = 'This is how you get Card if you don\'t pass any props. ' +
  'Just a piece of paper. ' +
  'It has an elevation and, when hovered, its shadow spreads a little bit. ';

const code = `import React from 'react';
import { Card } from 'jsc-react-ui';

const CardExample = () => <Card />;`;

export const RawExampleCard: SFC<any> = () => (
  <Example
    title="Raw"
    description={description}
    code={code}
  >
    <Card />
  </Example>
);

RawExampleCard.displayName = 'RawExampleCard';
